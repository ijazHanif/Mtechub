import React from 'react'
import BackgroundImg from '../commonServices/BackgroundImg';
import ServicesDesc from '../commonServices/ServicesDesc';
import ServiceCards from '../commonServices/ServiceCards1';
import StrategyCards from '../commonServices/StrategyCards';
import Techubwhy from '../commonServices/Techubwhy';
import AskedQuestion from '../commonServices/AskedQuestion';
import Card from '../review/Card'
import UIUXPackages from '../commonServices/UIUXPackages';

const UIUXServices = () => {
  let imgurl = 'https://mtechub.com/wp-content/uploads/2023/10/representations-user-experience-interface-design.jpg'
  let title ='UI/UX Services';
  let imgurl1='https://mtechub.com/wp-content/uploads/2023/10/Asset-1@fdssd4-1.png';
  let arr=[
    {
      title:'BEST IN OUR FIELD',
      h:'UI/UX Design & Consulting Services',
      desc:'We offer UI/UX services tailored to propel your business to new, higher levels. Our main goal is to design user interfaces that are simple and encourage the adoption of innovation. ',
      point1:'Intuitive, engaging, and aesthetic designs',
      point2:'Data driven design',
      point3:'Improved customer retention',
    }
  ]
  let arr1=[
    {
      h:'Our Wide Range of Cloud Services',
      desc:'Our custom cloud services are flexible enough to accommodate your unique business needs and financial constraints.'
    }
  ]
  let arr2=[
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/lcod.png',
      h:'Cloud-Based Apps',
      desc:'We create customized cloud-based applications to streamline your digital processes and give you more control.'
    },
    {
        icon:'https://mtechub.com/wp-content/uploads/2023/10/sdevop.png',
        h:'DevOps Solutions',
        desc:'Unleash the full potential of integrated DevOps management with the help of cloud computing.'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/serverless.png',
      h:'Serverless Computing',
      desc:'Cloud services that allows you to manage server infrastructure, enhancing scalability and cost efficiency.'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/confgimang.png',
      h:'Configuration Management',
      desc:'Services that enables you to automate configuration and management of infrastructure and software environments.'
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
      desc:'Why is UI/UX design important for my business?',
      data:'Effective UI/UX design can enhance customer satisfaction, increase user engagement, and ultimately drive business growth by ensuring your digital products are user-friendly and visually appealing.',
    },
    {
      desc:'Do I need a UI/UX consultant for my project?',
      data:'While it’s not always necessary, a UI/UX consultant can be particularly beneficial for complex projects or when you want to ensure the highest quality user experience, especially if you lack in-house expertise.',
    },
    {
      desc:'What industries can benefit from UI/UX design?',
      data:'UI/UX designs are relevant to virtually all industries, from e-commerce and healthcare to finance and education, as they apply to any digital product or service.',
    },
    {
      desc:'How long does it take to see improvements in UI/UX?',
      data:'The timeframe varies depending on the project’s complexity and the specific issues identified. However, you can often see noticeable improvements within a few weeks or months.',
    },
    {
      desc:'What is the cost of UI/UX consulting services?',
      data:'The cost of UI/UX consulting services depends on the scope of the project and the level of expertise required. It’s typically an investment that pays off in improved user satisfaction and business success',
    },
  ]
  return (
    < >
      <BackgroundImg imgurl={imgurl} data={title}/>
      <ServicesDesc imgurl1={imgurl1} data={arr} condition={true}/>
      <ServiceCards arr1={arr1} arr2={arr2} condition={false}/>
      <StrategyCards arr3={arr3} gridcols='4'/>
      <Techubwhy/>
      <AskedQuestion arr4={arr4}/>
      <UIUXPackages/>
      <Card/>
    </>
  )
}

export default UIUXServices
