import React, { useReducer } from 'react'

export default function Practice() {
  const reducer = (state , action)=>{
    if(action.type=='increment'){
      return state+1;
    }
    else if(action.type=='decrement'){
      return state-1;
    }
    else{
      return 0
    }
  }
  let initState =0;
 const [state , dispatch] = useReducer(reducer , initState);
  return (
    <>
      <div className='flex justify-center items-center h-80'>
        <button className='bg-black text-white rounded-full px-4 py-1' onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
        <p className='text-2xl px-2'>{state}</p>
        <button className='bg-black text-white rounded-full px-4 py-1' onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
      </div> 
    </>
  )
}



// import React, { useRef } from 'react';
// let DomRef  = useRef(null);
// const TextInput = () => {
  
//   const inputfunction = ()=>{
//     DomRef.current.focus();
//   }

//   return (
//     <div>
//       <input type="text" ref={DomRef}/>
//       <button onClick={inputfunction}>Click me</button>    
//     </div>
//   );
// };

// export default TextInput;