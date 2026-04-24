import { useParams } from 'react-router'
import { PageSeo } from '@/common/components'

export const CategoryMoviesPage = () => {
  const { category } = useParams()
  const currentCategory = category ?? 'popular'

  return (
    <div>
      <PageSeo
        title="Category Movies"
        description="Browse movie lists by category with sorting and navigation."
      />
      <h1>Category movies page</h1>
      <p>Current category: {currentCategory}</p>
    </div>
  )
}
