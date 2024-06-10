import React from 'react'

const Achievement = () => {
    let arr1=[
        {
          num:'184+',
          str:'Unique Apps Developed'
        },
        {
          num:'100+',
          str:'Innovative Technologies Mastered'
        },
        {
          num:'182%',
          str:'Client Satisfaction Rate'
        },
        {
          num:'5084+',
          str:'Interactions on Apps Daily'
        },
      ]
  return (
    <div className=''>
          <div className='grid grid-cols-1 xl:grid-cols-2 my-48 mx-6 md:mx-14 xl:mx-28 gap-8'>
            <div className='space-y-2'>
              <p className='text-blue-500 font-bold'>WHAT WE ACHIEVED</p>
              <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold leading-tight'>Our commitment to exceptional digital experiences has earned us recognition and kept us on the path to industry leadership.</h1>
            </div>
            <div className='grid grid-cols-2 bg-white shadow-top-bottom rounded-2xl my-10 text-center md:mx-32 md:p-0 xl:mx-10 p-4'>
              {
                arr1.map((item , index)=>{
                  return(
                   <>
                   <div className='py-8'>
                     <div className='font-bold text-[2.2rem] md:text-[2.5rem] xl:text-[3.4rem]'>{item.num}</div>
                     <div className=' text-[15px] xl:text-[1.1rem] text-gray-400'>{item.str}</div>
                   </div>
                   </>
                  )
                })
              }
            </div>
          </div>
    </div>
  )
}

export default Achievement
