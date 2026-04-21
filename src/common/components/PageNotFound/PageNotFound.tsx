import { PageSeo } from '@/common/components/PageSeo/PageSeo'
import s from './PageNotFound.module.scss'
 
export const PageNotFound = () => {
  return (
    <>
      <PageSeo
        title="Page Not Found"
        description="The requested page does not exist. Return to the main page."
      />
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>page not found</h2>
    </>
  )
}