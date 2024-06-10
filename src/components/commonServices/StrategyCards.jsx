import React from 'react'

const StrategyCards = ({arr3 , gridcols}) => {
  return (
    <>
     <div>
     <div className='my-[12rem] xl:my-[10rem]'>
        <div className='mx-6 md:mx-[7rem] lg:mx-[15rem] xl:mx-[20rem] m-auto text-center my-[5rem] text-[3rem]
        font-bold leading-[4rem]'>Blueprint to Breakthrough: Our Step-by-Step Journey</div>  
      </div>

      {/* <div className={`grid md:grid-cols-3  xl:grid-cols-${gridcols} gap-4 mx-[1.8rem] xl:mx-[6.9rem] my-20`}> */}
      <div className={`grid gap-4 mx-[1.8rem] xl:mx-[6.9rem] my-20 md:grid-cols-3 ${
       gridcols === '4' ? 'xl:grid-cols-4' :
       gridcols === '5' ? 'xl:grid-cols-5' :
       gridcols === '6' ? 'xl:grid-cols-6' : ''
      }`}>

  {
    arr3.map((item, index) => {
      return (
        <div key={index} className="bg-pink-50 p-4 flex flex-col items-center space-y-4 hover:bg-blue-500 hover:text-white duration-300">
          <div className="w-[120px] h-[120px] rounded-full bg-white flex justify-center items-center">
            <img src={item.icon} alt="" className="w-[70px] py-2" />
          </div>
          <div>
            <p className="font-semibold py-4">{item.h}</p>
          </div>
        </div>
      );
    })
  }
</div>


     </div> 
    </>
  )
}

export default StrategyCards
