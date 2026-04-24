export const Path = {
  Main: '/',
  CategoryMovies: '/movies/:category',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
  MovieDetails: '/movie/:movieId',
  PopularMovies: '/movies/popular',
  NotFound: '*',
} as const
