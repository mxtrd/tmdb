import { Path } from '@/common/routing/Path'
import { NavLink } from 'react-router'
import clsx from 'clsx'
import { Burger } from '@/common/components/Burger/Burger'
import { ThemeSelect } from '@/common/components/ThemeSelect/ThemeSelect'
import { useHeaderMenu } from './useHeaderMenu'
import s from './Header.module.scss'

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: Path.PopularMovies, label: 'Category Movies' },
  { to: Path.FilteredMovies, label: 'Filtered Movies' },
  { to: Path.Search, label: 'Search' },
  { to: Path.Favorites, label: 'Favorites' },
]

export const Header = () => {
  const { isMenuOpen, navRef, burgerButtonRef, toggleMenu, onBurgerKeyDown, closeMenu } = useHeaderMenu()

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <NavLink
            to={Path.Main}
            aria-label="Go to main page"
            className={s.logoLink}
            onClick={closeMenu}
          >
            <img
              src="/tmdb-logo.svg"
              alt="TMDB logo"
              className={s.logo}
              width={146}
              height={20}
            />
          </NavLink>
          <nav id="main-menu" ref={navRef} className={clsx(s.nav, isMenuOpen && s.navVisible)}>
            <ul className={clsx('listReset', s.list)}>
              {navItems.map(item => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => clsx(s.link, isActive && s.activeLink)}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.buttons}>
            <ThemeSelect />
            <Burger
              buttonRef={burgerButtonRef}
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              onKeyDown={onBurgerKeyDown}
            />
          </div>
        </div>
      </div>
    </header>
  )
}