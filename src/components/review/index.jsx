import React, { useReducer, useState, useEffect } from 'react'
import Button from '../common/Button'
import Card from './Card'
import Review from '../common/Review'

// Define the initial state
const initialState = {
  input: {
    name: '',
    phone: '',
    company: '',
    email: '',
    msg: ''
  },
  errors: {
    name: '',
    phone: '',
    company: '',
    email: '',
    msg: ''
  }
};

// Define the reducer function
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

const Index = () => {
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
      dispatch({ type: 'SET_ERROR', field: 'name', error: 'Full Name is required' });
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

    // Company validation
    if (!state.input.company) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'company', error: 'Company name is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'company', error: '' });
    }

    // Email validation
    if (!state.input.email) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'email', error: '' });
    }

    // Message validation
    if (!state.input.msg) {
      isValid = false;
      dispatch({ type: 'SET_ERROR', field: 'msg', error: 'Message is required' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'msg', error: '' });
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
        <Review />
        <div className=''>
          <div>
            <h1 className='text-center font-bold my-[3rem] text-[50px] lg:text-[60px]'>Contact Us</h1>
          </div>
          <div className='lg:my-28 mx-8 md:mx-1 space-y-14 md:space-y-4 lg:space-y-10 lg:space-x-10 xl:space-x-0 grid grid-cols-1 md:grid-cols-2 md:gap-12'>
            <div className='xl:ml-28'>
              <img src="https://mtechub.com/wp-content/uploads/2024/05/image-removebg-preview.png" alt="contact img" className='' />
            </div>
            <div>
              {isSubmitted && <p className="text-green-500">Thank you! Your message has been successfully submitted.</p>}
              <form className='flex flex-col md:leading-x-4' onSubmit={submitData}>
                <label className=''>Full Name</label>
                <input
                  type="text"
                  className='border-b-2 outline-none md:w-[35vw] xl:w-[40vw]'
                  value={state.input.name}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                />
                {state.errors.name && <p className="text-red-500">{state.errors.name}</p>}
                <label className='my-4'>Phone number</label>
                <input
                  type="number"
                  className='border-b-2 outline-none md:w-[35vw] xl:w-[40vw]'
                  value={state.input.phone}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                />
                {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
                <label className='my-4'>Company name</label>
                <input
                  type="text"
                  className='border-b-2 outline-none md:w-[35vw] xl:w-[40vw]'
                  value={state.input.company}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'company', value: e.target.value })}
                />
                {state.errors.company && <p className="text-red-500">{state.errors.company}</p>}
                <label className='my-4'>Email</label>
                <input
                  type="email"
                  className='border-b-2 outline-none md:w-[35vw] xl:w-[40vw]'
                  value={state.input.email}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                />
                {state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
                <label className='my-4'>Message</label>
                <textarea
                  className="border-b-2 border-blue-500 rounded-md xl:p-4 xl:h-16 md:w-[35vw] xl:w-[40vw] outline-none focus:border-gray-700"
                  value={state.input.msg}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'msg', value: e.target.value })}
                ></textarea>
                {state.errors.msg && <p className="text-red-500">{state.errors.msg}</p>}
                <div className='flex justify-center my-6 lg:my-10'>
                  <button className='bg-blue-600 outline-none rounded text-white font-bold px-4 py-2' type='submit'>Submit</button>
                  {/* <Button className='rounded'>
                  Submit
                 </Button>  */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
}

export default Index;

