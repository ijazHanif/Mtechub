import React from 'react'
import BackgroundImg from '../commonServices/BackgroundImg'
import ServicesDesc from '../commonServices/ServicesDesc';
import ServiceCards1 from '../commonServices/ServiceCards1';
import StrategyCards from '../commonServices/StrategyCards';
import Services from '../ourServices/index'
import Techubwhy from '../commonServices/Techubwhy';
import AskedQuestion from '../commonServices/AskedQuestion';
import Card from '../review/Card'

const WebApp = () => {
  let imgurl = 'https://mtechub.com/wp-content/uploads/2023/10/christopher-gower-m_hrflhgabo-unsplash-sixteen_nine.png'
  let title ='Web Development';
  let imgurl1='https://mtechub.com/wp-content/uploads/2023/10/Asset-1@fdssd4-2.png'
  let arr=[
    {
      title:'BEST IN OUR FIELD',
      h:'Custom Web Application Development Services',
      desc:'With our web development services, we assist you in achieving your online vision. We design and develop aesthetically pleasing, intuitive, and feature-rich websites, while keeping a close eye on user experience. ',
      point1:'Maximizing performance, security, and scalability',
      point2:'Use of modern web development frameworks',
      point3:'Comprehensive website quality control',
    }
  ]
  let arr1=[
    {
      h:'A Wide Range of Web Application Development Services',
      desc:'We specialize in crafting tailor-made web apps that harness cutting-edge technologies'
    }
  ]
  let arr2=[
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/2534021-200-1.png',
      h:'Progressive Web Apps',
      desc:'Swift and captivating PWA solutions, leading to higher user engagement.'
    },
    {
        icon:'https://mtechub.com/wp-content/uploads/2023/10/1302940.png',
        h:'Enterprise Web Apps',
        desc:'Create innovative, market-leading enterprise web apps using agile practices'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/aqswdefrgt.png',
      h:'Cloud-Based Web Apps',
      desc:'Benefit from excellent scalability, security, and accessibility'
    },
    {
      icon:'https://mtechub.com/wp-content/uploads/2023/10/2898399.png',
      h:'E-commerce Web',
      desc:'Creating online stores with features like catalogs, carts, and secure payments.'
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
      desc:'What types of web development services does your firm offer?',
      data:'We provide a wide range of web development services, including custom web app development, e-commerce solutions, API development, and more.',
    },
    {
      desc:'How long does it typically take to complete a web development project?',
      data:'Project timelines can vary depending on complexity. We work closely with clients to define project scope and provide estimated timelines.',
    },
    {
      desc:'What technologies and programming languages do you specialize in?',
      data:'We specialize in a variety of technologies, including ReactJS, Laravel, Node.js and more. We select the most suitable tech stack based on project requirements.',
    },
    {
      desc:'Do you offer ongoing maintenance and support for web applications after development?',
      data:'Yes, we offer comprehensive maintenance and support packages to ensure your web application remains secure, up-to-date, and running smoothly.',
    },
    {
      desc:'Can you provide examples of past web development projects you have completed?',
      data:'Certainly, we have a portfolio of diverse projects across various industries. Feel free to explore our case studies and client testimonials for more insights.'
    }
  ]
  return (
    < >
      <BackgroundImg imgurl={imgurl} data={title}/>
      <ServicesDesc imgurl1={imgurl1} data={arr} condtion={false}/>
      <ServiceCards1 arr1={arr1} arr2={arr2}/>
      <StrategyCards arr3={arr3} gridcols='6'/>
      <Services/>
      <Techubwhy/>
      <AskedQuestion arr4={arr4}/>
      <Card/>
    </>
  )
}

export default WebApp
