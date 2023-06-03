import React from 'react'
import {GiAlarmClock} from 'react-icons/gi'
import { AiOutlinePhone } from 'react-icons/ai'
import {BiMapPin} from 'react-icons/bi'

const ContactInfo = () => {
  return (
    <div className='hidden absolute lg:flex justify-center items-center  top-0 bg-white z-40 w-screen h-[2.5rem] text-black font-lexend font-bold'>
        <div className='flex justify-between items-center w-[80%] text-[16px]'>
            <h6 className='flex items-center cursor-pointer'><span className='mr-1 text-[24px] text-red-600'><GiAlarmClock /></span> Luni-Vineri: 9:00-13:00</h6>
            <a className='flex items-center cursor-pointer'><span className='mr-1 text-[24px] text-red-600'><BiMapPin /></span>Calea Radnei, nr 99/A , Arad </a>
            <a href="tel:+40755651487" className='flex items-center   font-bold  cursor-pointer '><span className=' text-red-600 mr-1 text-[24px]'><AiOutlinePhone /></span> 0755 651 487   </a>
        </div>
    </div>
  )
}

export default ContactInfo