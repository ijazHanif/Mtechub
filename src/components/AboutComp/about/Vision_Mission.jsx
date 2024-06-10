import React from 'react'

const Vision_Mission = () => {
  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 my-[9rem] px-12'>
        <div className=' lg:px-12 xl:px-14 space-y-4 xl:space-y-8 my-10 leading-7'>
          <h1 className='text-[32px] md:text-[40px] xl:text-[3rem] text-[#0760F5] font-semibold'>Our Vision</h1>
          <p className=' md:text-[17px]  xl:text-[1.2rem] text-[#8F959E] italic font-semibold'>“To lead the technological frontier, drive innovation and empower businesses for a brighter digital future.” </p>
          <h1 className='text-[32px] md:text-[40px] xl:text-[3rem] text-[#F4A705] font-semibold'>Our Mission</h1>
          <p className='md:text-[17px]  xl:text-[1.2rem] text-[#8F959E] italic font-semibold'>“Empower businesses with cutting-edge software solutions, harnessing AI, and cloud technologies, while delivering unparalleled customer service.” </p>
          <p className='md:text-[17px]  xl:text-[1.2rem] text-[#8F959E]'>We Transform Your Ideas into Digital Realities. We are a vanguard in software engineering, committed to revolutionizing technology.</p>
        </div>

        <div className='relative'>
          <img src="https://mtechub.com/wp-content/uploads/2023/10/123234543-min-2.jpg" alt="" className='w-[30rem]'/>
          <div className='w-14 h-14 rounded-full bg-[#FFB400] hidden md:flex justify-center items-center text-white text-[1.8rem] absolute top-28 -left-6 animate-slow-bounce'><i aria-hidden="true" class="fas fa-bullseye"></i></div>
          <div className='w-14 h-14 rounded-full bg-[#2962FF] hidden md:flex justify-center items-center text-white text-[1.8rem] absolute md:bottom-5 md:left-[21rem]  xl:bottom-5 xl:right-[17rem] animate-slow-bounce'><i aria-hidden="true" class="fas fa-chart-area"></i></div>
        </div>
      </div> 
    </>
  )
}

export default Vision_Mission
