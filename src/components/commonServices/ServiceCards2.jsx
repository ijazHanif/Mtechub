import React from 'react'

const ServiceCards2 = ({arr1 , arr2}) => {
  return (
    <>
    <div className='my-[12rem] xl:my-[5rem]'>
    <div className='mx-6 md:mx-[10rem] lg:mx-[15rem] m-auto text-center my-[5rem] space-y-8'>
      {
       arr1.map((item , index)=>{
        return(
          <div key={index}>
            <div className='text-[3rem] font-bold leading-[3.7rem]'>{item.h}</div>
            <div className='text-[#989DA6] text-[15px] py-2'>{item.desc}</div>
          </div>
        )
       })  
      }
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 px-3 xl:px-24'>
      {
       arr2.map((item , index)=>{
        return(
          <>
          <div className='border rounded-2xl m-4 px-4 py-6 space-y-6 hover:bg-[#FFB400]' key={index}>
            <img src={item.icon} alt="" className='w-[2.5rem] xl:w-[9rem]'/>
            <div className='space-y-4'>
               <span className=' text-[18px] md:text-[21px] xl:text-[25px] font-bold'>{item.h}</span>
               <p className=' md:text-[17px] xl:text-[19px]  text-[#989DA6] leading-8'>{item.desc}</p>
            </div>
            
              <p className='text-[11px] text-blue-600 font-bold cursor-pointer'>LEARN MORE</p>
              
          </div>
          </>
        )
       })  
      }
      </div>

      <div className='text-center mx-4 md:my-40 my-20 '>
              <button className='px-6 py-4 hover:bg-blue-500 border border-gray-300 rounded-full hover:text-white
              duration-300 font-semibold w-full md:w-auto'>Hire Dedicated Developer
              <span><i aria-hidden="true" class="fas fa-angle-right px-4"></i></span></button>
            </div>


    </div> 
    </>
  )
}

export default ServiceCards2
