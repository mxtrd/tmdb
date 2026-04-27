import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Path } from '@/common/routing/Path'
import s from './MainPage.module.scss'
import { SearchForm } from '@/common/components'

export const MainHeroSection = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const onSubmitSearch = (searchQuery: string) => {
    navigate(`${Path.Search}?query=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <section className={s.mainHero}>
      <div className={s.backgroundWrap}>
        <img
          src="/hero-main-bg.png"
          alt=""
          aria-hidden="true"
          className={s.backgroundImage}
        />
      </div>
      <div className="container">
        <div className={s.inner}>
          <h1 className={s.title}>Welcome</h1>
          <p className={s.text}>Browse highlighted titles from TMDB</p>
          <SearchForm
            value={query}
            onValueChange={setQuery}
            onSubmit={onSubmitSearch}
            inputId="main-hero-search"
            inputAriaLabel="Search movie from main page"
          />
        </div>
      </div>
    </section>
  )
}
