import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Fade from 'react-reveal'

const GaleryMain = () => {
  const navigate=useNavigate();
  return (
    <div className='relative mt-[0rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
      <Fade top>
        <div className='flex flex-col  items-center  lg:items-start justify-between w-[90%] lg:w-[65rem] h-full '>
          <h4 className='flex items-center text-center w-full    text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> Galerie</h4>
          <h3 className='text-[20px] lg:text-[32px] font-extrabold text-center lg:text-left'>CATEVA DIN POZELE NOASTRE</h3>
          
          
        </div>
      </Fade>
      <Fade bottom>        
      <button onClick={()=>{navigate("/galerie");window.scrollTo({top:0,left:0})}} className=" flex justify-center items-center mt-[2rem] text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-black w-[15rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0px_0px_26px_-5px_#DC2626]">Vezi mai multe<span className='ml-2 text-[20px]'><AiOutlineArrowRight /></span></button>
      </Fade>

    </div>
  )
}

export default GaleryMain