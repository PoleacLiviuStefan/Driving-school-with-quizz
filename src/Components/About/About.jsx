import React from 'react';
import {AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'
import aboutLeft from '../../Images/aboutLeft.png';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate=useNavigate();
  return (
    <div name="About" className='relative mt-[45rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
        <div className='flex flex-col lg:flex-row items-center  lg:items-start justify-between w-full lg:w-[65rem] h-full '>
            <div className='flex justify-end mt-[4rem]'>
                <img src={aboutLeft} className='w-[400px] lg:w-[550px]'/>
            </div>
            <div className='mt-[2rem] lg:mt-0 flex flex-col items-center lg:items-start w-[90%] lg:w-[30rem] lg:ml-[2rem]'>
      
            <h3 className='flex items-center w-full text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> Despre Noi</h3>
            <h1 className='text-[20px] lg:text-[32px] font-extrabold text-left'>SCOALA DE SOFERI<span className='text-red-600'> ARAD</span></h1>
            <p className='mt-[1rem] w-[90%] text-[13px] lg:text-[15px]'>
            Scoala de soferi <span className='font-bold'>AUTO-MOTO POPTEAN</span> suntem cei cu care doresti sa pornesti la drum si ne bucuram sa putem impartasi din experienta noastra viitorilor conducatori auto-moto.</p><p className='mt-[.5rem] w-[90%] text-[13px] lg:text-[15px]'> Prin echipa noastra bine pregatita, oferim servicii de inalta calitatea cursantilor nostri.
Prin serviciile de calitate pe care le oferim, avem un rol esential in pregatirea noilor generatii de conducatori.
</p><p className='mt-[.5rem] w-[90%] text-[13px] lg:text-[15px]'>
 Rol care ne obliga la formarea unor viitori conducatori auto-moto capabili sa faca fata oricaror provocari in traficul rutier.

            </p>
            <div className='mt-[1rem] flex items-center'>
              <button onClick={()=>{navigate("/inscrieri-online");window.scrollTo({top:0,left:0})}}  className="btn2 w-[12rem] lg:w-[16rem] h-[3rem] rounded-[15px] relative border border-red-500 bg-red-500 font-semibold tracking-wider leading-none overflow-hidden trasition ease-in-out duration-300 text-white cursor-pointer"
       
        >
          <span className="absolute inset-0 bg-red-600 trasition ease-in-out duration-300"  ></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            INSCRIE-TE
          </span>
            INSCRIE-TE</button>
              <a href="https://www.instagram.com/scoalaauto_motopoptean/" className='ml-[1rem] text-[28px] bg-red-500 text-white p-[.7rem] rounded-[50%]  cursor-pointer shadow-lg  hover:bg-red-600'><AiOutlineInstagram /></a>
              <a href="https://www.facebook.com/instructor.auto.moto.arad/" className='ml-[1rem] text-[28px] bg-red-500 text-white p-[.7rem] rounded-[50%] cursor-pointer shadow-lg hover:bg-red-600'><AiOutlineFacebook /></a>
            </div>
            </div>
  
       


        </div>

    </div>
  )
}

export default About