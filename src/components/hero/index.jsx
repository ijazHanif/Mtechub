import React from 'react'
import hero  from '../../assesst/hero/hero.png';
import  greater from '../../assesst/hero/greater-than.svg';
import  uiux from '../../assesst/hero/uiux.png';
import  mobile from '../../assesst/hero/mobile.jpg';
import  gfd1234 from '../../assesst/hero/gfd1234.png';
import  ewscopy from '../../assesst/hero/ewscopy.png';
import en from '../../locals/en.json'
import { NavLink } from 'react-router-dom';
import useScrollTo from '../../Hooks/useScrollTo';
import calendly from '../../components/calender/Calendly'

const index = () => {

  const handleScrollToStack = () => {
    const element = document.getElementById('scroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
     <div className=' bg-gray-50 px-6 md:px-10 grid lg:grid-cols-2 gap-16 h-full py-20'>
        <div className='m-auto grid gap-6 xl:px-20'>
          <div className=''>
            <p className='text-[44px] md:text-[60px] lg:text-[72px] font-bold leading-tight'>All-in-One</p>
            <p className='text-[44px] md:text-[60px] lg:text-[72px] font-bold leading-tight'> Web, App, and  Social Solutions</p>
            <div className='relative w-[13.5rem] md:w-[18.3rem] lg:w-[21.6rem] 2xl:w-[22rem] h-2 -top-[10.8rem] md:-top-[10rem] lg:-top-[17.5rem] 2xl:-top-[12rem]  left-0 bg-[#FEDC5A]  '></div>

          </div>
          <div>
            <p className='text-gray-400 text-lg xl:text-[19px] leading-8'>{en.herro.text}</p>
          </div>
          <div className='md:flex space-y-2 '>
      
            <button onClick={handleScrollToStack} className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer text-lg text-white rounded-full font-medium px-4 py-3 md:py-5 xl:py-[18px] w-full md:w-[210px] my-2 xl:mx-3 bg-blue-500 hover:bg-orange-400'>
             {en.herro.serviceBtn}
             </button>
      
          <div className="group">
         <NavLink to='/calendly'><button className="hover:-translate-y-2 transition-transform duration-700 cursor-pointer text-lg rounded-full px-4 py-3 md:py-5 w-full font-medium xl:py-[18px] md:w-[210px] border bg-white group-hover:bg-blue-500 group-hover:text-white flex items-center justify-center">
            {en.herro.getBtn}
            <img src={greater} alt="" className='w-3 inline ml-4 cursor-pointer group-hover:invert'/>
          </button></NavLink>
          </div>

        </div>


        </div>
             
         <div className=' rounded-full  m-auto  bg-gray-100 lg:h-[42rem] w-[18rem] md:w-[25rem] xl:w-[40rem] relative' >
            <img src={hero} alt="img" title='hero image' className='-mt-10 w-[18rem] md:w-[25rem] xl:w-[30rem] m-auto' /> 
            <div className='absolute top-10 right-2 w-32 h-32 bg-cover bg-center'  style={{ backgroundImage: `url(${uiux})` }}/> 
            <div className='absolute w-32 shadow-2xl h-32 rounded bottom-8 left-4 bg-white p-6 -rotate-12'>
                <img src={mobile} className='w-full h-full bg-cover bg-center bg-no-repeat' />
            </div>
          <div className="absolute bottom-32 right-20 shadow-2xl rounded w-36 h-32 bg-white p-6">
            <img src={gfd1234} className="w-full h-full bg-cover bg-center" 
            />
          </div>
          <img src={ewscopy} alt="" className="absolute w-28 h-28 top-32 -left-8 animate-slow-bounce " />
         </div>
     </div> 

    </>
  )
}

export default index
