import type { PropsWithChildren } from 'react'
import { Header } from '@/common/components'
import { Footer } from '@/common/components'

type Props = PropsWithChildren

export const BaseLayout = (props: Props) => {
  const { children } = props

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
