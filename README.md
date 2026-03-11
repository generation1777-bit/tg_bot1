# Telegram Tribute-like MVP (Next.js + Telegram Mini App)

## Что реализовано
- Next.js App Router fullstack монолит
- Telegram auth endpoint с проверкой `initData`
- Модели Prisma для пользователей, креаторов, каналов, продуктов, покупок, подписок, инвайтов, ledger, audit
- Stub payment provider + idempotent webhook processing
- Логика продления подписки без overlap
- API для creator/subscriber/admin/jogs
- Базовые web-экраны (mobile-first)
- Vitest тесты для ключевой бизнес-логики

## Быстрый старт локально
1. `cp .env.example .env`
2. `docker compose up -d`
3. `npm install`
4. `npx prisma generate`
5. `npx prisma migrate dev --name init`
6. `npm run prisma:seed`
7. `npm run dev`

## Telegram setup
1. Создайте бота через BotFather.
2. Укажите `TELEGRAM_BOT_TOKEN`.
3. Настройте Mini App URL на ваш домен `/`.
4. Webhook: `POST /api/webhooks/telegram`.

## Payment stub flow
1. Создайте подписочный продукт.
2. `POST /api/checkout/subscription` -> получите `purchase.id`.
3. Откройте `/checkout/:purchaseId`.
4. Нажмите simulate success/failure.
5. Проверьте `subscriptions`, `ledgerEntries`, `paymentWebhookEvents`.

## Cron jobs
- `POST /api/jobs/expire-subscriptions`
- `POST /api/jobs/channel-health-check`
- `POST /api/jobs/retry-failed-access`

Локально запуск всех jobs: `npm run jobs:run`

## Vercel deployment
1. Подключите репозиторий в Vercel.
2. Добавьте переменные окружения из `.env.example`.
3. Подключите PostgreSQL (Neon/Supabase/RDS).
4. Выполните миграции в CI/CD шаге.
5. Настройте Vercel Cron на job endpoints.

## Demo сценарий
1. Авторизуйтесь через `/api/auth/telegram`.
2. Создайте creator profile `/api/creator-profile`.
3. Подключите и верифицируйте канал `/api/channels`, `/api/channels/:id/verify`.
4. Создайте subscription и donation продукты.
5. Откройте публичную страницу `/c/:slug`.
6. Сделайте checkout и simulate success.
7. Проверьте выдачу подписки и продление повторной оплатой.
8. Запустите expiration job.
9. Запросите новый invite `/api/my/subscriptions/:id/request-invite`.
10. Проведите donation flow.

## Admin bootstrap
- После `prisma:seed` создается пользователь с `telegramId=1`.


## Deployment quick guide
Подробный гайд: `DEPLOY.md`.
