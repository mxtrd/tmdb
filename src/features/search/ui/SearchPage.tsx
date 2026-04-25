import { useState } from 'react'
import { PageSeo } from '@/common/components'
import { SearchForm } from '@/common/components'

export const SearchPage = () => {
  const [query, setQuery] = useState('')

  const onSubmitSearch = (searchQuery: string) => {
    setQuery(searchQuery)
  }

  return (
    <div>
      <PageSeo
        title="Search"
        description="Search movies by title and browse matching results."
      />
      <h1>Search page</h1>
      <SearchForm
        value={query}
        onValueChange={setQuery}
        onSubmit={onSubmitSearch}
        inputId="search-page-input"
        inputAriaLabel="Search movie on search page"
      />
    </div>
  )
}
