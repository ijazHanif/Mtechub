import React from 'react';
import Cards from './Cards';
import greater from '../../assesst/hero/greater-than.svg';
import { NavLink } from 'react-router-dom';

const BussinessPartner = () => {
 
  return (
    <>
    <Cards/>
    <div className='grid lg:grid-cols-2 gap-4 px-6 md:px-14 lg:px-20 my-48 space-y-8'>
      <div className='relative'>
        <img src="https://mtechub.com/wp-content/uploads/2023/09/laptop123.png" alt="" className='sm:w-[30rem] md:w-[34rem] lg:w-[34rem]' />

         <div className='absolute top-6 left-5 w-[60px] vsm:hidden lg:display h-[60px] rounded-full bg-orange-400 text-white flex justify-center items-center animate-slow-bounce'><i aria-hidden="true" className="fab fa-react" style={{fontSize:'30px'}}></i></div>
         <div className='absolute bottom-8 right-52 w-[60px] h-[60px] vsm:hidden lg:display rounded-full bg-blue-500 text-white flex justify-center items-center animate-slow-bounce'><i aria-hidden="true" className="fab fa-node-js"style={{fontSize:'30px'}}></i></div> 
      </div>

      <div className='space-y-6 lg:space-y-8 lg:my-8'>
        <h1 className='text-[32px] md:text-[40px] font-bold leading-tight '>Your Business Partner</h1>
        <p className='text-gray-400 text-lg xl:text-[19px] leading-8'>
          M techub llc. stands at the intersection of innovation and excellence in the app development landscape. As a premier agency, we specialize in transforming ideas into dynamic digital solutions.
        </p>
        <p className='text-gray-400 text-lg xl:text-[19px] leading-8'>
          Our team of developers and strategists work collaboratively to craft applications that not only meet but exceed client expectations. With a focus on user-centric design and cutting-edge technology, M techub llc. is your trusted partner in navigating the digital future.
        </p>
        <div className='space-y-2 lg:flex'>
        <NavLink to='about'> <button className='mx-2 hover:-translate-y-2 transition-transform duration-700 cursor-pointer text-lg text-white rounded-full px-4 py-3 md:py-4 w-full md:w-[210px] my-2 bg-blue-600 font-medium hover:bg-orange-400'>
            More About Us
          </button>
          </NavLink>
         <NavLink to='/contact'> <div className='group'>
           <button className='hover:-translate-y-2 transition-transform duration-700 cursor-pointer text-lg rounded-full px-4 py-3 md:py-4 w-full md:w-[210px] border bg-white group-hover:bg-blue-600 group-hover:text-white font-medium flex items-center justify-center'>
           Contact Us
          <img src={greater} alt="" className='w-3 inline ml-4 cursor-pointer group-hover:filter group-hover:invert group-hover:brightness-0' />
          </button>
        </div>
        </NavLink>

        </div>
          <hr className='text-red-400 w-full'/>
      </div>
    </div>
    </>
  );
};

export default BussinessPartner;
