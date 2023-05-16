import React from 'react';

import aboutLeft from '../../Images/aboutLeft.png';

const About = () => {
  return (
    <div className='relative mt-[45rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
        <div className='flex flex-col lg:flex-row items-center  lg:items-start justify-between w-full lg:w-[65rem] h-full '>
            <div className='flex justify-end mt-[4rem]'>
                <img src={aboutLeft} className='w-[4  00px] lg:w-[550px]'/>
            </div>
            <div className='flex flex-col items-start w-[90%] lg:w-[30rem] lg:ml-[2rem]'>
      
            <h3 className='flex items-center text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> Despre Noi</h3>
            <h1 className='text-[20px] lg:text-[32px] font-extrabold text-left'>SCOALA DE SOFERI<span className='text-red-600'> ARAD</span></h1>
            <p className='mt-[1rem] w-[90%] text-[13px] lg:text-[15px]'>
            Scoala de soferi <span className='font-bold'>AUTO-MOTO POPTEAN</span> suntem cei cu care doresti sa pornesti la drum si ne bucuram sa putem impartasi din experienta noastra viitorilor conducatori auto-moto.</p><p className='mt-[.5rem] w-[90%] text-[13px] lg:text-[15px]'> Prin echipa noastra bine pregatita, oferim servicii de inalta calitatea cursantilor nostri.
Prin serviciile de calitate pe care le oferim, avem un rol esential in pregatirea noilor generatii de conducatori.
</p><p className='mt-[.5rem] w-[90%] text-[13px] lg:text-[15px]'>
 Rol care ne obliga la formarea unor viitori conducatori auto-moto capabili sa faca fata oricaror provocari in traficul rutier.

            </p>
            <button className='mt-[1rem] w-[12rem] lg:w-[16rem] h-[3rem] bg-red-500 text-white font-bold shadow-xl rounded-[15px]'>INSCRIE-TE</button>
            </div>
  
       


        </div>

    </div>
  )
}

export default About