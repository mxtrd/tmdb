import { PageSeo } from '@/common/components'
import { MainHeroSection } from './sections/MainHeroSection/MainHeroSection'

export const MainPage = () => {
  return (
    <>
      <PageSeo
        title="Main"
        description="Main page with highlighted movies and quick access to catalog sections."
      />
      <MainHeroSection />
    </>
  )
}