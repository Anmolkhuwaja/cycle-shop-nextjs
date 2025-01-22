import BikeCollection from '@/components/home-page/BikeCollection'
import HeroSection from '@/components/home-page/HeroSection'
import NewArrivals from '@/components/home-page/NewArrivals'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <NewArrivals/>
    <BikeCollection/>
    </>
  )
}

export default HomePage