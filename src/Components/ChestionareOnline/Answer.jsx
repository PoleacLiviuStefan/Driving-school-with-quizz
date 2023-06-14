import React, { useState } from 'react'

const Answer = ({answerOption}) => {

    const [selected,setSelected]=useState(false);

  return (
    <div onClick={()=>{if(selected) 
      setSelected(false) 
      else 
    setSelected(true)}} className='relative flex bg-white shadow-lg w-[90%] lg:w-[25rem] h-[7rem] rounded-[15px] my-[2rem] cursor-pointer'>
          <div className={`flex items-center justify-center w-[30%] h-full flex flex-col bg-gray-300 font-bold text-[48px] rounded-l-[15px] ${selected && "bg-red-400"}`}>{answerOption[0]}</div>
          <div className={`flex items-center justify-start w-[70%] text-[28px] px-[2rem] rounded-r-[15px] ${selected && "bg-red-300"}`}>{answerOption[1]}</div>      
    </div>
  )
}

export default Answer