import React from 'react'

const NewsMain = () => {
  return (
    <div className='relative mt-[45rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
      <div className='flex flex-wrap justify-center lg:grid lg:grid-cols-3 w-full lg:w-[65rem] h-full '>
          <h4 className='flex items-center text-center w-full    text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> Noutati</h4>
          <h3 className='text-[20px] lg:text-[32px] font-extrabold text-center lg:text-left'>AFLA CE S-A MAI INTAMPLAT NOU</h3>
      </div>
    </div>
  )
}

export default NewsMain