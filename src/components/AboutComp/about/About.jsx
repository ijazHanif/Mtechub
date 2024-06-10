import React from 'react';
import Vision_Mission from './Vision_Mission';
import Card from '../../review/Card';
import Footer from '../../footer/index'
import Achievement from '../../common/Achievement';
import { NavLink } from 'react-router-dom';
import calendly from '../../calender/Calendly'

const About = () => {
  
  return (
    <>
      <div className='relative h-[16rem] xl:h-[24rem] overflow-hidden'>
         <div 
        className='absolute inset-0'
        style={{ 
          backgroundImage: 'url(https://mtechub.com/wp-content/uploads/2023/09/business-consulting-blog-1.jpg)',
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          transform: 'scale(1.05)', // To cover the blur edges
        }}
      ></div>

        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <div className='md:text-[17px]  xl:text-[1.2rem]'>
            <span className=' cursor-pointer text-gray-400 text-bold hover:text-white duration-300'>Home</span>
            <span>
                <i class="fa-sharp fa-thin fa-greater-than text-gray-400 mx-2"></i>
            </span>
            <span className=' text-bold'>About</span>
          </div>
          <div className='mt-2'>
            <span className='text-[44px] md:text-[60px] xl:text-[4.5rem] font-bold'>ABOUT</span>
          </div>
        </div>
      </div>
      
      <div className=' mx-[1.8rem] sm:mx-[2rem] md:mx-[2.5rem] lg:mx-[3rem] xl:mx-[3.5rem] xl:m-[7rem] grid grid-cols-1 xl:grid-cols-2'>
        <div className='relative'>
          <img src="https://mtechub.com/wp-content/uploads/2023/09/laptop123.png" alt="" className='md:w-[65vw] xl:w-[35vw] md:ml-10'/>
          <div className='absolute hidden md:flex md:display md:top-6 md:left-20 lg:top-14 lg:left-28 xl:top-5 xl:left-20 justify-center items-center text-white w-[3.6rem] h-[3.6rem] rounded-full bg-[#F9B000] animate-slow-bounce ease-out'><i aria-hidden="true" class="fab fa-react text-[2rem]"></i></div>
          <div className='absolute hidden md:flex md:bottom-5 md:right-[17rem] lg:right-[24rem] lg:bottom-14 xl:right-[9rem] xl:bottom-12 justify-center items-center text-white w-14 h-14 rounded-full bg-[#2962FF] animate-slow-bounce ease-out'><i aria-hidden="true" class="fab fa-node-js text-[2rem]"></i></div>
        </div>
        <div className='space-y-4'>
           <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold leading-tight'>Discover the genius of Innovation & Development</h1>
           <p className='md:text-[17px] xl:text-[1.2rem] text-gray-400'>We fuse your imagination with our technical expertise, and create flexible, future-proof applications that boost effectiveness and improve user experience.</p>
           <p className='md:text-[17px] xl:text-[1.2rem] text-gray-400'>M TECHUB is not merely another software development firm; it is your dynamic partner for accomplishing digital success. Our team of developers are competent and visionaries, as they stay mindful of the most recent structures, programming scripts, and standards of excellence.</p>
           <NavLink to='/calendly'>
           <button className='w-full sm:w-[250px] outline-none border rounded-full py-4 px-6 font-semibold hover:text-white hover:bg-blue-500 duration-500 hover:-translate-y-1 group '>Contact Us <span><i class="fa-sharp fa-thin fa-greater-than text-black group-hover:text-white font-bold mx-2 "></i></span></button></NavLink>
           <hr />
        </div>
      </div>
            <Vision_Mission/>
            <Achievement/>
          <div className='mx-6'>
                <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] text-center font-bold my-12'>Our Clients WorldWide</h1>
                <div className='flex justify-center'>
                  <img src="https://mtechub.com/wp-content/uploads/2023/10/world-map-306338_1280-1024x512.png" alt="" />
                </div>
          </div>
          <Card/>
    </>
  );
}

export default About;
