import React from 'react'
import roadImg from './Images/roadSteps.png'
const Steps = () => {
  return (
    <div className='relative  flex flex-col justify-center items-center py-[10rem] w-full h-full '>
         <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full text-center '>
             <h3 className='text-[20px] lg:text-[32px] font-extrabold'>PASII DE URMAT PENTRU A OBTINE PERMISUL</h3>
             <p className='mt-[2rem] w-[80%] lg:w-[70%] text-gray-500 text-justify lg:text-center'  >Cum ar fi sa nu mai depinzi de nimeni atunci cand vrei sa te deplasezi intr-un anumit loc cu masina?
                Uite care sunt pasii pentru a face acest lucru, obtinand permisul auto:
             </p>
             <div className='relative flex'>
       
                 <img src={roadImg} className='absolute lg:relative  mt-[3rem] w-[120px] lg:w-[160px]' /> 
                 <p className='absolute top-[4rem] left-[-22rem] w-[20rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum veniam nesciunt ab harum deserunt explicabo animi aliquam voluptatem, dicta rem exercitationem cupiditate, quos fugiat. Quidem, aliquid placeat. Itaque, perferendis!</p>
                 <p className='absolute top-[26.2rem] left-[12rem] w-[20rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum veniam nesciunt ab harum deserunt explicabo animi aliquam voluptatem, dicta rem exercitationem cupiditate, quos fugiat. Quidem, aliquid placeat. Itaque, perferendis!</p>
                 <p className='absolute top-[49rem] left-[-22rem] w-[20rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum veniam nesciunt ab harum deserunt explicabo animi aliquam voluptatem, dicta rem exercitationem cupiditate, quos fugiat. Quidem, aliquid placeat. Itaque, perferendis!</p>
                 <p className='absolute top-[70.8rem] left-[12rem] w-[20rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum veniam nesciunt ab harum deserunt explicabo animi aliquam voluptatem, dicta rem exercitationem cupiditate, quos fugiat. Quidem, aliquid placeat. Itaque, perferendis!</p>
             </div>
        </div>
        <div  className='flex items-center justify-center mt-[10rem] w-full h-[8rem] bg-roadBg bg-opacity-[50%] bg-cover text-white text-[24px] font-bold'>
                <h4>TE POTI INSCRIE CHIAR ACUM </h4>
                <button className='ml-[2rem] w-[12rem] lg:w-[16rem] h-[3rem] bg-red-500 text-white font-bold shadow-xl rounded-[15px] cursor-pointer transition ease-in-out    hover:text-red-500 duration-300'>INSCRIE-TE</button>
        </div>
    </div>
  )
}

export default Steps