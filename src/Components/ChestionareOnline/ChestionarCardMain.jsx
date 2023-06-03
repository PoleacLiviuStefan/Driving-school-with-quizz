import React from 'react'

const ChestionarCardMain = ({categorie,categorieLogo}) => {
  return (
    <div className='flex flex-col items-center py-[2rem] border-red-600 border-[2px] text-black w-[160px] h-[200px]  mx-[2rem] rounded-[15px] shadow-xl'>
      <img src={categorieLogo} className='h-[70px]' />
      <h4 className='mt-[2rem] lg:text-[20px] font-extrabold'>{categorie}</h4>
    </div>
  )
}

export default ChestionarCardMain