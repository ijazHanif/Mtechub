import React from 'react';

const index = () => {
   
  return (
    <>
      <div className='xl:flex '>
            <div className='mx-[20px] lg:mx-[6rem] my-[5rem] space-y-10'>
             <div className='space-y-4'>
               <h1 className='text-[32px] md:text-[40px] lg:text-[48px] font-bold'>Partnership Paradigms</h1>
               <p className='md:text-[19px] text-gray-400'>Turning hurdles into milestones, we’re more than just developers</p>
             </div>

            <div className='space-y-4'>
                  <div className='lg:flex shadow-xl p-10 rounded-xl border space-x-2 hover:translate-x-6 duration-500'>
                   <div className=' w-20 h-20 rounded-full bg-gradient-to-b from-orange-200 to-white flex justify-center items-center'><i class="fa-solid fa-dice text-[40px] text-yellow-500 "></i> </div>
                   <div className='space-y-3'><h1 className='text-xl font-bold'>MVP Mastery</h1>
                    <p className='text-gray-400'>Crafting minimal viable products that resonate and validate your vision</p></div>
                  </div> 
                  
                  <div className='lg:flex shadow-xl p-10 rounded-xl border space-x-2 hover:translate-x-6 duration-500'>
                  <div className='w-20 h-20 rounded-full bg-gradient-to-b from-blue-200 to-white flex justify-center items-center '>
                    <i aria-hidden="true" class="far fa-building text-[40px] text-blue-500"></i>
                  </div>
                    <div className='space-y-3'><h1 className='text-xl font-bold'>Enterprise Evolution</h1>
                    <p className='text-gray-400'>Solutions for projects big and small, propelling your enterprise forward.</p></div>
                  </div>
                  
                  <div className='lg:flex shadow-xl p-10 rounded-xl border space-x-2 hover:translate-x-6 duration-500'>
                  <div className='w-20 h-20 rounded-full bg-gradient-to-b from-blue-300 to-white flex justify-center items-center '>
                    <i aria-hidden="true" class="fas fa-users text-[40px] text-blue-900"></i>
                  </div>
                    <div className='space-y-3'><h1 className='text-xl font-bold'>Dedicated Developer Dream Team</h1>
                    <p className='text-gray-400'>Handpick a team of experts, committed to bringing your digital aspirations to life</p></div>
                  </div>
          </div>
          </div>
        <div className='relative'>
            <img src="https://mtechub.com/wp-content/uploads/2023/09/1231232edws.png" alt="" 
            className='w-[85vw] vsm:w-[80vw] sm:w-[60vw] xl:w-[30vw] mx-auto'/>
            <img src="https://mtechub.com/wp-content/uploads/2023/09/launch-copy.png" alt="" 
            className='absolute top-20 left-6 sm:top-28 sm:left-28 md:left-40 md:top-32 lg:top-44 lg:left-60 xl:top-32 xl:left-0 w-20 animate-slow-bounce'/>
        </div>
     </div>
    
          <div className='flex flex-col justify-center items-center my-[6rem]  mx-[3rem] md:mx-[10rem] lg:mx-[18rem] xl:mx-[28rem] text-center space-y-6'>
              <h1 className='text-[32px] md:text-[40px] lg:text-[48px ] font-bold'>Recent Wins: Our Latest Breakthrough Projects</h1>
              <p className='text-gray-400 md:text-[17px] lg:text-[19px] leading-8'>Explore our cutting-edge solutions from recent endeavors. Each project showcases our commitment to excellence and our ability to transform challenges into success stories</p>
         </div>
      
    </>
  )
}

export default index


