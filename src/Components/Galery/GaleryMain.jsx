import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Fade from 'react-reveal'
import masina1 from '../../Images/masina1.jpg'

import scuter from '../../Images/scuter.jpg'
import moto1 from'../../Images/moto1.jpg'
const GaleryMain = () => {
  const navigate=useNavigate();
  return (
    <div className='relative mt-[5rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[5rem] w-full h-full '>
      <Fade >
        <div className='flex flex-col  items-center  lg:items-start justify-between w-[90%] lg:w-[65rem] h-full '>
          <h4 className='flex items-center text-center w-full    text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> GALERIE</h4>
          <h3 className='text-[20px] lg:text-[32px] font-extrabold text-center lg:text-left'>CATEVA DIN POZELE NOASTRE</h3>
          <div className='flex flex-col  lg:flex-row justify-between '>
            <img src={masina1} className='w-[300px] my-[1rem] lg:my-0 lg:mx-[1rem] border-[1px] rounded-[8px] border-red-500' />
            <img src={scuter} className='w-[300px] my-[1rem] lg:my-0 lg:mx-[1rem] border-[1px] rounded-[8px] border-red-500' />
            <img src={moto1} className='w-[300px] my-[1rem] lg:my-0 lg:mx-[1rem] border-[1px] rounded-[8px] border-red-500' />
          </div>
          
        </div>
      </Fade>
      <Fade bottom>        
      <button onClick={()=>{navigate("/galerie");window.scrollTo({top:0,left:0})}} className=" flex justify-center items-center mt-[2rem] text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-black w-[15rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0px_0px_26px_-5px_#DC2626]">Vezi mai multe<span className='ml-2 text-[20px]'><AiOutlineArrowRight /></span></button>
      </Fade>

    </div>
  )
}

export default GaleryMain