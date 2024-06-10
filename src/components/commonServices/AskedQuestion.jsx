import React, { useState } from 'react';

const BackgroundImageComponent = ({ arr4 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let arr=[
    {
      icon:<i class="fa-solid fa-dice text-[40px] text-yellow-500 "></i>,
      h:'Product Development',
      desc:'We specialize in crafting Minimum Viable Products, which lines up with your vision.',
      bgColor:'bg-gradient-to-b from-orange-200 to-white'
    },
    {
      icon:<i aria-hidden="true" class="far fa-building text-[40px] text-blue-500"></i>,
      h:'Enterprise Evolution',
      desc:'From grand ventures to small-scale projects, we propel you forward with tailored solutions.',
      bgColor:'bg-gradient-to-b from-blue-200 to-white'
    },
    {
      icon:<i aria-hidden="true" class="fas fa-users text-[40px] text-blue-900"></i>,
      h:'Dedicated Developers',
      desc:'Build a motivated team of experts of your choice, to accomplish your digital dreams.',
      bgColor:'bg-gradient-to-b from-blue-300 to-white'
    },
]

  return (
    <>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 my-20 xl:my-40 xl:mx-10 px-2 sm:px-8 md:px-10 lg:px-12">
      <section className="order-2 xl:order-1 px-4 xl:px-0">
        <h5 className="font-bold xl:ml-12">QUICK ANSWERS</h5>
        <h1 className="font-bold text-[2rem] xl:text-[2.8rem] mb-10 xl:text-center">Frequently asked questions</h1>

        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
          className="xl:mx-14"
        >
          {arr4.map((item, index) => {
            const headingId = `accordion-flush-heading-${index}`;
            const bodyId = `accordion-flush-body-${index}`;
            const isActive = activeIndex === index;

            return (
              <div key={index}>
                <h2 id={headingId}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-bold text-[19px] rtl:text-right border-b border-gray-200 text-[#070707] dark:border-gray-700 dark:text-gray-400 gap-3 font-dm-sans hover:text-[#747982] outline-none"
                    data-accordion-target={`#${bodyId}`}
                    aria-expanded={isActive}
                    aria-controls={bodyId}
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-start">{item.desc}</span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 ${isActive ? 'rotate-180' : ''} shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div id={bodyId} className={`${isActive ? '' : 'hidden'}`} aria-labelledby={headingId}>
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-[17px] italic">{item.data}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="order-1 xl:order-2 h-[25rem] sm:h-[37rem] md:h-[37rem]  lg:h-[39rem]">
        <div className=" w-full h-80 md:w-[29rem] md:h-[500px] lg:w-[32rem] lg:h-[530px] m-auto bg-[url('https://mtechub.com/wp-content/uploads/2023/10/Pages-services-FAQ-BG.webp.png')] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundSize: "calc(100% - 5px) calc(100% - 5px)", //for mobile  
                }}
        >
          <img src="https://mtechub.com/wp-content/uploads/2023/09/1231232edws.png" alt="" className="w-full h-96 pt-4 
          lg:h-[38.5rem] md:h-[37rem] object-contain" />
        </div>
      </section>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-4 xl:mx-28 gap-8 my-10'>
      {
        arr.map((item , index)=>{
          return(
            <>
              <div className='flex flex-col items-center gap-6 text-center  shadow-xl px-6 py-4 xl:p-10 xl:py-8 rounded-xl border space-x-2 hover:translate-x-6 duration-500'>
              <div className={` w-20 h-20 rounded-full ${item.bgColor} flex justify-center items-center`}><div>{item.icon}</div></div>
              <div className='space-y-2'><h1 className='text-xl font-bold'>{item.h}</h1>
               <p className='text-gray-400'>{item.desc}</p></div>
               </div> 
            </>
          )
        })
      }

    </div>

    </>
  );
};

export default BackgroundImageComponent;
