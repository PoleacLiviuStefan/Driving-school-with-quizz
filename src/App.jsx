import { useState,useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import { Route, Routes,useLocation } from "react-router-dom"

import Offers from './Components/Offers/Offers'
import Products from './Components/Products/Products'
import DriverLicense from './Components/Services/DriverLicense'
import DefensiveDriving from './Components/Services/DefensiveDriving'
import OnlineRegister from './Components/OnlineRegister/OnlineRegister'
import Steps from './Components/Steps/Steps'

import Galery from './Components/Galery/Galery'
import ChestionareOnline from './Components/ChestionareOnline/ChestionareOnline'
import Improvments from './Components/Improvments/Improvments'
import Footer from './Components/Footer/Footer'
import ChestionareOnlineMain from './Components/ChestionareOnline/ChestionareOnlineMain'
import GaleryMain from './Components/Galery/GaleryMain'

import Contact from './Components/Contact/Contact'
import ContactInfo from './Components/Navbar/ContactInfo'
import InfoSliders from './Components/InfoSliders/InfoSliders'
import PerfectionareMoto from './Components/Services/PerfectionareMoto'
import PersonalVechicleCourse from './Components/Services/PersonalVechicleCourse'
import News from './Components/News/News'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'

function App() {
  localStorage.setItem("userEmail","")
  localStorage.setItem("cursantConectat",false);
  localStorage.setItem("userEmailCursant","")
  const [loadingScreen,setLoadingScreen]=useState(true);
  const located=useLocation();
  const [hideLoading,setHideLoading]=useState(false);
  localStorage.setItem("completedQuizz",false);
  useEffect(()=>{ 
   setLoadingScreen(true);
    const timer=setTimeout(()=>{
        setLoadingScreen(false);
        window.scrollTo({top:0,left:0});
    },3500)
    return () => clearTimeout(timer);
  },[])
  useEffect(() => {
    
    const timer = setTimeout(() => {
        setHideLoading(true);
        
    },3000);
    
    return () => clearTimeout(timer)
}, []);

  useEffect(()=>{
      if(located.pathname!="/legislatie/chestionare-online")
       { localStorage.setItem("modChestionar",false);
        localStorage.setItem("completedQuizz",false)
  }

  },[located.pathname])
  return (
    <div className='font-montSerrat'>
       <div className={`fixed ${!loadingScreen && "hidden"} ${hideLoading && "animate-[disappear_.3s_ease-in-out_forwards]"} z-50 left-0 top-0`}>
          <LoadingScreen  />
       </div>
      <Navbar />
      <Routes>
        <Route path="/" element={     <main>
          <ContactInfo />
          <Hero />
          <About />
          <InfoSliders />
          <Steps />
   
          <Improvments />
       
          <ChestionareOnlineMain />
          <GaleryMain />
          
        </main>} />
        <Route path="/oferte" element={ <Offers />} />
        <Route path="/produse" element={<Products />} />
        <Route path="/servicii/obtine-permisul" element={<DriverLicense />} />
        <Route path="/inscrieri-online" element={<OnlineRegister />} />
        <Route path="/servicii/conducere-defensiva" element={<DefensiveDriving />} />
        <Route path="/servicii/perfectionare-moto" element={<PerfectionareMoto />} />
        <Route path="/servicii/curs-cu-masina-personala" element={<PersonalVechicleCourse />} />
        <Route path="/legislatie/chestionare-online" element={<ChestionareOnline />} />
        <Route path="/noutati" element={<News />} />
        <Route path="/galerie" element={<Galery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
