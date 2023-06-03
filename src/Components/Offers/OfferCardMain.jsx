import React from 'react'
import {useNavigate} from 'react-router-dom'

const OfferCardMain = ({offerTitle,reducere,offerImage}) => {
  const navigate=useNavigate();
  return (
    <div className='relative flex flex-col items-center relative bg-white shadow-xl w-[280px] lg:w-[400px] h-[400px] lg:h-[500px] my-[1rem]  lg:m-[1.5rem] '>
        <img src={offerImage} className='w-full' />
        <div className='absolute saleTicket flex justify-center items-center w-[15rem] h-[6rem]  left-[-2.5rem] top-0 bg-red-500 text-white font-extrabold text-[20px]'>
           <h6 className='ml-8 mt-[-2.2rem]'>{reducere}</h6>

        </div>
        {offerTitle} 
        <button onClick={()=>{navigate("/inscrieri-online");window.scrollTo({top:0,left:0})}}  className="absolute bottom-[2rem] btn2 w-[90%] lg:w-[16rem] h-[3rem] rounded-[15px]  border border-red-500 bg-red-500 font-semibold tracking-wider leading-none overflow-hidden trasition ease-in-out duration-300 text-white cursor-pointer"
       
        >
          <span className="absolute inset-0 bg-red-600 trasition ease-in-out duration-300"  ></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            INSCRIE-TE ACUM
          </span>
            INSCRIE-TE ACUM</button>
    </div>
  )
}

export default OfferCardMain