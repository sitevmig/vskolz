from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

import httpx
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# MongoDB
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# Optional notification config (works without these — silent skip)
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "").strip()
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Vskolz API")
api_router = APIRouter(prefix="/api")


# ===== Models =====
class BookingCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    phone: str = Field(..., min_length=4, max_length=40)
    service: str = Field(..., min_length=1, max_length=200)
    date: str = Field(..., min_length=1, max_length=40)  # ISO date string YYYY-MM-DD
    time: str = Field(..., min_length=1, max_length=20)  # e.g. "12:00"
    comment: Optional[str] = Field(default="", max_length=1000)


class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    service: str
    date: str
    time: str
    comment: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    notified_telegram: bool = False
    notified_email: bool = False


# ===== Notifications =====
async def send_telegram_notification(b: Booking) -> bool:
    if not (TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID):
        return False
    text = (
        "🌿 *Новая заявка — vskolz*\n\n"
        f"👤 *Имя:* {b.name}\n"
        f"📞 *Телефон:* {b.phone}\n"
        f"💆 *Услуга:* {b.service}\n"
        f"📅 *Дата:* {b.date}\n"
        f"⏰ *Время:* {b.time}\n"
    )
    if b.comment:
        text += f"💬 *Комментарий:* {b.comment}\n"
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    try:
        async with httpx.AsyncClient(timeout=10) as http:
            r = await http.post(
                url,
                json={
                    "chat_id": TELEGRAM_CHAT_ID,
                    "text": text,
                    "parse_mode": "Markdown",
                },
            )
            r.raise_for_status()
            return True
    except Exception as e:
        logger.error(f"Telegram notify failed: {e}")
        return False


def _resend_send_sync(payload: dict) -> dict:
    return resend.Emails.send(payload)


async def send_email_notification(b: Booking) -> bool:
    if not (RESEND_API_KEY and OWNER_EMAIL):
        return False
    html = f"""
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                max-width: 560px; margin: 0 auto; padding: 32px 24px;
                background:#F5EFE6; color:#2A2724;">
      <h2 style="font-family: Georgia, serif; font-weight:300; letter-spacing:-0.02em;
                 font-size:28px; margin:0 0 8px;">Новая заявка — vskolz</h2>
      <p style="color:#6C665E; margin:0 0 24px; font-size:13px; letter-spacing:0.1em;
                text-transform:uppercase;">нежный дом эстетической косметологии</p>
      <table style="width:100%; border-collapse:collapse; background:#FDFBF7;
                    border:1px solid #E2D9C8;">
        <tr><td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;
                       width:120px; color:#6C665E;">Имя</td>
            <td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;">{b.name}</td></tr>
        <tr><td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;
                       color:#6C665E;">Телефон</td>
            <td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;">{b.phone}</td></tr>
        <tr><td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;
                       color:#6C665E;">Услуга</td>
            <td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;">{b.service}</td></tr>
        <tr><td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;
                       color:#6C665E;">Дата</td>
            <td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;">{b.date}</td></tr>
        <tr><td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;
                       color:#6C665E;">Время</td>
            <td style="padding:14px 16px; border-bottom:1px solid #E2D9C8;">{b.time}</td></tr>
        <tr><td style="padding:14px 16px; color:#6C665E;">Комментарий</td>
            <td style="padding:14px 16px;">{b.comment or '—'}</td></tr>
      </table>
      <p style="color:#6C665E; font-size:12px; margin-top:24px;">
        Заявка получена: {b.created_at.strftime('%d.%m.%Y %H:%M UTC')}
      </p>
    </div>
    """
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [OWNER_EMAIL],
            "subject": f"Новая заявка — {b.name} ({b.date} {b.time})",
            "html": html,
        }
        await asyncio.to_thread(_resend_send_sync, params)
        return True
    except Exception as e:
        logger.error(f"Resend notify failed: {e}")
        return False


async def notify_owner(booking_id: str, b: Booking) -> None:
    tg_ok = await send_telegram_notification(b)
    email_ok = await send_email_notification(b)
    try:
        await db.bookings.update_one(
            {"id": booking_id},
            {"$set": {"notified_telegram": tg_ok, "notified_email": email_ok}},
        )
    except Exception as e:
        logger.error(f"Failed to mark booking notified: {e}")


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "vskolz api", "status": "ok"}


@api_router.get("/health")
async def health():
    return {
        "status": "ok",
        "telegram_enabled": bool(TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID),
        "email_enabled": bool(RESEND_API_KEY and OWNER_EMAIL),
    }


@api_router.post("/bookings", response_model=Booking, status_code=201)
async def create_booking(payload: BookingCreate, background: BackgroundTasks):
    booking = Booking(**payload.model_dump())
    doc = booking.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    try:
        await db.bookings.insert_one(doc)
    except Exception as e:
        logger.error(f"Failed to save booking: {e}")
        raise HTTPException(status_code=500, detail="Не удалось сохранить заявку")

    background.add_task(notify_owner, booking.id, booking)
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings(limit: int = 100):
    items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get("created_at"), str):
            try:
                it["created_at"] = datetime.fromisoformat(it["created_at"])
            except Exception:
                pass
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
