import { Link } from 'react-router'
import { MoviesSection, PageSeo, type MovieCardData } from '@/common/components'
import { Path } from '@/common/routing/Path'
import { MainHeroSection } from './sections/MainHeroSection/MainHeroSection'
import s from './MainPage.module.scss'

const previewMovies: MovieCardData[] = [
  { id: 1, title: 'The Super Mario Galaxy Movie', posterUrl: '/hero-main-bg.png', rating: 6.8 },
  { id: 2, title: 'Your Heart Will Be Broken', posterUrl: '/hero-main-bg.png', rating: 7.2 },
  { id: 3, title: 'Avatar: Fire and Ash', posterUrl: '/hero-main-bg.png', rating: 7.4 },
  { id: 4, title: 'Project Hail Mary', posterUrl: '/hero-main-bg.png', rating: 8.2 },
  { id: 5, title: 'Thrash', posterUrl: '/hero-main-bg.png', rating: 5.9 },
  { id: 6, title: 'Hoppers', posterUrl: '/hero-main-bg.png', rating: 7.6 },
]

export const MainPage = () => {
  return (
    <>
      <PageSeo
        title="Main"
        description="Main page with highlighted movies and quick access to catalog sections."
      />
      <MainHeroSection />
      <MoviesSection
        className='sectionOffset'
        title="Popular Movies"
        movies={previewMovies}
        maxItems={6}
        moviesPerRow={6}
        actionSlot={
          <Link to={Path.PopularMovies} className={s.viewMoreLink}>View more</Link>
        }
      />
      <MoviesSection
        className='sectionOffset'
        title="Top Rated Movies"
        movies={previewMovies}
        maxItems={6}
        moviesPerRow={6}
        actionSlot={
          <Link to="/movies/top-rated" className={s.viewMoreLink}>View more</Link>
        }
      />
      <MoviesSection
        className='sectionOffset'
        title="Upcoming Movies"
        movies={previewMovies}
        maxItems={6}
        moviesPerRow={6}
        actionSlot={
          <Link to="/movies/upcoming" className={s.viewMoreLink}>View more</Link>
        }
      />
      <MoviesSection
        className='sectionOffset'
        title="Now Playing Movies"
        movies={previewMovies}
        maxItems={6}
        moviesPerRow={6}
        actionSlot={
          <Link to="/movies/now-playing" className={s.viewMoreLink}>View more</Link>
        }
      />
    </>
  )
}