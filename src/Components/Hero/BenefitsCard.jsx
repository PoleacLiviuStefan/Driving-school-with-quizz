import React from 'react'
import { useNavigate } from 'react-router-dom'
const BenefitsCard = ({titleCard,descriptionCard,iconCard,selected,navigateTo}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>{navigate(navigateTo)}} className={`flex flex-col py-[2rem] my-[1rem] lg:my-0 items-center w-[15rem] lg:w-[17rem] h-[18.5rem] lg:h-[21rem]  shadow-xl  rounded-[15px] ${selected ? "scale-[1.05] bg-red-600 text-white " :"bg-white text-black"} cursor-pointer`} >
            <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[50%] text-[42px] ${selected ? "bg-white text-red-600":"bg-red-600 text-white" }`}>{iconCard}</div>
            <h2 className='font-extrabold  lg:text-[16px] mt-[1rem] text-center px-[.2rem]'>{titleCard}</h2>
            <p className='w-[80%] text-justify text-[12px] lg:text-[14px] mt-[.3rem]'>{descriptionCard}</p>

    </div>
  )
}

export default BenefitsCard