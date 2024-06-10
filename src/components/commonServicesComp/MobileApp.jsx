import React from 'react'
import BackgroundImg from '../commonServices/BackgroundImg'
import ServicesDesc from '../commonServices/ServicesDesc'
import ServiceCards2 from '../commonServices/ServiceCards2';
import StrategyCards from '../commonServices/StrategyCards';
import Services from '../ourServices/index'
import Techubwhy from '../commonServices/Techubwhy';
import AskedQuestion from '../commonServices/AskedQuestion';
import Card from '../review/Card'

const App = () => {

  let imgurl = 'https://mtechub.com/wp-content/uploads/2023/10/representations-user-experience-interface-design.jpg';
  let imgurl1='https://mtechub.com/wp-content/uploads/2023/10/Asset-1@fdssd4-2.png'
  let title ='Mobile App Development'
  let arr=[
    {
      title:'BEST IN OUR FIELD',
      h:'Custom Mobile Application Development Services',
      desc:'Our professional mobile application developers can help you achieve your digital goals. Our team has extensive experience developing intelligent applications for both iOS and Android platforms. ',
      point1:'Customized development services',
      point2:'Affordable plans for contracting',
      point3:'Free mobile app development consultation',
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
      icon:'https://mtechub.com/wp-content/uploads/2023/10/567608.png',
      h:'Android Apps',
      desc:'Create feature-rich, and enagaging android apps that perfectly match your organizational goals'
    },
    {
        icon:'https://mtechub.com/wp-content/uploads/2023/10/apple-.png',
        h:'iOS Apps',
        desc:'Find outstanding services, with our team expert in developing intuitive iOS apps for the iPhones and iPads.'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/raedt.png',
      h:'React Native Apps',
      desc:'Cloud services that allows you to manage server infrastructure, enhancing scalability and cost efficiency.'
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
      icon:'https://mtechub.com/wp-content/uploads/2023/10/Development.png',
      h:'Development'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/apptest.png',
      h:'Integration'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/launch.png',
      h:'Testing & Launch'
    },
  ]
  let arr4=[
    {
      desc:'What is mobile app development?',
      data:'Mobile app development is the process of creating software applications specifically designed for mobile devices, such as smartphones and tablets.',
    },
    {
      desc:'Why should I invest in a mobile app for my business?',
      data:'A mobile app can enhance your business by increasing customer engagement, expanding your reach, and offering convenience and accessibility to your services.',
    },
    {
      desc:'What platforms can you develop apps for?',
      data:'We offer app development services for both iOS (Apple) and Android platforms, ensuring your app reaches a wide user base.',
    },
    {
      desc:'How long does it take to develop a mobile app?',
      data:'The development timeline varies based on the complexity of your app. Simple apps may take a few months, while more complex projects can take several months to a year.',
    },
    {
      desc:'What ongoing support and maintenance services do you provide?',
      data:'We offer continuous support, updates, and maintenance services to ensure your app remains up-to-date, secure, and functional, even after the initial development phase.',
    },
  ]
  return (
    < >
      <BackgroundImg imgurl={imgurl} data={title}/>
      <ServicesDesc imgurl1={imgurl1} data={arr} condition={true}/>
      <ServiceCards2 arr1={arr1} arr2={arr2} />
      <StrategyCards arr3={arr3} gridcols='6'/>
      <Services/>
      <Techubwhy/>
      <AskedQuestion arr4={arr4}/>
      <Card/>
    </>
  )
}

export default App
