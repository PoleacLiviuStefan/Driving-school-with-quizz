import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import masina1 from '../../Images/masina1.jpg'
import masina2 from '../../Images/masina2.jpg'
import masina3 from '../../Images/masina3.jpg'
import masina4 from '../../Images/masina4.jpg'
import masina5 from '../../Images/masina5.jpg'
import scuter from '../../Images/scuter.jpg'
import moto1 from'../../Images/moto1.jpg'
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
                <div className='flex flex-col  lg:flex-row flex-wrap justify-between '>
                <img src={masina1} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <img src={scuter} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <img src={moto1} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <img src={masina2} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <img src={masina3} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <div>
            <img src={masina4} className='w-[300px]  m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            <img src={masina5} className='w-[300px] m-[1rem] border-[3px] rounded-[8px] border-red-500' />
            </div>
                  </div>
        </div>
    </div>
  )
}

export default Galery