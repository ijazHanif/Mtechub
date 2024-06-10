import React from 'react'

const Cards = () => {
    let arr = [
        {
            icon:<i aria-hidden="true" class="fas fa-check-circle " style={{ fontSize: '24px' }}></i>,
            title:'Proven Expertise',
            desc:'Our developers are proven experts in developing top-notch, user-friendly & robust applications'
        },
        {
            icon:<i aria-hidden="true" class="far fa-edit icon-large" style={{ fontSize: '24px' }}></i>,
            title:'Customization',
            desc:'We make customized applications that are tailored to match your brand’s mission and vision'
        },
        {
            icon:<i aria-hidden="true" class="far fa-clock" style={{ fontSize: '24px' }}></i>,
            title:'Around the clock support',
            desc:'You can count on our 24/7 support service, open communication & timely updates'
        },
    ]
    
  return (
    <>
       <div>
          <div className='flex flex-wrap justify-center'>
            {
             arr.map((item)=>{
                return(
                  <div className='group md:w-[30%] m-4 md:m-2 lg:m-4 px-[30px] md:px-[15px] lg:px-[30px]'>
                 <div className=' space-y-4 p-[40px] group-hover:bg-blue-50 rounded-[10px] duration-500'>
                    <div className='w-[64px] h-[64px] bg-blue-100  group-hover:bg-blue-600 rounded-full flex justify-center items-center m-auto'> <div className=' rounded-full text-blue-600 group-hover:text-white duration-500'>{item.icon}</div>
                    </div>
                     <h1 className='text-center text-[18px] md:text-[21px] font-bold '>{item.title}</h1>
                     <p className='text-center text-gray-500'>{item.desc}</p>
                  </div>
                  </div>
                )
             })
            }
          </div>
       </div>
    </>
  )
}

export default Cards
