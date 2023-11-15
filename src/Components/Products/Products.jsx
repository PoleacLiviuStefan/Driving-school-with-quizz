import React from 'react'
import Product from './Product'
import manualCatA from '../../Images/manualCatA.jpg'
import manualCatB from '../../Images/manualCatB.png'
import manualCatBEngleza from '../../Images/manualCatBEngleza.png'
import manualCatBRedobandire from '../../Images/manualCatBRedobandire.jpg'
import voucherReducere from '../../Images/voucher.jpg'
import {useNavigate} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'

const Products = () => {

  const navigate=useNavigate();

  return (
    <div className='flex justify-center items-center w-full h-full '>
        <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full'>
        <div className="relative   bg-bgProducts bg-cover bg-center  w-screen h-[32rem] ">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[60%] w-full h-full ">
            <div className="relative mb-4 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
            <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Produsele Noastre</a>
            </div>

            <h2 className='text-[26px] lg:text-[42px] font-extrabold text-white'>PRODUSELE <span className='text-red-600'> NOASTRE</span></h2>
            <p className='text-white text-center font-bold lg:text-[24px] w-[90%] '>AICI GASESTI PRODUSELE PE CARE LE POTI CUMPARA DE LA NOI</p>
          </div>

        </div>


            <div className='mt-[3rem] flex justify-center w-full flex-wrap py-[5rem]'>
                <Product productTitle="Manual De Legislatie Categoria B" productImage={manualCatB} productPrice="21.99"/>
                <Product productTitle="Manual De Legislatie Categoria B (Engleza)" productImage={manualCatBEngleza} productPrice="50"/>
                <Product productTitle="Manual De Legislatie Categoria A" productImage={manualCatA} productPrice="26.99"/>
                <Product productTitle="Manual De Legislatie Redobandire Permis" productImage={manualCatBRedobandire} productPrice="30"/>
                <Product productTitle="Voucher De Reducere Cadou" productImage={voucherReducere} productPrice="500"/>
            </div>
        </div>
    </div>
  )
}

export default Products