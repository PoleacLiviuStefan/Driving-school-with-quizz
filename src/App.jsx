import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import { Route, Routes } from "react-router-dom"
import Offers from './Components/Offers/Offers'
import Products from './Components/Products/Products'
import DriverLicense from './Components/Services/DriverLicense'
import DefensiveDriving from './Components/Services/DefensiveDriving'
import OnlineRegister from './Components/OnlineRegister/OnlineRegister'
import Steps from './Components/Steps/Steps'
import Contact from './Components/Contact/Contact'

function App() {


  return (
    <div className='font-montSerrat'>
      <Navbar />
      <Routes>
        <Route path="/" element={     <main>
          <Hero />
          <About />
          <Steps />
        </main>} />
        <Route path="/oferte" element={ <Offers />} />
        <Route path="/produse" element={<Products />} />
        <Route path="/servicii/obtine-permisul" element={<DriverLicense />} />
        <Route path="/inscrieri-online" element={<OnlineRegister />} />
        <Route path="/servicii/conducere-defensiva" element={<DefensiveDriving />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
