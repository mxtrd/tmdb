import s from './MainPage.module.scss'
import { Button } from '@/common/components'

export const MainHeroSection = () => {
  return (
    <section className={s.mainHero}>
      <div className="container">
        <div className={s.inner}>
          <h1 className={s.title}>Welcome</h1>
          <p className={s.text}>Browse highlighted titles from TMDB</p>
          <Button>Search</Button>
          {/* <Search /> */}
        </div>
      </div>
    </section>
  )
}
