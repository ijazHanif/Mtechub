import React from 'react'
import BackgroundImg from '../commonServices/BackgroundImg'
import ServiceCards from '../commonServices/ServiceCards1'
import StrategyCards from '../commonServices/StrategyCards'
import Techubwhy from '../commonServices/Techubwhy'
import AskedQuestion from '../commonServices/AskedQuestion';
import Card from '../review/Card'

const CloudServices = () => {
  let imgurl = 'https://mtechub.com/wp-content/uploads/2023/10/12071198_SL-101820-36860-11-scaled.jpg'
  let title ='Cloud Services'
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
      desc:'What is cloud computing?',
      data:'Cloud computing is a technology that allows users to access and use computing resources over the internet, without the need for physical hardware or infrastructure.',
    },
    {
      desc:'What are the advantages of using cloud computing services?',
      data:'Cloud computing offers benefits like scalability, cost-efficiency, flexibility, and the ability to access resources from anywhere with an internet connection.',
    },
    {
      desc:'Is cloud computing secure?',
      data:'Cloud providers implement robust security measures, but the security of cloud-based services also depends on how users configure and manage them. It’s important to follow best practices and use encryption to enhance security.',
    },
    {
      desc:'How does pricing work for cloud services?',
      data:'Cloud services are typically billed on a pay-as-you-go or subscription basis. Costs are based on factors like usage, storage, data transfer, and the specific services you choose.',
    },
    {
      desc:'Can I migrate my existing applications to the cloud?',
      data:'Yes, many existing applications and workloads can be migrated to the cloud. Cloud providers offer tools and services to facilitate this transition, but it may require some adjustments to make the best use of cloud resources.',
    },
  ]
  return (
    < >
      <BackgroundImg imgurl={imgurl} data={title}/>
      <ServiceCards arr1={arr1} arr2={arr2}/>
      <StrategyCards arr3={arr3} gridcols='6'/>
      <Techubwhy/>
      <AskedQuestion arr4={arr4}/>
      <Card/>
    </>
  )
}

export default CloudServices
