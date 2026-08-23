# Movie Platform

A movie streaming platform where you can browse films, build a watchlist, and track what you've watched — built with Next.js and Supabase.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Supabase — Postgres database, authentication, row-level security
- TMDB API for movie data
- Deployed on Vercel

## Status

Early development. Core setup is done; database schema and auth are next.

## Running it locally

You'll need Node 18+, a Supabase project, and a TMDB API key.

```bash
git clone https://github.com/tesnimsouey/movie-platform.git
cd movie-platform
npm install
cp .env.example .env.local
```

Fill in your Supabase URL and key in `.env.local`, then:

```bash
npm run dev
```

Open http://localhost:3000.

## What's built so far

- Project setup: Next.js, Tailwind, Supabase connection
- Database schema — in progress
- Auth, movie browsing, streaming, watchlist/history — not started yet

