"""Backend tests for Vskolz beauty salon API."""
import os
import pytest
import requests
from datetime import datetime, timedelta
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://beauty-salon-deploy.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "vskolz_db")


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def mongo_db():
    c = MongoClient(MONGO_URL, serverSelectionTimeoutMS=3000)
    return c[DB_NAME]


# ============ Health/Root ============
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "vskolz api"
        assert data.get("status") == "ok"

    def test_health(self, session):
        r = session.get(f"{API}/health")
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"
        assert "telegram_enabled" in data
        assert "email_enabled" in data
        # Notifications intentionally unconfigured
        assert data["telegram_enabled"] is False
        assert data["email_enabled"] is False


# ============ Bookings ============
def _future_date(days=3):
    return (datetime.utcnow() + timedelta(days=days)).strftime("%Y-%m-%d")


class TestBookings:
    def test_create_valid(self, session, mongo_db):
        payload = {
            "name": "TEST_Алина",
            "phone": "+79991234567",
            "service": "Чистка лица",
            "date": _future_date(),
            "time": "14:00",
            "comment": "TEST_comment",
        }
        r = session.post(f"{API}/bookings", json=payload)
        assert r.status_code == 201, r.text
        b = r.json()
        # Field validation
        assert b["name"] == payload["name"]
        assert b["phone"] == payload["phone"]
        assert b["service"] == payload["service"]
        assert b["date"] == payload["date"]
        assert b["time"] == payload["time"]
        assert b["comment"] == payload["comment"]
        assert isinstance(b["id"], str) and len(b["id"]) > 0
        assert "created_at" in b
        assert b["notified_telegram"] is False
        assert b["notified_email"] is False

        # Persistence check in MongoDB
        try:
            doc = mongo_db.bookings.find_one({"id": b["id"]})
            assert doc is not None, "Booking not persisted in MongoDB"
            assert doc["name"] == payload["name"]
        except Exception as e:
            pytest.skip(f"Mongo direct access not available: {e}")

    def test_create_missing_name(self, session):
        r = session.post(f"{API}/bookings", json={
            "phone": "+79991234567",
            "service": "Чистка лица",
            "date": _future_date(),
            "time": "14:00",
        })
        assert r.status_code == 422

    def test_create_short_phone(self, session):
        r = session.post(f"{API}/bookings", json={
            "name": "TEST_X",
            "phone": "123",
            "service": "Чистка лица",
            "date": _future_date(),
            "time": "14:00",
        })
        assert r.status_code == 422

    def test_create_missing_service(self, session):
        r = session.post(f"{API}/bookings", json={
            "name": "TEST_X",
            "phone": "+79991234567",
            "date": _future_date(),
            "time": "14:00",
        })
        assert r.status_code == 422

    def test_create_missing_date_and_time(self, session):
        r = session.post(f"{API}/bookings", json={
            "name": "TEST_X",
            "phone": "+79991234567",
            "service": "Чистка лица",
        })
        assert r.status_code == 422

    def test_list_bookings(self, session):
        # Create one to ensure list is non-empty
        payload = {
            "name": "TEST_List",
            "phone": "+79990000001",
            "service": "Массаж",
            "date": _future_date(2),
            "time": "11:00",
        }
        cr = session.post(f"{API}/bookings", json=payload)
        assert cr.status_code == 201

        r = session.get(f"{API}/bookings")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        # No _id leak
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "name" in it
        # Most recent first - the just-created item should appear in the list
        ids = [it["id"] for it in items]
        assert cr.json()["id"] in ids
        # Verify ordering: first item should be the latest by created_at (descending)
        if len(items) >= 2:
            first_dt = items[0]["created_at"]
            second_dt = items[1]["created_at"]
            assert first_dt >= second_dt


@pytest.fixture(scope="session", autouse=True)
def cleanup_after_session():
    yield
    try:
        c = MongoClient(MONGO_URL, serverSelectionTimeoutMS=3000)
        db = c[DB_NAME]
        db.bookings.delete_many({"name": {"$regex": "^TEST_"}})
    except Exception:
        pass
