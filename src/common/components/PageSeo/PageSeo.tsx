import { Helmet } from 'react-helmet-async'

type PageSeoProps = {
  title: string
  description: string
}

const APP_NAME = 'TMDB Kinopoisk'

export const PageSeo = (props: PageSeoProps) => {
  const { title, description } = props

  return (
    <Helmet>
      <title>{`${title} | ${APP_NAME}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
