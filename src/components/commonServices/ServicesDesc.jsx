import React from 'react';
import Button from '../common/Button';

const ServicesDesc = ({imgurl1 , data , condition}) => {
  return (
    <div className='px-6 sm:px-8 md:px-10 lg:px-12 my-32 xl:my-1'>
     <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-8 h-[44rem]'>
       <div className='vsm:w-[12rem] sm:w-[24rem] md:w-[26rem] lg:w-[37rem] xl:w-[30rem]'>
        <img src={imgurl1} alt="" className=''/>
       </div>
       <div>
          <div className=''>
            {
              data.map((item , index)=>{
                return(
                  <>
                  <div className='space-y-5' key={index}>
                    <p className='font-bold '>{item.title}</p>
                    <h1 className=' text-[2rem] xl:text-[3rem] font-bold leading-[2.7rem] xl:leading-[3.4rem] text-center xl:text-left'>{item.h}</h1>
                    <p className='text-gray-400 leading-7 tracking-[0.07rem] px-4 text-center xl:text-left'>{item.desc}</p>
                    <div className='leading-7 text-center xl:text-left'>
                      <div><span><i aria-hidden="true" class="fas fa-check text-blue-500 text-font-16 "></i> <span className='px-4 font-semibold'>{item.point1}</span></span></div>
                      <div><span><i aria-hidden="true" class="fas fa-check text-blue-500 text-font-16 "></i> <span className='px-4 font-semibold'>{item.point2}</span></span></div>
                      <div><span><i aria-hidden="true" class="fas fa-check text-blue-500 text-font-16 "></i> <span className='px-4 font-semibold'>{item.point3}</span></span></div>
                    </div>
                    {
                      (condition)?
                    <Button className='py-4  font-semibold px-10'>Get Free Consultation</Button>
                    :
                    ''
                    }
                  </div>
                  </>
                )
              })
            }
          </div>
       </div>
     </div> 
    </div>
  )
}

export default ServicesDesc
