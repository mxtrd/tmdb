import type { PropsWithChildren } from 'react'
import { Header } from '@/common/components'
import { Footer } from '@/common/components'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="siteContainer">
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  )
}
