# PRD — vskolz (сайт салона красоты)

## Original problem statement
Сделай готовый сайт для салона красоты в Москве (Vskolz, https://yandex.ru/maps/-/CPt3J67-), возьми прайс услуг с Яндекс карт, либо с инсты https://www.instagram.com/vskolz.moscow. С инстаграма по фото скопируй общую концепцию и возьми нужный контент и контакты.

## User choices (verbatim)
- Тип сайта: лендинг-одностраничник (Hero, Услуги+Цены, О нас, Мастера, Галерея, Отзывы, Контакты/Запись)
- Запись: простая форма (имя, телефон, услуга, дата/время) — заявки в БД
- Стиль: с инстаграма / премиум-минимализм (бежевый/кремовый + графит, серифная типографика)
- Язык: только русский
- Доп. интеграции: уведомления в Telegram-бот владельцу + email уведомления (Resend)

## Architecture
- **Frontend**: React (CRA + craco), Tailwind, shadcn/ui (Select, Calendar, Popover, Button, Input, Textarea, Sonner), framer-motion, axios, react-day-picker, date-fns.
- **Backend**: FastAPI, Motor (Mongo), Pydantic v2, httpx (Telegram), resend (email). All routes prefixed `/api`.
- **DB**: MongoDB collection `bookings`. UUID string id, datetime stored ISO.
- **Notifications**: optional — silently skipped when env vars missing.

## Brand content (gathered from public sources)
- Name: вскользь / vskolz — "нежный дом эстетической косметологии"
- Address: Москва, Мясницкая 30/1/2с1 (этаж 4, кабинет 32), м. Чистые пруды / Тургеневская / Сретенский бульвар
- Phone: +7 977 628-34-37 · WhatsApp: wa.me/message/57YQLORSBBD6G1 · Instagram: @vskolz.moscow
- Hours: пн-вс, 09:00–22:00
- Concept: камерное пространство в центре Москвы, женский салон, теплый свет, "нежный дом"
- Real testimonials pulled from Yandex Maps (4 reviews; rating 4.7)
- Services + sample prices reconstructed from public listings (PRX-T33, чистка, пилинги, RF-лифтинг, LPG, лимфодренаж, прессотерапия, лазерная эпиляция, окрашивание бровей хной)

## Implemented (2025-12)
- Sticky header with smooth-scroll nav + mobile menu
- Hero: full-bleed photo, oversized lowercase wordmark "вскользь", tagline, dual CTAs, scroll indicator
- About: 2-col, philosophy text, feature chips
- Services: 5 category tabs, editorial price list (ru-RU formatting), arrow buttons pre-fill booking form via CustomEvent
- Masters: 3 cards
- Gallery: bento grid
- Testimonials: real Yandex reviews + 4.7 rating
- Booking form: shadcn Calendar (date), Select (service grouped by category, time), validation, sonner toast, POST /api/bookings
- Contacts: address, phone (tel:), hours, WhatsApp/Instagram, Yandex map iframe
- Footer
- Backend: POST/GET /api/bookings, /api/health, optional Telegram + Resend notifications (BackgroundTasks)

## Backlog
- **P1**: Owner-side admin panel for bookings (auth + list/manage)
- **P1**: Block already-booked slots (currently any time is selectable)
- **P2**: Подарочные сертификаты (страница покупки)
- **P2**: SEO meta tags, sitemap, OG image
- **P2**: PWA / favicon set
- **P3**: AB-test landing variants, GA/Yandex.Metrika
- **P3**: Lazy load images via blurhash placeholders

## Env (backend/.env)
```
MONGO_URL=... (preset)
DB_NAME=vskolz_db
CORS_ORIGINS=*
TELEGRAM_BOT_TOKEN=         # optional — fill to enable TG notifications
TELEGRAM_CHAT_ID=           # optional — owner chat id
RESEND_API_KEY=             # optional — re_...
OWNER_EMAIL=                # optional — where bookings emails go
SENDER_EMAIL=onboarding@resend.dev
```
After filling: `sudo supervisorctl restart backend`.
