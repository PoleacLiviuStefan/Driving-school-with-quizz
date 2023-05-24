import React from 'react'
import roadImg from './Images/roadSteps.png'
import { useNavigate } from 'react-router-dom'

const Steps = () => {
 
  const navigate=useNavigate();

  return (
    <div className='relative  flex flex-col justify-center items-center lg:py-[10rem] w-full h-full '>
         <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full text-center '>
             <h3 className='text-[20px] lg:text-[32px] font-extrabold'>PASII DE URMAT PENTRU A OBTINE PERMISUL</h3>
             <p className=' w-[80%] lg:w-[70%] text-gray-500 text-justify lg:text-center'  >Cum ar fi sa nu mai depinzi de nimeni atunci cand vrei sa te deplasezi intr-un anumit loc cu masina?
                Uite care sunt pasii pentru a face acest lucru, obtinand permisul auto:
             </p>
             <div className='relative flex text-[12px] lg:text-[15px] text-black'>
       
                 <img src={roadImg} className='relative ml-[-5rem] lg:ml-0 mt-[3rem] w-[200px] lg:w-[160px]' /> 
                 <p className='absolute top-[3rem] lg:top-[4rem] left-[3rem] lg:left-[-22rem] w-[11rem] lg:w-[20rem]  text-left'>Inscrie-te pe direct pe site la sectiunea <span className='font-extrabold text-red-500 cursor-pointer' onClick={()=>navigate("/inscrieri-online")}>INSCRIERI ONLINE</span>   sau ne poti contacta telefonic la numarul:  <span href="tel:+40755651487" className='  font-bold   cursor-pointer '> 0755 651 487   </span></p>
                 <p className='absolute top-[20rem] lg:top-[26.2rem] left-[3rem] lg:left-[12rem] w-[11rem] lg:w-[20rem]   text-justify'>Iti poti alege autoturismul si intructorul. Pentru aceasta etapa ai nevoie doar de buletin si sa treci examenele medicale pentru a putea incepe orele.  </p>
                 <p className='absolute top-[37rem] lg:top-[49rem] left-[3rem] lg:left-[-22rem] w-[11rem] lg:w-[20rem]   text-justify'>Efectueaza orele necesare de pregatire pentru a fi sigur ca reusesti sa obti permisul. </p>
                 <p className='absolute top-[53rem] lg:top-[71rem] left-[3rem] lg:left-[12rem] w-[11rem] lg:w-[20rem]   text-justify'>Ultima etapa unde trebuie sa pui in aplicare cunostintele si abilitatile pe care le-ai dobandit pe parcusul orelor de condus si legislatie pentru a trece mai intai examul teoretic, apoi traseul.</p>
             </div>
        </div>
        <div  className='flex items-center justify-center mt-[10rem] w-full px-[1rem] h-[8rem] bg-roadBg bg-opacity-[50%] bg-cover text-white text-[16px] lg:text-[24px] font-bold'>
                <h4>TE POTI INSCRIE CHIAR ACUM </h4>
                <button className='ml-2 lg:ml-[2rem] w-[12rem] lg:w-[16rem] h-[3rem] bg-transparent border-[2px] border-white text-white font-bold shadow-xl rounded-[15px] cursor-pointer transition ease-in-out  hover:bg-red-500  hover:border-red-500 duration-300'>INSCRIE-TE</button>
        </div>
    </div>
  )
}

export default Steps