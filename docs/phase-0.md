# Phase A — Auth & Accounts

## Backend

- [ ] Create a Clerk application (Next.js).
- [ ] Add env vars to `web/.env.local` (publishable + secret keys; sign-in/up URLs).
- [ ] Wrap the app with Clerk provider (root layout/provider).
- [ ] Add a minimal protected API route (returns current `userId` or 401).
- [ ] Decide user storage strategy:
  - [ ] Use Clerk as source of truth; in Prisma, store `authorId` as `string` (Clerk `userId`) on Recipe.
  - [ ] (Optional) Add a local `User` table only if you need app-specific profile fields.
- [ ] Commit: `feat(auth): integrate Clerk and protected route`

## UI

- [ ] Add Sign In and Sign Up pages using Clerk prebuilt components.
- [ ] Add a header/nav:
  - [ ] Signed out → “Sign in” button.
  - [ ] Signed in → user avatar/menu (Clerk UserButton) + “Sign out”.
- [ ] Home page shows different copy when signed in vs signed out.
- [ ] Commit: `feat(ui): auth pages and header with signed-in/out states`

## DoD (Definition of Done)

- [ ] You can register and log in through the web UI.
- [ ] Header reflects state (Sign in vs User button).
- [ ] Hitting the protected API returns `{ userId }` when logged in and **401** when logged out.
- [ ] No console errors; environment variables correctly loaded.

## Smoke Tests

- [ ] Sign up new user → redirected to Home → header shows user.
- [ ] Open `/api/me` while signed in → JSON includes `userId`.
- [ ] Open `/api/me` in a private window (logged out) → 401 Unauthorized.
- [ ] Refresh app; auth state persists.

## Notes

- Clerk is the identity source; Prisma’s `Recipe.authorId` links to Clerk `userId` (string).
- Leave private pages/routes out of middleware for now; add protection when “My Recipes” lands.
