# 🍲 Recipe App

A simple full-stack recipe app built with **Next.js 15**, **Prisma**, **Neon Postgres**, and **Clerk** for authentication.  
Future plan: add a companion **Expo mobile app** consuming the same API.

---

## 🚀 Features (current + planned)

- 🔐 User accounts with Clerk (sign up / sign in / sign out)
- 📝 Users can create, edit, and delete their own recipes
- 🌍 Public feed shows a random assortment of recipes from all users
- 🔎 Hot search bar with real-time filtering
- 📱 Expo mobile client (coming soon)

---

## 🛠 Tech Stack

- **Web**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Auth**: Clerk
- **Database**: Neon Postgres with Prisma ORM
- **Mobile**: Expo (planned)

---

## 📦 Getting Started

```bash
# Clone and install
git clone <repo-url>
cd recipe-app/web
npm install
```

```bash
# Add env vars
cp .env.local.example .env.local
# Fill in Clerk + Neon keys
```

```bash
# Run dev server
npm run dev
```

✅ Roadmap

Phase A: Clerk auth + sign in/out UI

Phase B: Prisma Recipe model + public API + random feed

Phase C: User-owned CRUD + “My Recipes” page

Phase D: Expo mobile client
