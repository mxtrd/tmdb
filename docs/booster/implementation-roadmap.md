# TMDB Booster Implementation Plan

A practical plan to complete the assignment and reliably reach 126+ points.

## Stage 1. App Foundation

1. Routing and base page skeleton.
2. Header, Footer, and global layout.
3. Theme state and toggle (`localStorage`).
4. RTK Store setup, RTK Query API layer, and base types.

## Stage 2. Data and Core Lists

1. Main page welcome section and search.
2. Four movie sections on main page (6 cards each + View More).
3. Reusable movie card + placeholders + favorites toggle.
4. Category page (4 categories + URL state + pagination/infinite).

## Stage 3. Search, Filters, Details

1. Search page (empty input, no results, clear behavior).
2. Filtered page (sort + rating + genres + reset + combined behavior).
3. Movie details (primary info, cast, similar movies, Back).

## Stage 4. Quality and Polish

1. Global linear progress.
2. Skeletons on all data-driven pages (except Favorites).
3. Global error handling (network/token/404 endpoint).
4. Zod validation for all used endpoint responses.
5. 404 page.

## Stage 5. Finalization

1. Full self-review using the checklist.
2. Vercel deployment with environment variables.
3. Final verification of routes, loaders, errors, and `localStorage`.
