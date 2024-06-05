import React from 'react'
import { lazy, Suspense } from 'react'
import Loader from '@/components/atoms/Loader'

//lazy components import
const Hero = lazy(() => import("./Hero"))
const Steps = lazy(() => import("./Steps"))
const HomeService = lazy(() => import("./HomeService"))
const SelectedWork = lazy(() => import("./SelectedWork"))

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <HomeService />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <SelectedWork />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Steps />
      </Suspense>
    </div>
  )
}

export default Home
