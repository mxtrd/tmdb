import type { CSSProperties, ReactNode } from 'react'
import clsx from 'clsx'
import { MovieCard, type MovieCardData } from '@/common/components/MovieCard/MovieCard'
import { SectionHeader } from '@/common/components/SectionHeader/SectionHeader'
import s from './MoviesSection.module.scss'

type Props = {
  title: string
  movies: MovieCardData[]
  actionSlot?: ReactNode
  footerSlot?: ReactNode
  className?: string
  maxItems?: number
  moviesPerRow?: number
  showFavoriteButton?: boolean
}

export const MoviesSection = (props: Props) => {
  const {
    title,
    movies,
    actionSlot,
    footerSlot,
    className = '',
    maxItems,
    moviesPerRow,
    showFavoriteButton = true,
  } = props
  const visibleMovies = maxItems ? movies.slice(0, maxItems) : movies

  return (
    <section className={clsx(className)}>
      <div className="container">
        <SectionHeader title={title} actionSlot={actionSlot} />
        <div
          className={s.moviesRow}
          data-movies-per-row={moviesPerRow}
          style={
            moviesPerRow
              ? ({ '--movies-per-row': moviesPerRow } as CSSProperties)
              : undefined
          }
        >
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showFavoriteButton={showFavoriteButton} />
          ))}
        </div>
        {footerSlot}
      </div>
    </section>
  )
}
