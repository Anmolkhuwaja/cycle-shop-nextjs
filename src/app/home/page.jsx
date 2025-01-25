import BikeCollection from '@/components/home-page/BikeCollection'
import HeroSection from '@/components/home-page/HeroSection'
import KryoX26Intro from '@/components/home-page/KryoX26Intro'
import NewArrivals from '@/components/home-page/NewArrivals'
import WhyChooseKRYO from '@/components/home-page/WhyChooseKRYO'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <NewArrivals/>
    <BikeCollection/>
    <WhyChooseKRYO />
    <KryoX26Intro/>
    </>
  )
}

export default HomePage