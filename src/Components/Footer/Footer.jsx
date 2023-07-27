import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.png'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import waygital from '../../Images/waygital.webp'
const Footer = () => {

  const navigate=useNavigate();

  return (
    <div className='relative mt-0 flex flex-col justify-center bg-slate-600 items-center py-[1rem] w-full h-full '>
      <span className='absolute top-0 w-full h-[2px] bg-red-500' />
        <div className='flex flex-col  items-center  lg:items-start justify-between w-full lg:w-[65rem] h-full text-white'>
           <div className='flex flex-col items-start'>
            
                
              <div className='mt-[2rem] flex flex-col items-center lg:items-start lg:grid lg:grid-cols-3  w-full'>
              <div className=' flex items-center lg:w-[30rem] '>
                
                <img src={logo} className='w-[60px] lg:w-[100px]' />
                <div className='ml-[1rem] flex flex-col items-center'>
                <h3 className=' text-center lg:text-[18px] font-bold'>SCOALA AUTO-MOTO <br/> POPTEAN </h3>            
              
                <h2 className='flex items-center text-[11px] lg:text-[13px] font-extrabold'><span className='mr-2 w-[2rem] h-[2px] bg-white ' />SCOALA DE SOFERI<span className='ml-2 w-[2rem] h-[2px] bg-white ' /> </h2>
              </div>  
          </div> 
                <ul className='mt-[2rem] lg:mt-0 lg:ml-[8rem] flex flex-col items-start w-[10rem] text-left text-[13px]'>
                  <li className='= font-bold text-[18px]'>CONTACT</li>
                  <li className='my-[.5rem] text-center cursor-pointer' onClick={()=>{navigate("/servicii/obtine-permisul");window.scrollTo({top:0,left:0});}}>OBTINE PERMISUL</li>
                  <li className='my-[.5rem] text-center cursor-pointer'  onClick={()=>{navigate("/servicii/inscrieri-online");window.scrollTo({top:0,left:0});}}>INSCRIERI ONLINE</li>
                  <li className='my-[.5rem] text-center cursor-pointer'   onClick={()=>{navigate("/legislatie/chestionare-online");window.scrollTo({top:0,left:0});}}>LEGISLATIE</li>
                  <li className='my-[.5rem] text-center cursor-pointer' onClick={()=>{navigate("/noutati");window.scrollTo({top:0,left:0});}}>NOUTATI</li>
                  <li className='my-[.5rem] text-center cursor-pointer' onClick={()=>{navigate("/contact");window.scrollTo({top:0,left:0});}}>CONTACT</li>
                </ul>
                <ul className='mt-[2rem] lg:mt-0  lg:ml-[2rem] flex flex-col items-start w-[10rem] text-left text-[13px] '>
                  <li className='= font-bold text-[18px]'>CONTACT</li>
                  <li className='flex items-center my-[.5rem] font-bold cursor-pointer'><span className='text-red-500 text-[20px] mr-2'><AiOutlineMail /></span>poptean.marius82@gmail.com</li>
                  <li className='flex items-center my-[.5rem] font-bold'>   <a href="tel:+40755651487" className='flex items-center  cursor-pointer '><span className='text-[16px] lg:text-[20px] text-red-500 mr-2'><AiOutlinePhone /></span> 0755 651 487   </a></li>
                </ul>
              </div>
            </div>
            <div className='flex mt-[3rem]  flex-col-reverse   lg:flex-row justify-between  items-center lg:items-end w-full lg:w-[60rem]'> 
            <div className='flex'>powered by<a href="https://www.waygital.ro/" className='relative flex'> <img src={waygital} className='ml-2 w-[60px] h-[20px]'/></a></div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center w-[12rem] justify-between'>
            <div className='bg-stripe bg-cover w-[70px] h-[35px]'/>
            <div className='bg-visa bg-cover w-[45px] h-[25px]'/>
            <div className='bg-masterCard bg-cover w-[50px] h-[30px]'/>
          </div>
          <h5>@2023 Scoala De Soferi - Scoala Auto Moto Poptean </h5>
        </div>
        <div className='relative flex flex-col mb-[2rem] lg:mb-0'>
        <a href="https://anpc.ro/ce-este-sal/"> <div className='bg-cover bg-sal w-[185px] h-[50px]' /></a>
                    <a href="https://ec.europa.eu/consumers/odr" ><div className='bg-cover bg-sol w-[185px] h-[50px]' /></a>
        </div>
      
        </div>
        </div>
    </div>
  )
}

export default Footer