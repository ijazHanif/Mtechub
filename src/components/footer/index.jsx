import React from 'react';
// import logo from '../../assets/Header/logo.svg';
// import monster from '../../assets/footer/monster.svg';
import logo from '../../assesst/Header/logo.svg';
import monster from '../../assesst/footer/monster.svg';
import { Link , NavLink } from 'react-router-dom';

const index = () => {
    let arr = [
      {
        id:1,
        title: logo,
        desc1: '',
        desc2: `Gain insights on app strategy, direct access to
development experts, and a platform that’s launched 
over 100+ successful apps.`,
        desc3: 'Call Us: (+92)300-8764-218'
      },
      {
        id:2,
        title: 'Company',
        desc1: 'About',
        desc2: 'Services',
        desc3: 'Contact Us'
      },
      {
        id:3,
        title: 'Useful Links',
        desc1: 'Privacy Policy',
        desc2: 'Terms & Conditions',
        desc3: 'FAQs'
      },
      {
        id:4,
        title: 'Contact Us',
        desc1: '+923106811432',
        desc2: 'info@mtech.com',
        desc3: 'Virginia USA'
      },
    ];

    return (
      <>
        <footer className=' text-white py-8'>
          <div className='container mx-auto flex flex-wrap justify-evenly items-center vsm:gap-14'>
            {arr.map((items, index) => {
              return (
                <div key={items.id} className='lg:w-[20vw] sm:w-[25vw] vsm:w-full'>
                  {items.title === logo ? (
                    <div className='space-y-4 text-center mt-20 md:ml-4 xl:ml-0'>
                      <img src={items.title} alt="Logo" className='lg:w-[12vw] mx-auto' />
                      <p className='text-gray-400 leading-7'>{items.desc2}</p>
                      <h1 className='font-bold text-lg text-black'>{items.desc3}</h1>
                    </div>
                  ) : (
                    <div className='flex flex-col items-center space-y-4'>
                      <h1 className='font-bold text-2xl text-gray-500'>{items.title}</h1>
                      {items.id==2 ? (
                   <ul className='text-gray-400 leading-7'>
                    <li className='cursor-pointer hover:text-blue-400'>
                     <NavLink to='/about'>About</NavLink>
                    </li>
                     <li className='cursor-pointer hover:text-blue-400'>
                       <NavLink to='/'>Services</NavLink>
                     </li>
                     <li className='cursor-pointer hover:text-blue-400'>
                      <NavLink to='/contact'>Contact Us</NavLink>
                      </li>
                      </ul>
                      ):(
                        <ul className='text-gray-400 leading-7'>
                        <li className='cursor-pointer hover:text-blue-400'>{items.desc1}</li>
                        <li className='cursor-pointer hover:text-blue-400'>{items.desc2}</li>
                        <li className='cursor-pointer hover:text-blue-400'>{items.desc3}</li>
                      </ul>
                      )}
                      
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='mt-20'>
            <p className='bg-blue-600 text-white text-center py-6 font-semibold'>
              © Copy Right 2024 M techub llc . All Rights Reserved

            </p>
            <div className='flex justify-center px-4'>
              <img src={monster} alt="Monster" className='w-[200px] cursor-pointer' />
            </div>
          </div>
        </footer>
      </>
    );
};

export default index;

