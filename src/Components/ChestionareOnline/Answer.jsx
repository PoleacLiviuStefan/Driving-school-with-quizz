import React, { useState } from 'react'

const Answer = ({answerOption}) => {

    const [selected,setSelected]=useState(false);

  return (
    <div onClick={()=>{if(selected) 
      setSelected(false) 
      else 
    setSelected(true)}} className='relative flex bg-white shadow-lg w-[20rem] lg:w-[30rem] h-[9rem] rounded-[15px]  cursor-pointer'>
          <div className={`flex items-center justify-center w-[20%] lg:w-[30%] h-full flex flex-col bg-gray-300 font-bold text-[28px] lg:text-[48px] rounded-l-[15px] ${selected && "bg-red-400"}`}>{answerOption[0]}</div>
          <div className={`flex items-center justify-start w-[90%] lg:w-[70%] text-[14px] lg:text-[16px] px-[1rem] rounded-r-[15px] ${selected && "bg-red-300"}`}>{answerOption[1]}</div>      
    </div>
  )
}

export default Answer