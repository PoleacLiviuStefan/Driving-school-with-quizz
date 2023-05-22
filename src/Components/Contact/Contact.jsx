import React from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full w-full py-[10rem]'>
    <div className='flex flex-col items-center w-full lg:w-[65rem] h-full '>
        <h2 className='text-[26px] lg:text-[42px] font-extrabold'>CONTACT</h2>
        <p>Poti alege una din metodele de mai jos pentru a ne contacta</p>
        <div className='flex lg:flex-row flex-col'>
            <span className='text-red-500'><AiOutlinePhone /></span>    
        </div>
    </div>
</div>
  )
}

export default Contact