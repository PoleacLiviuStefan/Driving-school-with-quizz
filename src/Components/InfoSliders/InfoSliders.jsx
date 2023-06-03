import React,{useState,useEffect} from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'
const InfoSliders = () => {
    const [slideLeft,setSlideLeft]=useState(0);
    useEffect(()=>{
        const interval= setTimeout(()=>{
            setSlideLeft(prev=>prev=(prev+1)%4)
        },2000)
        return ()=>clearTimeout(interval);
},[slideLeft])
  return (
    <div className='flex justify-center items-center w-screen h-[4rem] bg-black font-oswald italic font-bold text-white'>
        <div className='flex justify-center items-center w-full '>
            <div className='relative w-full '>
                <ul className={`absolute animate-[slideLeftMobile_30s_ease-in-out_forwards_infinite]  lg:animate-[slideLeft_30s_ease-in-out_forwards_infinite] px-[2rem]  flex justify-between items-center w-[365%] lg:w-[170%]  h-full text-[14px] lg:text-[18px]`}>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Cutie Automata</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Cutie Manuala</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Plata in rate</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Scoala de soferi Arad</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Instructori profesionisti</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Perfectionare</li>
                    <li className='flex'><span className='text-red-500 text-[20px] lg:text-[28px] mr-2'><BsArrowRightCircleFill /></span>Legislatie</li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default InfoSliders