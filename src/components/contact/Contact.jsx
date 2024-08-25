import React, { useReducer, useState, useEffect } from 'react';
import Vision_Mission from "../AboutComp/about/Vision_Mission";
import Stacks from '../stacks/index';
import Services from '../ourServices/index';
import Card from "../review/Card";
import Achievement from "../common/Achievement";
import Footer from '../footer/index';
import Review from "../common/Review";

const initialState = {
  input: {
    name: '',
    phone: '',
    email: '',
    message: '',
    lookingFor: 'Android Application Development',
    budget: ''
  },
  errors: {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        input: {
          ...state.input,
          [action.field]: action.value
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Hide the confirmation message after 3 seconds
    }
    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, [isSubmitted]);

  const validate = () => {
    let isValid = true;

    // Name validation
    if (!state.input.name) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'name', error: 'Name is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'name', error: '' });
    }

    // Phone validation
    if (!state.input.phone) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'phone', error: 'Phone number is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'phone', error: '' });
    }

    // Email validation
    if (!state.input.email) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'email', error: '' });
    }

    return isValid;
  };

  const submitData = (e) => {
    e.preventDefault();

    if (validate()) {
      // Simulate form submission to a fake API
      console.log('Form submitted', state.input);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state.input)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Show confirmation message
          setIsSubmitted(true);
          // Reset form after successful submission
          dispatch({ type: 'RESET' });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <>
      <div>
        <div className='grid xl:grid-cols-12 m-6 md:m-14 xl:m-40'>
          <div className='space-y-10 xl:col-span-7 col-span-12'>
            <div>
              <h1 className='text-[2.8rem] md:text-[3.7rem] xl:text-[4.5rem] font-bold leading-[2.8rem] xl:leading-[4.7rem] text-[#251FF7] font-dm-sans'>
                Custom Software Development, Android & IOS Applications
              </h1>
            </div>
            <p className='md:text-[17px] xl:text-[19px]'>
              We fuse your imagination with our technical expertise, and create flexible, 
              future-proof applications that boost effectiveness and improve user experience.
            </p>
          </div>
          
          <div className='xl:col-span-5 col-span-12 my-10'>
            <form className='grid grid-cols-1 place-items-center space-y-5 xl:px-6' onSubmit={submitData}>
              <div className='space-y-3 w-full'>
                <label htmlFor="name" className='font-semibold'>Name <span className='text-[#D63637]'>*</span> </label> 
                <input 
                  type="text" 
                  id="name" 
                  className='outline-blue-500 border border-gray-400 px-2 py-1 rounded-lg w-full' 
                  value={state.input.name}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                  required 
                />
                {state.errors.name && <p className="text-red-500">{state.errors.name}</p>}
              </div>
              <div className='space-y-3 w-full'>
                <label htmlFor="phone" className='font-semibold'>Phone <span className='text-[#D63637]'>*</span> </label> 
                <input 
                  type="text" 
                  id="phone" 
                  className='outline-blue-500 border border-gray-400 px-2 py-1 rounded-lg w-full' 
                  value={state.input.phone}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                  required 
                />
                {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
              </div>
              <div className='space-y-3 w-full'>
                <label htmlFor="email" className='font-semibold'>Email <span className='text-[#D63637]'>*</span> </label> 
                <input 
                  type="email" 
                  id="email" 
                  className='outline-blue-500 border border-gray-400 px-2 py-1 rounded-lg w-full' 
                  value={state.input.email}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                  required 
                />
                {state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
              </div>
              <div className='space-y-3 w-full'>
                <label htmlFor="message" className='font-semibold'>Message</label>
                <textarea 
                  id="message" 
                  rows='7' 
                  placeholder='Describe your project' 
                  className='outline-blue-500 border border-gray-400 rounded-lg p-3 w-full' 
                  value={state.input.message}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'message', value: e.target.value })}
                ></textarea>
                <div className='text-[14px] text-[#0000008C]'>0 of 1000 max characters.</div>
              </div>
              <div className='space-y-4 w-full'>
                <label htmlFor="lookingFor" className='font-semibold'>What are you looking for? <span className='text-[#D63637]'>*</span> </label>
                <select 
                  id="lookingFor" 
                  className='outline-blue-500 border rounded-xl border-gray-400 text-gray-400 px-4 py-2 w-full' 
                  value={state.input.lookingFor}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'lookingFor', value: e.target.value })}
                >
                  <option value="Android Application Development">Android Application Development</option>
                  <option value="IOS Application Development">IOS Application Development</option>
                  <option value="Hybrid Application Development">Hybrid Application Development</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="I'm not sure">I'm not sure</option>
                </select>
              </div>
              <div className='space-y-4 w-full'>
                <label htmlFor="budget" className='font-semibold'>How much you want to spend on a project?</label>
                <select 
                  id="budget" 
                  className='outline-blue-500 border rounded-xl border-gray-400 text-gray-600 px-4 py-2 w-full' 
                  value={state.input.budget}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'budget', value: e.target.value })}
                >
                  <option value="0-$5k">0-$5k</option>
                  <option value="5-$15k">5-$15k</option>
                  <option value="15-$30k">15-$30k</option>
                  <option value="> $30k"> $30k</option>
                </select>
              </div>
              <div className=" w-full flex justify-start">
                <button type="submit" className='bg-blue-500 rounded-full font-bold text-white px-4 py-2'>Submit</button>
              </div>
            </form>
            {isSubmitted && (
              <div className="mt-5 text-green-500 duration-500">
                Thank you! Your form has been successfully submitted.
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className='mx-[1.8rem] sm:mx-[2rem] md:mx-[2.5rem] lg:mx-[3rem] xl:mx-[3.5rem] xl:m-[7rem] grid grid-cols-1 xl:grid-cols-2 space-y-10'>
        <div className='space-y-4 xl:px-14 py-4 xl:py-28'>
          <h1 className='text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold leading-tight'>About Us</h1>
          <div className='space-y-10 xl:space-y-20'>
            <p className='md:text-[17px] xl:text-[1.2rem] text-gray-400 leading-8'>
              M TECHUB LLC. is not merely another software development firm; it is your dynamic partner for accomplishing digital success. Our team of developers are competent and visionaries, as they stay mindful of the most recent structures, programming scripts, and standards of excellence.
            </p>
            <hr />
          </div>
        </div>
        <div className='relative'>
          <img src="https://mtechub.com/wp-content/uploads/2023/09/laptop123.png" alt="Laptop" className='md:w-[65vw] xl:w-[35vw] md:ml-10' />
          <div className='absolute hidden md:flex md:top-6 md:left-20 lg:top-14 lg:left-28 xl:top-5 xl:left-20 justify-center items-center text-white w-[3.6rem] h-[3.6rem] rounded-full bg-[#F9B000] animate-slow-bounce ease-out'>
            <i aria-hidden="true" className="fab fa-react text-[2rem]"></i>
          </div>
          <div className='absolute hidden md:flex md:bottom-5 md:right-[17rem] lg:right-[24rem] lg:bottom-14 xl:right-[9rem] xl:bottom-12 justify-center items-center text-white w-14 h-14 rounded-full bg-[#2962FF] animate-slow-bounce ease-out'>
            <i aria-hidden="true" className="fab fa-node-js text-[2rem]"></i>
          </div>
        </div>
      </div>
      
      <Vision_Mission />
      <Stacks />
      <Services />
      <Achievement />
      <Review />
      <Card />
    </>
  );
}

export default Contact;
