import React from 'react'
import Product from './Product'
import manualCatB from '../../Images/manualCatB.png'
import {useNavigate} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'

const Products = () => {

  const navigate=useNavigate();

  return (
    <div className='flex justify-center items-center w-full h-full py-[10rem]'>
        <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full'>
        <div className='absolute top-[-1rem] left-[1rem] lg:left-0 flex items-centert text-[12px]  lg:text-[14px] text-gray-500 '>
              <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Produsele Noastre</a>
            </div>
            <h2 className='text-[26px] lg:text-[42px] font-extrabold'>PRODUSELE <span className='text-red-600'> NOASTRE</span></h2>
            <div className='mt-[3rem] flex justify-center w-full flex-wrap '>
                <Product productTitle="Manual De Legislatie Categoria B" productImage={manualCatB} productPrice="00"/>
                <Product productTitle="Manual De Legislatie Categoria B (Engleza)" productImage={manualCatB} productPrice="00"/>
                <Product productTitle="anual De Legislatie Categoria A" productImage={manualCatB} productPrice="00"/>
                <Product productTitle="Manual De Legislatie Redobandire Permis" productImage={manualCatB} productPrice="00"/>
                <Product productTitle="Gift Card Cadou" productImage={manualCatB} productPrice="00"/>
            </div>
        </div>
    </div>
  )
}

export default Products