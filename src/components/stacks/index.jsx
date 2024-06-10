import React from 'react'
import { BsCheckCircle } from "react-icons/bs";

const index = () => {
    let arr=[
        {
            title:'App Development',
            icon:`https://mtechub.com/wp-content/uploads/2023/09/appdev.png`,
            desc:'Transforming ideas into intuitive digital experiences.'
        },
        {
            title:'Web Development',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/web-development.png',
            desc:'Crafting digital platforms for optimal user experience'
        },
        {
            title:'Digital Marketing',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/seo.png',
            desc:'Transforming clicks into customers, elevating your brand digitally.'
        },
        {
            title:'UI / UX Design',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/uiux.png',
            desc:'From vision to interaction: crafting seamless designs.'
        },
    ]
  return (
    <>
      <div className='flex flex-wrap mx-[18px] md:mx-[5rem] md:my-[8rem]' id='scroll'>
        <div className='md:w-[20rem] mt-[7rem] space-y-10'>
            <h1 className='text-[64px] font-bold'>Dive into Diverse Service Offerings</h1>
    
            <div className='flex gap-4'>
              <BsCheckCircle className='bg-yellow-400 text-white rounded-full' style={{fontSize:'24px'}}/>
              <p className='text-[17px] font-semibold'>Tailored solutions, global impact</p>
            </div>
            <div className='flex gap-4'>
              <BsCheckCircle className='bg-yellow-400 text-white rounded-full' style={{fontSize:'24px'}}/>
              <p className='text-[17px] font-semibold'>Crafting excellence, driving success</p>
            </div>
       
        </div>
         <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {
               arr.map((item ,index)=>{
                return(
                  <>
                   <div key={index} className='lg:w-[26rem] md:w[18rem] lg:h-[28rem] md:h-[18rem] px-[20px] lg:px-[4rem] py-[18px] lg:py-[3rem] m-[14px] border rounded-2xl hover:bg-yellow-400'>
                     <div className='my-6'> 
                        <img src= {item.icon} alt="" className='w-[40px] lg:w-[146px] '/>
                     </div>
                     <div className='space-y-4'>
                       <h1 className='text-[25px] font-semibold'>{item.title}</h1>
                       <p className='text-[19px] text-gray-400 leading-relaxed'>{item.desc}</p>
                       <p className='text-[16px] text-blue-400 font-semibold cursor-pointer'>LEARN MORE</p>
                     </div>
                   </div>
                  </>)
               })  
              }
            </div>
         </div>
      </div>
    </>
  )
}

export default index
