import React from 'react'
import Bannerh from './Bannerh'
import Cooks from './Cooks'
import Devices from './Devices'
import Food from './Food'
import Everyone from './Everyone'
import Review1 from './Review1'
import Safety2 from './Safety2'
import Matrix2 from './Matrix2'
import Process3 from './process3'
import Whychoose from './Whychoose'
import Servicecards from './Servicecards'
import HeroBanner from './HeroBanner'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Servicecards/>
      <Whychoose/>
      <Process3/>
      <Matrix2/>
      <Safety2/>
      <Review1/>
      <Everyone/>
      <Food/>
      <Devices/>
      <Cooks/>
      <Bannerh/>
    </div>
  )
}

export default Home
