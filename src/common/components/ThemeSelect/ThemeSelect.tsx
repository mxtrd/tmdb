import { useEffect, useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { applyTheme, getStoredTheme, persistTheme, type ThemeMode } from '@/common/lib/theme'
import s from './ThemeSelect.module.scss'

const themeOptions: Array<{ value: ThemeMode; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const themeMeta: Record<ThemeMode, { label: string }> = {
  light: { label: 'Light' },
  dark: { label: 'Dark' },
  system: { label: 'System' },
}

const getThemeColorClassName = (theme: ThemeMode) => {
  switch (theme) {
    case 'light':
      return s.themeLight
    case 'dark':
      return s.themeDark
    case 'system':
      return s.themeSystem
    default:
      return s.themeSystem
  }
}

type ThemeIconProps = {
  theme: ThemeMode
  className: string
}

const ThemeIcon = (props: ThemeIconProps) => {
  const {
    theme,
    className
  } = props

  if (theme === 'light') {
    return (
      <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10 14.1667C7.7 14.1667 5.83333 12.3 5.83333 10C5.83333 7.7 7.7 5.83333 10 5.83333C12.3 5.83333 14.1667 7.7 14.1667 10C14.1667 12.3 12.3 14.1667 10 14.1667ZM10 7.5C8.625 7.5 7.5 8.625 7.5 10C7.5 11.375 8.625 12.5 10 12.5C11.375 12.5 12.5 11.375 12.5 10C12.5 8.625 11.375 7.5 10 7.5ZM10.8333 3.33333V0.833333C10.8333 0.375 10.4583 0 10 0C9.54167 0 9.16667 0.375 9.16667 0.833333V3.33333C9.16667 3.79167 9.54167 4.16667 10 4.16667C10.4583 4.16667 10.8333 3.79167 10.8333 3.33333ZM10.8333 19.1667V16.6667C10.8333 16.2083 10.4583 15.8333 10 15.8333C9.54167 15.8333 9.16667 16.2083 9.16667 16.6667V19.1667C9.16667 19.625 9.54167 20 10 20C10.4583 20 10.8333 19.625 10.8333 19.1667ZM4.16667 10C4.16667 9.54167 3.79167 9.16667 3.33333 9.16667H0.833333C0.375 9.16667 0 9.54167 0 10C0 10.4583 0.375 10.8333 0.833333 10.8333H3.33333C3.79167 10.8333 4.16667 10.4583 4.16667 10ZM20 10C20 9.54167 19.625 9.16667 19.1667 9.16667H16.6667C16.2083 9.16667 15.8333 9.54167 15.8333 10C15.8333 10.4583 16.2083 10.8333 16.6667 10.8333H19.1667C19.625 10.8333 20 10.4583 20 10ZM5.59167 5.59167C5.91667 5.26667 5.91667 4.74167 5.59167 4.41667L3.925 2.75C3.6 2.425 3.075 2.425 2.75 2.75C2.425 3.075 2.425 3.6 2.75 3.925L4.41667 5.59167C4.58333 5.75833 4.79167 5.83333 5.00833 5.83333C5.225 5.83333 5.43333 5.75 5.6 5.59167H5.59167ZM17.2583 17.2583C17.5833 16.9333 17.5833 16.4083 17.2583 16.0833L15.5917 14.4167C15.2667 14.0917 14.7417 14.0917 14.4167 14.4167C14.0917 14.7417 14.0917 15.2667 14.4167 15.5917L16.0833 17.2583C16.25 17.425 16.4583 17.5 16.675 17.5C16.8917 17.5 17.1 17.4167 17.2667 17.2583H17.2583ZM3.925 17.2583L5.59167 15.5917C5.91667 15.2667 5.91667 14.7417 5.59167 14.4167C5.26667 14.0917 4.74167 14.0917 4.41667 14.4167L2.75 16.0833C2.425 16.4083 2.425 16.9333 2.75 17.2583C2.91667 17.425 3.125 17.5 3.34167 17.5C3.55833 17.5 3.76667 17.4167 3.93333 17.2583H3.925ZM15.5917 5.59167L17.2583 3.925C17.5833 3.6 17.5833 3.075 17.2583 2.75C16.9333 2.425 16.4083 2.425 16.0833 2.75L14.4167 4.41667C14.0917 4.74167 14.0917 5.26667 14.4167 5.59167C14.5833 5.75833 14.7917 5.83333 15.0083 5.83333C15.225 5.83333 15.4333 5.75 15.6 5.59167H15.5917Z"
        />
      </svg>
    )
  }

  if (theme === 'dark') {
    return (
      <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.6547 10.0025C18.3197 9.86333 17.9288 9.95583 17.6955 10.2358C16.9222 11.1567 15.6072 11.5858 13.5555 11.5858C10.3772 11.5858 8.40634 10.7275 8.40634 6.45416C8.40634 4.45666 8.84967 3.105 9.76134 2.32333C10.0363 2.0875 10.1272 1.69916 9.98551 1.36583C9.84384 1.03166 9.50968 0.819996 9.13967 0.862496C4.40384 1.31083 0.833008 5.23083 0.833008 9.98166C0.833008 15.0333 4.95301 19.1425 10.018 19.1425C14.7847 19.1425 18.7163 15.5775 19.1622 10.85C19.1972 10.4867 18.9913 10.1433 18.6547 10.0025Z"
        />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 14.1667V17.5C10 17.9583 9.625 18.3333 9.16667 18.3333H5.83333C5.375 18.3333 5 17.9583 5 17.5C5 17.0417 5.375 16.6667 5.83333 16.6667H8.33333V15H4.16667C1.86667 15 0 13.1333 0 10.8333V5C0 2.7 1.86667 0.833332 4.16667 0.833332H14.1667C16.4667 0.833332 18.3333 2.7 18.3333 5C18.3333 5.45833 17.9583 5.83333 17.5 5.83333C17.0417 5.83333 16.6667 5.45833 16.6667 5C16.6667 3.625 15.5417 2.5 14.1667 2.5H4.16667C2.79167 2.5 1.66667 3.625 1.66667 5V10.8333C1.66667 12.2083 2.79167 13.3333 4.16667 13.3333H9.16667C9.625 13.3333 10 13.7083 10 14.1667ZM20 10.8333V16.6667C20 18.5083 18.5083 20 16.6667 20H15C13.1583 20 11.6667 18.5083 11.6667 16.6667V10.8333C11.6667 8.99167 13.1583 7.5 15 7.5H16.6667C18.5083 7.5 20 8.99167 20 10.8333ZM18.3333 10.8333C18.3333 9.91667 17.5833 9.16667 16.6667 9.16667H15C14.0833 9.16667 13.3333 9.91667 13.3333 10.8333V16.6667C13.3333 17.5833 14.0833 18.3333 15 18.3333H16.6667C17.5833 18.3333 18.3333 17.5833 18.3333 16.6667V10.8333Z"
      />
    </svg>
  )
}

export const ThemeSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeMode>(() => getStoredTheme())
  const containerRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuId = useId()

  useEffect(() => {
    applyTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const onSelectTheme = (nextTheme: ThemeMode, shouldCloseMenu: boolean) => {
    setTheme(nextTheme)
    persistTheme(nextTheme)
    applyTheme(nextTheme)

    if (shouldCloseMenu) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className={s.container}
      ref={containerRef}
      onBlur={(event) => {
        const nextFocused = event.relatedTarget as Node | null
        if (nextFocused && containerRef.current?.contains(nextFocused)) {
          return
        }

        setIsOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={s.trigger}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="Select theme"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ThemeIcon
          className={clsx(s.triggerIcon, getThemeColorClassName(theme), s.triggerIconActive)}
          theme={theme}
        />
        <span className="srOnly">{themeMeta[theme].label}</span>
      </button>

      <ul
        id={menuId}
        role="menu"
        className={clsx(s.menu, isOpen && s.menuOpen)}
      >
        {themeOptions.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={theme === option.value}
              aria-pressed={theme === option.value}
              className={clsx(s.option, theme === option.value && s.optionActive)}
              onClick={(event) => {
                const isKeyboardActivation = event.detail === 0
                onSelectTheme(option.value, !isKeyboardActivation)
              }}
            >
              <ThemeIcon
                className={clsx(s.optionIcon, getThemeColorClassName(option.value))}
                theme={option.value}
              />
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
