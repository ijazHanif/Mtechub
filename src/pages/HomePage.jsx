import React from 'react'
import Hero from '../components/hero/index'
import BussinessPartner from '../components/partner/BussinessPartner'
import Stacks from '../components/stacks/index'
import Services from '../components/ourServices/index'
import Partnership from '../components/partnershipParadigms/index'
import Review from '../components/review/index'
import {Routes , Route} from 'react-router-dom'

const HomePage = () => {
  return (
    < >
        <Hero/>
        <BussinessPartner/>
        <Stacks/>
        <Services/>
        <Partnership/>
        <Review/>
    </>
  )
}

export default HomePage



  {/* <Header/> */}
    {/* <Hero/>
      <BussinessPartner/>
      <Index/>
    <Service/>
  <Partnership/>
<Review/>
<Footer/>  */}