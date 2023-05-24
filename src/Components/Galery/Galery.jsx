import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'

const Galery = () => {
    const navigate=useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-full py-[10rem]">
        <div className="relative flex flex-col items-center w-full lg:w-[65rem] h-full ">
            <div className='absolute top-[-1rem] left-[1rem] lg:left-0 flex items-centert text-[12px]  lg:text-[14px] text-gray-500 '>
                <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
                <span className='mx-[1rem] '><AiOutlineRight /></span>
                <a className='cursor-pointer'>Galerie</a>
                </div>
                <h2 className='text-[26px] lg:text-[42px] font-extrabold text-center'>VIZUALIZEAZA O PARTE DIN <br/>  <span className='text-red-600'>IMAGINILE NOASTRE</span></h2>
                
        </div>
    </div>
  )
}

export default Galery