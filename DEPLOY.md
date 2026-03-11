# Deployment (быстрый и простой)

## Вариант 1: Vercel (рекомендовано)

1. Импортируйте репозиторий в Vercel.
2. Добавьте переменные окружения из `.env.example`.
3. Подключите PostgreSQL (Neon/Supabase/Render Postgres).
4. Выполните миграции:
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```
5. В Telegram BotFather укажите WebApp URL на ваш домен Vercel.
6. Telegram webhook:
   - `https://<your-domain>/api/webhooks/telegram`
7. Cron уже описаны в `vercel.json`.

## Вариант 2: Docker + любой VPS

```bash
docker build -t tg-bot-tribute .
docker run -p 3000:3000 --env-file .env tg-bot-tribute
```

## Что проверить после деплоя

- `/` — домашняя страница.
- `/creator` — creator UI.
- `/admin` — admin UI.
- `/api/public/creator/:slug` — публичный API.
- `/checkout/:purchaseId` — экран симуляции оплаты.

## Ограничения текущего окружения CI агента

Из этого окружения невозможно сделать реальный деплой в ваш аккаунт автоматически
(нет ваших токенов Vercel/Render/Railway и заблокирована установка npm-зависимостей),
поэтому добавлены полностью готовые конфиги для самостоятельного one-click деплоя.


## Автодеплой через GitHub Actions

Добавлен workflow: `.github/workflows/vercel-deploy.yml`.

Нужно добавить секреты в GitHub repo:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

После этого можно запускать вручную `workflow_dispatch` или пушем в ветку `work`.

## Локальный one-command deploy

```bash
export VERCEL_TOKEN=...
export VERCEL_ORG_ID=...
export VERCEL_PROJECT_ID=...
./scripts/deploy-vercel.sh
```
