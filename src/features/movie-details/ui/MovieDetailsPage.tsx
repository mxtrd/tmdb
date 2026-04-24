import { useParams } from 'react-router'
import { PageSeo } from '@/common/components'

export const MovieDetailsPage = () => {
  const { movieId } = useParams()

  return (
    <div>
      <PageSeo
        title="Movie Details"
        description="Explore movie details, cast, ratings, and similar recommendations."
      />
      <h1>Movie details page</h1>
      <p>Movie ID: {movieId ?? 'unknown'}</p>
    </div>
  )
}
