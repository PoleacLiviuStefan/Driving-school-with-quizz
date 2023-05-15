import React from 'react'

const Product = ({productTitle,productImage,productPrice}) => {
  return (
    <div className='relative flex flex-col m-[1rem] items-center w-[17rem] h-[29rem]  shadow-xl rounded-[15px] p-[.5rem] py-[1rem] bg-[#f9f9f9]'>
            <img src={productImage} className='h-[20rem]'/>
            <h3 className='mt-[.5rem] px-[.3rem] text-[18px]  lg:text-[22px] font-bold text-gray-600 text-center'>{productTitle}</h3>
            <h4 className='absolute bottom-[1rem] text-[28px] text-red-600 font-bold  '>{productPrice}<span className='italic text-[24px]'> Lei</span></h4>
    </div>
  )
}

export default Product