import { Route, Routes } from "react-router"
import { MainPage } from "@/app/ui/MainPage/MainPage"
import { CategoryMoviesPage } from "@/features/category/ui/CategoryMoviesPage"
import { FilteredMoviesPage } from "@/features/filtered-movies/ui/FilteredMoviesPage"
import { SearchPage } from "@/features/search/ui/SearchPage"
import { FavoritesPage } from "@/features/favorites/ui/FavoritesPage"
import { MovieDetailsPage } from "@/features/movie-details/ui/MovieDetailsPage"
import { PageNotFound } from "@/common/components"
import { Path } from "@/common/routing/Path"
 
export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.CategoryMovies} element={<CategoryMoviesPage />} />
    <Route path={Path.FilteredMovies} element={<FilteredMoviesPage />} />
    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
    <Route path={Path.MovieDetails} element={<MovieDetailsPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)
