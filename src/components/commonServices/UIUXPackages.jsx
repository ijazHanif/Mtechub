import { Check, MoveRight } from 'lucide-react'
import React from 'react'

const UIUXPackages = () => {
    let arr=[
        {
            h:'Starter Package',
            icon:<Check strokeWidth={4} color={'blue'}/>,
            desc1:'User experience (UX) design consultation',
            desc2:'Basic user flow and wireframes',
            desc3:'Basic SEO setup',
            desc4:'High-fidelity mockups',
            desc5:'Basic prototype development',
            price:'50,000'
        },
        {
            h:'Business Package',
            icon:<Check strokeWidth={4} color={'blue'}/>,
            desc1:' All features of the Basic Package',
            desc2:'Detailed user flow, wireframes, and information architecture',
            desc3:'Interactive prototyping',
            desc4:'Accessibility and usability testing',
            desc5:'User research and persona development',
            price:'200,000'
        }
    ]
  return (
    <>
      <div>
        <h1 className='font-bold text-[32px] md:text-[40px] lg:text-[48px] text-center my-8 sm:my-10 md:my-14 xl:my-20'>Our Packages</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-[1rem] sm:mx-[2rem] xl:mx-[370px]'>
            {
                arr.map((item , index)=>{
                    return(
                    <div key={index} 
                    className='group flex flex-col items-center gap-4 rounded-[1.6rem] transition-all duration-200 hover:rounded-none px-6'
                    style={{ boxShadow: '1px 0px 7px 0px rgba(0, 0, 0, 0.3), -1px -0px 7px 0px rgba(0, 0, 0, 0.3)' }}
                    >
                       <h1 className='text-[30px] my-4 text-center'>{item.h}</h1>
                       <hr className='w-1/3 group-hover:w-[77%] duration-500'/>
                       <span className='flex gap-2 border-b pb-2 text-center'><div>{item.icon}</div> <p>{item.desc1} </p></span>
                       <span className='flex gap-2 border-b pb-2 text-center'><div>{item.icon}</div> <p>{item.desc2} </p></span>
                       <span className='flex gap-2 border-b pb-2 text-center'><div>{item.icon}</div> <p>{item.desc3} </p></span>
                       <span className='flex gap-2 border-b pb-2 text-center'><div>{item.icon}</div> <p>{item.desc4} </p></span>
                       <span className='flex gap-2 text-center'><div>{item.icon}</div> <p>{item.desc5} </p></span>
                       <div className='text-[#999999]'> <span className='text-[24px] font-bold'>Pkr</span> <span className='text-[36px] font-bold'>{item.price}</span></div>
                       <button className='flex gap-2 bg-blue-600 text-white font-bold px-5 py-3 rounded-full mb-4
                       hover:bg-blue-800 duration-500'>BOOK NOW  <MoveRight strokeWidth={3}/></button>
                    </div> 
                    )
                })
            }
        </div>
      </div>
    </>
  )
}


export default UIUXPackages

// 03117228210
