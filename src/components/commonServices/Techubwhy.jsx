import React from 'react'

const Techubwhy = () => {
  return (
    <div>
       <h1 className='text-[32px] md:text-[48px] font-bold text-center my-4'>Why Choose M TECHUB LLC.?</h1>
       <div className='bg-[#F8FCFC]'>
        <div className='grid xl:grid-cols-2 px-4 sm:px-16 lg:px-28  xl:p-24'>
          <div className='space-y-12 pr-10 order-2 xl:order-1'>
             <div className='flex gap-4'>
               <div className=''>
               <div className='flex justify-center items-center w-[22px] xl:w-[35px] h-[22px] xl:h-[35px] rounded-full bg-white'><i aria-hidden="true" class="fas fa-check text-[#FFB400] font-900"></i></div>
               </div>
               <div className='space-y-4'>
              <span className='text-[18px] md:text-[21px] xl:text-[25px] font-bold'>Listening to Your Needs for a Digital Strategy</span>
              <p className='md:text-[17px] xl:text-[19px] text-[#959AA3]'>We invest time in comprehending your distinct needs, guaranteeing a seamless alignment between your digital strategy and your overarching goals</p>
               </div>
             </div>


             <div className='flex gap-4'>
               <div className=''>
               <div className='flex justify-center items-center w-[22px] xl:w-[35px] h-[22px] xl:h-[35px] rounded-full bg-white'><i aria-hidden="true" class="fas fa-check text-[#FFB400] font-900"></i></div>
               </div>
               <div className='space-y-4'>
              <span className='text-[18px] md:text-[21px] xl:text-[25px] font-bold'>Solutions Tailored to Your Needs</span>
              <p className=' md:text-[17px] xl:text-[19px] text-[#959AA3]'>Our approach revolves around tailor-made solutions, meticulously crafted to tackle the precise challenges and opportunities unique to your business</p>
               </div>
             </div>

          </div>
          <div className='mt-28 xl:mt-1 mb-8 xl:mb-1 order-1 xl:order-1 '>
            <img src="https://mtechub.com/wp-content/uploads/2023/10/qwdfg-copy.png" alt="" className='sm:w-[362px] sm:h-[185px] md:w-[371px] md:h-[190px] lg:w-[601px] lg:h-[308px] xl:w-[638px] xl:h-[327px]'/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Techubwhy
