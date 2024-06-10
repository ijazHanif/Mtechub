import React from 'react'

const Review = () => {
    let arr1=[
        {
            desc1:'" Their app development is second to none. Truly a game-changer for my business!"',
            desc2:'If you’re in doubt, trust me and opt for their app development. The value I received is immeasurable compared to the cost',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/149071.png',
            name:'Riley Adams',
            title:'Startup Founder'
        },
        {
            desc1:'" The enterprise application they crafted is seamless and efficient. "',
            desc2:'Hesitant about which agency to choose? Their enterprise solutions are a sure bet. The ROI has been phenomenal',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/149071.png',
            name:'Taylor Morgan',
            title:'IT Director, NextGen Enterprises'
        },
    ]
    let arr2=[
        {
            desc1:'"SEO was always a challenge, but with them, it is a breeze."',
            desc2:'Still searching for the best in SEO? Your search ends here. The outcomes have far exceeded the investment.',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/149071.png',
            name:'Alexis Smith',
            title:'E-commerce Entrepreneur'
        },
        {
            desc1:'"Their digital marketing strategies are revolutionary. I have never seen such engagement!"',
            desc2:'If you’re pondering your next digital marketing partner, look no further. The results speak for themselves, and the investment is worth every penny.',
            icon:'https://mtechub.com/wp-content/uploads/2023/09/149071.png',
            name:'Jordan Lee',
            title:'Brand Manager, UrbanWear'
        }
        
     ]
  return (
    <div className=''>
      
      <div className='bg-gray-50'>

<div className='md:flex px-4 xl:px-40 my-14'>
 {
     arr1.map((item)=>{
         return(
          <div className='shadow-xl border p-8 rounded-xl m-2 space-y-3'>
              <p className='text-[19px] font-bold text-center md:text-start'>{item.desc1}</p>
              <p className='text-gray-400 text-center md:text-start'>{item.desc2}</p>
              <div className='md:flex space-x-3'>
                
                <div className=''> <img src={item.icon} alt="" className='w-10 m-auto md:m-0'/></div>
                <div><p className='font-bold  md:px-0 text-center md:text-start'>{item.name}</p>
                 <p className='font-bold text-gray-400  md:px-0 text-center md:text-start'>{item.title}</p></div>
          
               </div>
          </div>   
      )
  })
}
</div>

<div className='2xl:mx-96 '>
  <h1 className='text-center font-bold text-[65px] lg:mx-20 my-10'>What Our Cleints
     Says About Us,</h1>
</div>


<div className='md:flex px-4 xl:px-40 my-14'>
 {
     arr2.map((item)=>{
         return(
          <div className='shadow-xl border p-8 rounded-xl m-2 space-y-3'>
              <p className='text-[19px] font-bold text-center md:text-start'>{item.desc1}</p>
              <p className='text-gray-400 text-center md:text-start'>{item.desc2}</p>
              <div className='md:flex space-x-3'>
                
                <div className=''> <img src={item.icon} alt="" className='w-10 m-auto md:m-0'/></div>
                <div><p className='font-bold  md:px-0 text-center md:text-start'>{item.name}</p>
                 <p className='font-bold text-gray-400  md:px-0 text-center md:text-start'>{item.title}</p></div>
          
               </div>
          </div>   
      )
  })
}
</div>     
</div> 


    </div>
  )
}

export default Review
