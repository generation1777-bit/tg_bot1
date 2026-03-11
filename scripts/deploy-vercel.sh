#!/usr/bin/env bash
set -euo pipefail

if ! command -v npx >/dev/null 2>&1; then
  echo "npx не найден. Установите Node.js/npm." >&2
  exit 1
fi

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "Нужно задать VERCEL_TOKEN" >&2
  exit 1
fi

if [[ -z "${VERCEL_ORG_ID:-}" || -z "${VERCEL_PROJECT_ID:-}" ]]; then
  cat >&2 <<MSG
Нужно задать:
  VERCEL_ORG_ID
  VERCEL_PROJECT_ID
MSG
  exit 1
fi

echo "[1/4] Pulling Vercel project settings"
npx vercel pull --yes --environment=production --token="$VERCEL_TOKEN"

echo "[2/4] Installing dependencies"
npm ci

echo "[3/4] Building production bundle"
npx vercel build --prod --token="$VERCEL_TOKEN"

echo "[4/4] Deploying prebuilt artifacts"
npx vercel deploy --prebuilt --prod --token="$VERCEL_TOKEN"
