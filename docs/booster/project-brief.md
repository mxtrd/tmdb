# TMDB Booster Brief

This document captures the requirements from the IT Incubator test assignment (TMDB Kinopoisk).

## Goal

Build an SPA for searching and browsing movie information using the TMDB API.

## Required Stack

- React
- TypeScript
- Redux Toolkit (slice + RTK Query)
- React Router
- CSS Modules
- Material UI is allowed

## Important Notes

- You may need a VPN to work with TMDB.
- The API key must be stored in environment variables.
- TMDB must be properly credited as the data/image source.
- Images should use the TMDB CDN: `https://image.tmdb.org/t/p/w500/{poster_path}`.

## Reference Routes (UI Baseline)

- `/` (Main)
- `/movies/popular` (default Category Movies route in the reference app)
- `/filtered-movies`
- `/search?query=Avatar`
- `/favorites`
- `/movie/:movieId`

Full route mapping and UI notes: `docs/booster/reference-routes-ui.md`.

## Required Pages

- `Main`
- `Category Movies`
- `Filtered Movies`
- `Search`
- `Favorites`
- `Movie Details`
- `404`

## Core Functionality

- Header on all pages (logo link to main page, navigation menu, theme switcher).
- Footer on all pages, always pinned to the bottom.
- Main page with a welcome section and 4 movie sections (Popular, Top Rated, Upcoming, Now Playing).
- Movie card: poster (or placeholder), title, rating, favorites button, and details navigation.
- Movie categories page with URL-driven state and pagination/infinite scroll.
- Combined filtering and sorting via the Discover endpoint.
- Search flow with proper empty-input and no-results states.
- Favorites persistence via `localStorage`.
- Details page with movie info, top-6 cast, similar movies, and a Back button.
- Global dark/light theme with `localStorage` persistence.
- Global error handling plus response validation with Zod.
- Loaders: linear progress and skeletons (except Favorites).
- Vercel deployment with configured environment variables.

## Minimum Passing Threshold

- Maximum: `192` points
- Minimum to pass into Booster: `126` points
