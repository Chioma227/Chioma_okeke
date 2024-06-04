import React from 'react'
import Hero from './Hero'
import HomeService from './HomeService'
import SelectedWork from './SelectedWork'
import Steps from './Steps'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeService/>
      <SelectedWork/>
      <Steps/>
    </div>
  )
}

export default Home
