export type ThemeMode = 'light' | 'dark' | 'system'

const THEME_STORAGE_KEY = 'theme'

const isThemeMode = (value: string): value is ThemeMode => {
  return value === 'light' || value === 'dark' || value === 'system'
}

export const getStoredTheme = (): ThemeMode => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  if (savedTheme && isThemeMode(savedTheme)) {
    return savedTheme
  }

  return 'system'
}

export const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement

  if (theme === 'system') {
    root.removeAttribute('data-theme')
    return
  }

  root.setAttribute('data-theme', theme)
}

export const persistTheme = (theme: ThemeMode) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}
