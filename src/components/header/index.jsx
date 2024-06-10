import React, { useState } from 'react';
import logo from '../../assesst/Header/logo.svg'
import Button from '../common/Button';
import DropDownMenu from './DropDownMenu';
import { Link , NavLink } from 'react-router-dom';

const index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white shadow-xl py-4 sticky top-0 w-full z-10'>
      <div className='flex justify-between items-center'>
        <div className='sm:pl-16 vsm:pl-10'>
         <NavLink to='/'><img src={logo} alt='Error' className='vsm:w-[30vw] sm:w-[20vw] lg:w-[9vw]  cursor-pointer' /></NavLink>
        </div>
        <nav className='hidden lg:flex hover:text-gray-400'>
          <ul className='list-none flex gap-12'>
            <NavLink to='/'><li className='cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 hover:underline hover:underline-offset-8 transition duration-500 ease-in-out'>Home</li></NavLink>
            <NavLink to='/about'><li className='cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-2 transition duration-1000 ease-in-out'>About</li></NavLink>
            <DropDownMenu/>
            <NavLink to='blog'><li className='cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-2 transition duration-1000 ease-in-out'>Blog</li></NavLink>
            <NavLink to='contact'><li className='cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:underline hover:underline-offset-8 hover:decoration-2 transition duration-1000 ease-in-out'>Contact Us</li></NavLink>
          </ul>
        </nav>
        <div className='pr-14 hidden lg:block'>
        <NavLink to='calendly'><Button className='px-8 py-3 font-medium'> 
              Schedule Meeting
          </Button></NavLink>
        </div>
        <div className='pr-4 lg:hidden'>
          <button className='text-gray-400 hover:text-gray-900 focus:outline-none focus:text-gray-900' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='lg:hidden'>
          <ul className='px-2 pt-2 pb-3 space-y-1'>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>Home</li>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>About</li>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>Our Services</li>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>Blog</li>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>Contact Us</li>
            <li className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100'>

            <Button className='text-md px-6 py-3 font-bold'> 
                Schedule Meeting
             </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default index;
