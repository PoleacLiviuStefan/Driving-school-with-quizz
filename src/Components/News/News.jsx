import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
const News = () => {

  const navigate=useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full ">
    <div className="relative flex flex-col items-center w-full lg:w-[65rem] h-full ">
    <div className="relative   bg-bgNews bg-cover bg-center  w-screen h-[32rem] ">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[50%] w-full h-full ">
            <div className="relative mb-4 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
            <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Noutati</a>
            </div>

   
            <h2 className='text-[26px] lg:text-[42px] font-extrabold text-white'><span className='text-red-600'> NOUTATILE</span></h2>
            <p className='text-white font-bold lg:text-[20px]'>AFLA CEEA CE SE MAI INTAMPLA NOU</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News