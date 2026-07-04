# Recipe App

A full-stack recipe app with a self-contained Next.js web application and a separate Expo mobile frontend.

The Next.js app owns the backend, database, auth, API routes, validation, and web UI. The Expo app is a standalone mobile client that calls the same API endpoints exposed by the Next.js app.

## Project Architecture

This repo intentionally avoids shared-package monorepo complexity.

```txt
recipe-app/
  README.md
  web/
    package.json
    package-lock.json
    app/
    components/
    lib/
    prisma/
    stores/
  mobile/
    package.json
    package-lock.json
    app/
    components/
    lib/
    stores/
```

## Core Architecture Rules

- `web` is the source of truth.
- `web` owns all backend/API/database/auth logic.
- `mobile` is only a frontend client.
- `mobile` calls the Next.js API over HTTP.
- `mobile` does not import code from `web`.
- Prisma is only used inside `web`.
- There are no shared packages.
- There are no npm workspaces.
- Each app has its own dependencies and lockfile.
- npm is used for both apps.

## Tech Stack

### Web

- Next.js App Router
- TypeScript
- npm
- Prisma
- Better Auth
- Zod
- React Hook Form
- `@hookform/resolvers/zod`
- Zustand
- Framer Motion

### Mobile

- Expo
- TypeScript
- npm
- React Hook Form
- Zod
- `@hookform/resolvers/zod`
- Zustand
- Local mobile API client using `fetch`

### Database

- Prisma ORM
- Database provider configured in `web/prisma/schema.prisma`

## Features

### Auth

Users can:

- Create an account
- Log in
- Log out
- Access protected routes
- Use protected API endpoints from both web and mobile

Auth is handled by Better Auth inside the Next.js app.

### Recipes

Users can:

- Create recipes
- Edit their own recipes
- Add recipe title
- Add recipe description
- Add recipe instructions
- Add ingredients
- Add tags
- Mark recipes as public or secret
- View individual recipe pages
- View randomized public recipes on the homepage
- Search recipes across multiple fields

### Search

Recipes can be searched by:

- Name/title
- Description
- Tags
- Ingredients
- Creator/profile

### Secret Recipes

Recipes can be public or secret.

Secret recipes are only visible to:

- The recipe owner
- Users invited by the recipe owner

Secret recipes must not appear in:

- Public homepage feeds
- Public search results
- Unauthorized profile views
- Unauthorized API responses

### Social Features

Users can:

- Like recipes
- Unlike recipes
- Save recipes
- Unsave recipes
- View saved recipes

Rules:

- Anonymous users can view public recipe content and like counts.
- Anonymous users cannot like or save recipes.
- Each authenticated user can like a recipe once.
- Each authenticated user can save a recipe once.
- Likes act as public engagement.
- Saves act as private bookmarks.

### Profiles

Users have profile pages that show their recipes.

Profile pages display:

- User display name
- Username, if available
- Public recipes
- Accessible secret recipes
- Recipe cards with like/save metadata

### Dashboards

Authenticated users can access:

- My Recipes dashboard
- Saved Recipes page
- Recipe editing pages
- Secret recipe invite management

## API Overview

The Next.js app exposes API endpoints under `web/app/api`.

### Auth

Better Auth owns the auth routes.

### Recipes

```txt
POST   /api/recipes
GET    /api/recipes/random
GET    /api/recipes/search
GET    /api/recipes/[recipeId]
PATCH  /api/recipes/[recipeId]
```

### Likes

```txt
POST   /api/recipes/[recipeId]/likes
DELETE /api/recipes/[recipeId]/likes
```

### Saves

```txt
POST   /api/recipes/[recipeId]/saves
DELETE /api/recipes/[recipeId]/saves
GET    /api/me/saved-recipes
```

### Users

```txt
GET    /api/users/[userId]
GET    /api/users/[userId]/recipes
```

### Secret Recipe Invites

```txt
GET    /api/recipes/[recipeId]/invites
POST   /api/recipes/[recipeId]/invites
DELETE /api/recipes/[recipeId]/invites/[inviteId]
```

## Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Expo tooling as needed for mobile development
- A supported database for Prisma

## Web Setup

From the repo root:

```bash
cd web
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Run Prisma migration:

```bash
npx prisma migrate dev
```

Start the Next.js app:

```bash
npm run dev
```

The web app should run at:

```txt
http://localhost:3000
```

## Mobile Setup

From the repo root:

```bash
cd mobile
npm install
```

Create a local environment file if needed:

```bash
cp .env.example .env
```

Start Expo:

```bash
npx expo start
```

The mobile app should point to the local Next.js API base URL.

Example:

```txt
EXPO_PUBLIC_API_BASE_URL=http://localhost:3000
```

For physical device testing, use the machine’s LAN IP instead of `localhost`.

Example:

```txt
EXPO_PUBLIC_API_BASE_URL=http://192.168.1.25:3000
```

## Environment Variables

### Web

Expected environment variables may include:

```txt
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
```

### Mobile

Expected environment variables may include:

```txt
EXPO_PUBLIC_API_BASE_URL=http://localhost:3000
```

## Development Notes

### Web

Run from the `web` directory:

```bash
npm run dev
npm run lint
npm run build
```

### Mobile

Run from the `mobile` directory:

```bash
npx expo start
```

## Validation Strategy

Zod is used as the validation source of truth for the Next.js API.

Inside `web`:

```txt
web/lib/validations/
  auth.ts
  recipe.ts
  search.ts
  invite.ts
```

The web app uses these schemas with React Hook Form and `zodResolver`.

The mobile app may duplicate lightweight Zod schemas for client-side form UX, but the Next.js API remains authoritative.

## State Management

Zustand is used for client-side UI state.

Examples:

- Auth UI state
- Recipe feed state
- Search filters
- Pagination state
- Like/save optimistic UI state
- Mobile auth state
- Mobile recipe/search state

## Animation

Framer Motion is used only in the Next.js web UI.

Expo should not use Framer Motion. Mobile animation can be handled separately with React Native-friendly animation tools if needed.

## Security Rules

- Prisma must never be imported by the Expo app.
- Prisma must never be imported by client components.
- Secret recipe access must always be checked server-side.
- The API must never return inaccessible secret recipes.
- Like/save actions require authentication.
- Invite management requires recipe ownership.
- Saved recipes are private to the authenticated user.

## Branch Convention

Feature branches use this format:

```txt
feature/branch-name
```

Examples:

```txt
feature/web-app-foundation
feature/prisma-database-foundation
feature/recipe-like-api
feature/mobile-recipe-feed
```

## Current Vertical Slices

The project is organized into implementation slices:

```txt
Slice 00 — Repo Shape and Architecture
Slice 01 — Next.js Web App Foundation
Slice 02 — Prisma Database Foundation
Slice 03 — Better Auth Setup
Slice 04 — Web Zod Validation Layer
Slice 05 — Web API Utility Layer
Slice 06 — Web Auth UI
Slice 07 — Recipe Creation API
Slice 08 — Web Recipe Creation UI
Slice 09 — Public Random Recipe Feed API
Slice 10 — Web Homepage Random Recipe Feed
Slice 11 — Recipe Detail API
Slice 12 — Web Recipe Detail Page
Slice 13 — Recipe Search API
Slice 14 — Web Recipe Search UI
Slice 15 — User Profile API
Slice 16 — Web User Profile Pages
Slice 17 — Secret Recipe Invite API
Slice 18 — Web Secret Recipe Invite UI
Slice 19 — Recipe Editing API
Slice 20 — Web Recipe Editing UI
Slice 21 — Web My Recipes Dashboard
Slice 22 — Recipe Like API
Slice 23 — Recipe Save API
Slice 24 — Web Like and Save UI
Slice 25 — Saved Recipes API
Slice 26 — Web Saved Recipes Page
Slice 27 — Expo Mobile App Foundation
Slice 28 — Mobile API Client
Slice 29 — Expo Auth
Slice 30 — Expo Recipe Feed
Slice 31 — Expo Recipe Detail
Slice 32 — Expo Recipe Search
Slice 33 — Expo Recipe Creation
Slice 34 — Expo User Profiles
Slice 35 — Expo Saved Recipes
Slice 36 — Expo Secret Recipe Invites
Slice 37 — Cross-App QA and Polish
```

## Definition of Done

The project is considered complete when:

- Web users can sign up, log in, and log out.
- Mobile users can sign up, log in, and log out.
- Users can create public recipes.
- Users can create secret recipes.
- Users can invite others to secret recipes.
- Unauthorized users cannot access secret recipes.
- Users can search recipes by title, description, tags, ingredients, and creator.
- Users can like and unlike recipes.
- Users can save and unsave recipes.
- Users can view saved recipes.
- Web and mobile both use the same Next.js API endpoints.
- Prisma remains isolated to the Next.js app.
- The mobile app does not import code from the web app.
- The repo avoids shared-package monorepo complexity.
