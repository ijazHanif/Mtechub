import React, { useEffect } from 'react'
import {Routes , Route, useLocation} from 'react-router-dom' 
import Header from './components/header/index'
import Home from './pages/HomePage'
import About from './components/AboutComp/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/index'
import CloudServices from './components/commonServicesComp/CloudServices'
import DigitalMarketing from './components/commonServicesComp/DigitalMarketing'
import MobileApp from './components/commonServicesComp/MobileApp'
import UIUXServices from './components/commonServicesComp/UIUXServices'
import WebApp from './components/commonServicesComp/WebApp'
import Stacks from './components/stacks/index'
import Calendly from './components/calender/Calendly'
import 'flowbite';


const App = () => {
const location = useLocation();
useEffect(()=>{
 window.scroll(0,0)
},[location]);
  
let hide = location.pathname ==='/calendly'

  return (
    < >
      {!hide && <Header/>}
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cloud' element={<CloudServices/>}/>
       <Route path='/digital' element={<DigitalMarketing/>}/>
       <Route path='/mobile' element={<MobileApp/>}/>
       <Route path='/uiux' element={<UIUXServices/>}/>
       <Route path='/web' element={<WebApp/>}/>
       <Route path='/stacks' element={<Stacks/>}/>
       <Route path='/calendly' element={<Calendly/>}/>
      </Routes>
     {!hide && <Footer/>}

    </>
  )
}

export default App