import type { ReactNode } from 'react'
import s from './SectionHeader.module.scss'

type Props = {
  title: string
  actionSlot?: ReactNode
}

export const SectionHeader = (props: Props) => {
  const { 
    title, 
    actionSlot
   } = props

  return (
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
      {actionSlot}
    </header>
  )
}
