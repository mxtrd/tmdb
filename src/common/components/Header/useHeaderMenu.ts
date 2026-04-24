import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { disableScroll, enableScroll } from '@/common/lib/scroll'

export const useHeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null)
  const keyboardOpenRef = useRef(false)

  useEffect(() => {
    if (!isMenuOpen) {
      enableScroll()
      return
    }

    disableScroll()

    let focusTimeoutId: ReturnType<typeof setTimeout> | null = null
    if (keyboardOpenRef.current) {
      focusTimeoutId = setTimeout(() => {
        navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
      }, 300)
      keyboardOpenRef.current = false
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setTimeout(() => {
          burgerButtonRef.current?.focus()
        }, 0)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      if (focusTimeoutId) {
        clearTimeout(focusTimeoutId)
      }
      document.removeEventListener('keydown', onKeyDown)
      enableScroll()
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const onBurgerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      keyboardOpenRef.current = true
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return {
    isMenuOpen,
    navRef,
    burgerButtonRef,
    toggleMenu,
    onBurgerKeyDown,
    closeMenu,
  }
}
