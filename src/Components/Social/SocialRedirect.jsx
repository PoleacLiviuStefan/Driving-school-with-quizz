import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GiClick} from 'react-icons/gi'


const SocialRedirect = () => {
  return (
    <div className='flex flex-col items-center w-full text-center'>
            <span className='text-red-500 text-[28px] text-[52px] lg:text-[64px]'><AiOutlineInstagram /></span>
            <p className='mt-[.5rem] font-bold'>NU UITA CA NE POTI URMARI SI PE PLATFORMELE DE SOCIALIZARE</p>
            <h2 className='mt-[.5rem] font-[700] text-[28px]'> SCOALA AUTO-MOTO POPTEAN</h2>
            <a target="_blank" href="https://www.instagram.com/scoalaauto_motopoptean/" className='flex items-center mt-[2rem] bg-red-500 rounded-[8px] py-[.5rem] px-[1rem] font-[600] text-white cursor-pointer transition ease-in-out     hover:bg-red-600 duration-300'><span className='mr-2 text-[24px]'><GiClick /></span>Urmareste-ne pe Instagram</a>
    </div>
  )
}

export default SocialRedirect