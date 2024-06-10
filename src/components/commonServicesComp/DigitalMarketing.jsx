import React from 'react'
import BackgroundImg from '../commonServices/BackgroundImg'
import ServicesDesc from '../commonServices/ServicesDesc'
import ServiceCards from '../commonServices/ServiceCards1'
import StrategyCards from '../commonServices/StrategyCards'
import Services from '../ourServices/index'
import AskedQuestion from '../commonServices/AskedQuestion';
import Card from '../review/Card'

const DigitalMarketing = () => {
  let imgurl = 'https://mtechub.com/wp-content/uploads/2023/10/christopher-gower-m_hrflhgabo-unsplash-sixteen_nine.png'
  let title ='Digital Marketing'
  let imgurl1='https://mtechub.com/wp-content/uploads/2023/10/Asset-1@fdssd4.png';
  let arr=[
    {
      title:'BOOST YOUR ONLINE BUSINESS',
      h:'Digital Marketing Services',
      desc:'We’re a client-focused agency committed to redefining industry norms. Our custom strategies prioritize client needs while maintaining the highest standards of integrity and transparency. With years of experience, we’ve transformed digital marketing, offering a dynamic and innovative online experience. ',
      point1:'Consumer loyalty across platforms',
      point2:'Connect with experienced professionals',
      point3:'Boost your Social Media Branding',
    }
  ]
  let arr1=[
    {
      h:'A Wide Range of Digital Marketing Services',
      desc:`We're geared up for a thrilling future, collaborating with exceptional clients and spearheading digital marketing advancements.`
    }
  ]
  let arr2=[
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/5902216.png',
      h:'SEO Services',
      desc:'Boost your online presence and drive more traffic to your website with our expert SEO services'
    },
    {
        icon:'https://mtechub.com/wp-content/uploads/2023/10/1000_F_480499069_ehgsaAc2d8mVU2hQXHSKm0OCMqZqmiuw.png',
        h:'Social Media Marketing',
        desc:'Elevate your brand’s online presence, engage your audience, and drive results like never before.'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/4698699.png',
      h:'Content Creation',
      desc:'Unlock the power of captivating content with our professional content creation services – Your ideas, our expertise!'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/7457435.png',
      h:'Ad Campaign',
      desc:'Drive Success with Our Ad Campaign Services: Where Your Vision Meets Effective Marketing'
    }
  ]
  let arr3=[
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/ideation.png',
      h:'Ideation'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/Planning.png',
      h:'Requirement'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/uiux.png',
      h:'Prototype Design'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/launch.png',
      h:'Launch'
    },
  ]
  let arr4=[
    {
      desc:'What is digital marketing, and why is it important for my business?',
      data:'Digital marketing includes SEO, social media, and email marketing to expand your reach, boost brand visibility, and drive digital growth.',
    },
    {
      desc:'What services does your marketing agency offer in digital marketing?',
      data:'We offer a comprehensive range of digital marketing services, including SEO, social media management, content marketing, pay-per-click advertising, email marketing, and web design, tailored to meet your unique business goals.',
    },
    {
      desc:`How can digital marketing help improve my website's visibility on Google?`,
      data:'Our SEO services optimize content, enhance site structure, and utilize relevant keywords to boost your site’s visibility, ranking higher on search engine results and attracting organic traffic',
    },
    {
      desc:'Will my business benefit from social media marketing?',
      data:'Yes, social media marketing can benefit businesses of all sizes. We create tailored social media strategies to engage your target audience, build brand loyalty, and increase leads and sales',
    },
    {
      desc:'How can I measure the effectiveness of your digital marketing campaigns for my business?',
      data:'We provide regular performance reports, detailing key metrics like website traffic, conversion rates, and ROI. These insights help us track the success of our campaigns and make data-driven adjustments',
    },
  ]
  return (
    < >
      <BackgroundImg imgurl={imgurl} data={title}/>
      <ServicesDesc imgurl1={imgurl1} data={arr} condition={false}/>
      <ServiceCards arr1={arr1} arr2={arr2}/>
      <StrategyCards arr3={arr3} gridcols='4'/>
      <Services/>
      <AskedQuestion arr4={arr4}/>
      <Card/>
    </>
  )
}

export default DigitalMarketing
