import s from './Footer.module.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <div>© {currentYear} Kinopoisk Demo · Data courtesy of TMDB.</div>
        </div>
      </div>
    </footer>
  )
}