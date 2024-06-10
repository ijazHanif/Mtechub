import React from 'react'
import Button from '../common/Button'
import { NavLink } from 'react-router-dom'
import calendly from '../calender/Calendly'

const Card = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-12 gap-10 bg-gradient-to-r from-white to-blue-50 mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-32 border-2xl py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl my-10'>
      <div className='xl:col-span-7 col-span-1 '>
        <h1 className='text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold leading-tight'><span className='block md:inline lg:inline xl:inline sm:inline'>Start your</span> business journey better with M Techub llc. Consulting</h1>
        <p className='text-gray-400 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] py-6'>Schedule a 15 minute call to discuss your project and long term goals.</p>
        <div className='absolute w-[15.8rem] sm:w-[23.5rem] md:w-[20rem] lg:w-[21.3rem] xl:w-[23.5rem] h-2 top-[4.4rem] right-1 sm:top-12 sm:right-24 md:top-10 md:right-[7.6rem] lg:top-11 lg:right-64 xl:top-12 xl:right-3 2xl:top-12 2xl:left-[15rem] bg-[#FEDC5A] -z-10 ' />
      </div>
      <div className='xl:col-span-2 col-span-1 hidden xl:flex items-center justify-center'>
        <img src="https://mtechub.com/wp-content/uploads/2023/09/business-consultant-cta-arrow.png" alt="" className='xl:block  w-full'/>
      </div>
      <div className='xl:col-span-3 col-span-1 flex items-center justify-center'>
       <NavLink to='/calendly'><Button className='text-md px-8 py-4 font-bold'> 
          Schedule Meeting
        </Button></NavLink> 
      </div>
    </div>
  )
}

export default Card
