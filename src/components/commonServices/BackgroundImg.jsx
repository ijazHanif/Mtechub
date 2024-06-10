import React from 'react'

const BackgroundImg = ({imgurl , data}) => {
  return (
    <div>
         <div className='relative h-[16rem] xl:h-[24rem] overflow-hidden'>
         <div 
        className='absolute inset-0'
        style={{ 
          backgroundImage: `url(${imgurl})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          transform: 'scale(1.05)', // To cover the blur edges
        }}
      ></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <div className=' text-center w-[40rem]'>
          <div className='md:text-[17px]  xl:text-[1.2rem]'>
            <span className=' cursor-pointer text-gray-400 text-bold hover:text-white duration-300'>Home</span>
            <span>
                <i class="fa-sharp fa-thin fa-greater-than text-gray-400 mx-2"></i>
            </span>
            <span className=' text-bold'>{data}</span>
          </div>
          <div className='mt-4 md:mt-5 mx-[8rem] md:mx-[3rem]'>
            <span className='leading-10 md:leading-[4rem] text-[44px] md:text-[60px] xl:text-[4.5rem] font-bold'>{data}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImg
