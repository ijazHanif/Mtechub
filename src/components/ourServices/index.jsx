import React from 'react';

const Index = () => {
  let arr = [
    {
      id: 1,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/healthcare.png',
      title: 'Health Care',
      desc: 'Bridging medical professionals and patients with digital precision.',
      fromColor: '#FFE8B6',
      toColor: '#FFFDF6',
    },
    {
      id: 2,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/edu.png',
      title: 'Education',
      desc: 'Transforming learning with interactive and accessible solutions',
      fromColor: '#B2CFFF',
      toColor: '#FFFDF6',
    },
    {
      id: 3,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/logictic.png',
      title: 'Logistics',
      desc: 'Optimizing deliveries and routes with smart app innovations',
      fromColor: '#B0CEFF',
      toColor: '#FFFDF6',
    },
    {
      id: 4,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/cart-1.png',
      title: 'E Commerce',
      desc: 'Enhancing shopping experiences with intuitive digital platforms',
      fromColor: '#FFE8B6',
      toColor: '#FFFDF6',
    },
    {
      id: 5,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/fintech.png',
      title: 'Fintech',
      desc: 'Smoothing transactions in a digital age with secure fintech apps',
      fromColor: '#B0CEFF',
      toColor: '#FFFDF6',
    },
    {
      id: 6,
      icon: 'https://mtechub.com/wp-content/uploads/2023/09/ondemoiad.png',
      title: 'On Demand Service',
      desc: 'Bringing instant services to your fingertips with responsive apps',
      fromColor: '#CAC8FF',
      toColor: '#FFFDF6',
    },
  ];
  return (
    <>
      <div className='my-[4rem] space-y-16'>
        <div className='text-center md:w-[50vw] px-8 m-auto space-y-6'>
          <h1 className='text-[32px] dm:text-[40px] lg:[48px] font-bold'>Spotlight on Key Industries</h1>
          <p className='text-[16px] md:text-[17px] lg:text-[19px] text-gray-400'>By merging cutting-edge technology with industry-specific insights, we deliver apps that not only resonate with end-users but also drive tangible business results</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 space-y-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] '>
            {arr.map((item, index) => {
              return (
                <div key={item.id} className='border shadow-xl p-6 rounded-2xl space-y-4 md:m-2 lg:m-4 xl:m-6 hover:-translate-y-3 duration-500 cursor-pointer'>
                  <div
                    style={{ backgroundImage: `linear-gradient(to bottom, ${item.fromColor}, ${item.toColor})` }}
                    className='rounded-custom-shape h-[6.2rem] w-[6.2rem] flex justify-center items-center'
                  >
                    <img src={item.icon} alt='' className='w-[4.5rem] h-[4.5rem]' />
                  </div>
                  <h1 className='text-[18px] font-bold'>{item.title}</h1>
                  <p className='text-[17px] text-gray-400'>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
