import React from 'react';

const Button = ({ children, className }) => {
  return (
    <>
     <button 
     className={` w-full md:w-auto animate__animated animate__fadeInUp bg-blue-600 text-white rounded-full hover:bg-orange-400 
     transition duration-300 ease-in-out ${className}`}
     >
      {children}
    </button>
    </>
  )
}

export default Button
