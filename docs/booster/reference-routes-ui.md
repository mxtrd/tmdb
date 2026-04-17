# TMDB Reference Routes and UI Notes

Context document with working routes from the Vercel reference app and mapping to screenshots.
Use it as a visual and structural guide during manual implementation.

## Working Header Routes (Reference)

1. Main:
   - `https://tmdb-kinopoisk.vercel.app/`
   - Matches screenshot `1`.
2. Category movies:
   - `https://tmdb-kinopoisk.vercel.app/movies/popular`
   - Matches screenshot `2`.
   - Note: `.../movies` without a category returns 404 in the reference app.
3. Filtered movies:
   - `https://tmdb-kinopoisk.vercel.app/filtered-movies`
   - Matches screenshot `3`.
4. Search:
   - `https://tmdb-kinopoisk.vercel.app/search?query=Avatar`
   - Matches screenshot `4`.
5. Favorites:
   - `https://tmdb-kinopoisk.vercel.app/favorites`
   - Matches screenshot `5`.
6. Movie details:
   - `https://tmdb-kinopoisk.vercel.app/movie/687163`
   - Matches screenshot `6`.

## UI Observations (from screenshots)

- Overall style: dark theme by default, blue/indigo background, high-contrast white headings.
- Header: logo on the left, navigation in the center, theme toggle on the right.
- Card grid: rounded poster, title below, circular colored rating badge.
- Main: hero section with background + search, then 4 movie sections and `View more`.
- Category: category buttons on top, movie grid below, pagination at the bottom.
- Filtered: left sidebar (sort/rating/genres/reset), movie grid on the right + pagination.
- Search: search field and results list with `Results for "..."` heading.
- Favorites: dedicated page with cards loaded from `localStorage`.
- Details: top movie info block (poster + metadata), cast block, and similar movies block.

## How to Use This Document

- Implement behavior according to the official IT Incubator assignment.
- Match visual style and layout against this reference.
- If assignment requirements and reference UI conflict, assignment requirements take priority.
