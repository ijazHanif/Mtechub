import React from 'react'
import Footer from '../footer/index'

const Blog = () => {
    let arr=[
        {
            icon:'https://mtechub.com/wp-content/uploads/2023/10/25644130_7076235-650x433.jpg',
            title:'BUSINESS BLOGS',
            header:'Top 7 ERP Systems for Small Businesses & Startups',
            desc:'Top 7 ERP Systems for Small Businesses & Startups Are you a startup or a small to medium-sized business searching for the […]',
            companyName:'MTECHUB.COM',
            date:'OCTOBER 18, 2023'
        },
        {
            icon:'https://mtechub.com/wp-content/uploads/2023/10/23757220_221_ug9ses1dagfpbi0xlvdoaxrl-650x396.jpg',
            title:'BUSINESS BLOGS, TECH BLOGS',
            header:'Applications of Blockchain Technology in Business',
            desc:'Applications of Blockchain Technology in Business In recent years, blockchain has been a hot topic among techies and C-suite executives. While blockchain […]',
            companyName:'MTECHUB.COM',
            date:'OCTOBER 18, 2023'
        },
        {
            icon:'https://mtechub.com/wp-content/uploads/2023/10/food-delivery-boy-driving-scooter-with-box-with-food-wearing-mask-650x433.jpg',
            title:'BUSINESS BLOGS',
            header:'Revolutionizing Food Delivery Industry with Mobile Apps',
            desc:'How Mobile Apps Are Revolutionizing Food Delivery Industry Mobile applications have transformed many things in our daily lives. Food delivery apps have […]',
            companyName:'MTECHUB.COM',
            date:'OCTOBER 18, 2023'
        },
        {
            icon:'https://mtechub.com/wp-content/uploads/2023/10/28159021_site_design_12-650x216.jpg',
            title:'TECH BLOGS',
            header:'5 Best Programming Languages for Mobile App Development',
            desc:'5 Best Programming Languages for Mobile App Development In 2023 Mobile app development has become an essential part of the digital world. […]',
            companyName:'MTECHUB.COM',
            date:'OCTOBER 18, 2023'
        },
        {
            icon:'https://mtechub.com/wp-content/uploads/2023/09/choosing-icons-mobile-app-650x434.jpg',
            title:'TECH BLOGS',
            header:'Mobile Apps vs Web Apps',
            desc:'Mobile Apps vs Web Apps: What’s Better for Your Business Needs? In the modern era of digital technology, businesses are confronted with […]',
            companyName:'MTECHUB.COM',
            date:'OCTOBER 18, 2023'
        },
    ]
  return (
    <>
    <div>

    <div className='bg-[#2B55E3] h-[22.4rem] flex justify-center items-center text-center'>
    <div className='  text-white'>
          <div className='md:text-[17px]  xl:text-[1.2rem]'>
            <span className=' cursor-pointer text-[#A6BAF2] font-semibold hover:text-white duration-300'>Home</span>
            <span><i class="fa-sharp fa-thin fa-greater-than text-[#A6BAF2] mx-2"></i></span>
            <span className=' text-bold text-[#A6BAF2] hover:text-white font-semibold'>About</span>
          </div>
          <div className='mt-2'>
            <span className='text-[44px] md:text-[60px] xl:text-[4.5rem] font-bold'>BLOG</span>
          </div>
        </div>
      </div>  



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-6 md:mx-12 lg:mx-16 xl:mx-24 my-24'>
          {
            arr.map((item , index)=>{
                return(
                  <>
                   <div key={index}>

                   <div className="relative w-[26.2rem] h-[9.5rem] vsm:h-[12.5rem] xl:h-[15rem] overflow-hidden group">
                  <img src={item.icon} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"/></div>

                     <div className='space-y-4'>
                        <div className='text-[11px] font-bold text-blue-500 my-[1.5rem] cursor-pointer hover:text-yellow-400 hover:duration-500'>{item.title}</div>
                        <span className='text-[1.1rem] md:text-[1.3rem] xl:text-[1.6rem] font-bold cursor-pointer hover:text-yellow-400 hover:duration-500'>{item.header}</span>
                        <p className='text-[#A7ABB3]'>{item.desc}</p>
                        <div className='text-[11px] font-bold text-[#A7ABB3] space-x-2 '> <span>{item.companyName}</span> <span>{item.date}</span> </div>
                     </div>
                   </div>
                  </>
                )
              })
            }
      </div>

    </div>   
    </>
  )
}

export default Blog
