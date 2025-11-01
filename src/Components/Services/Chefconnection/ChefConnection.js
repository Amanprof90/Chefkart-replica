import React from 'react'
import FAQ2 from './FAQ2';
import Lower from './Lower';
import Testimonials from './Testimonials';
import Cater from './Cater'
import Majorslider from './Majorslider';
import Metrices from './Metrices';
import HeroCarousel from './HeroCarousel';

const ChefConnection = () => {
  return (
    <div>
      <HeroCarousel/>
      <Metrices/>
      <Majorslider/>
      <Cater/>
      <Testimonials/>
      <Lower/>
      <FAQ2/>
    </div>
  )
}

export default ChefConnection
