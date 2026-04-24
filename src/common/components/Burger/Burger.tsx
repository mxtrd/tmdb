import type { KeyboardEventHandler, MouseEventHandler, Ref } from 'react'
import s from './Burger.module.scss'

type Props = {
  isOpen?: boolean
  controlsId?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>
  buttonRef?: Ref<HTMLButtonElement>
}

export const Burger = (props: Props) => {
  const {
    isOpen = false,
    controlsId = 'main-menu',
    onClick,
    onKeyDown,
    buttonRef
  } = props

  return (
    <button
      type="button"
      className={`btnReset ${s.burger}`}
      data-burger
      ref={buttonRef}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className={s.line} />
      <span className={s.line} />
      <span className={s.line} />
    </button>
  )
}
