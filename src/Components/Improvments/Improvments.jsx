import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Fade from 'react-reveal'
import { useNavigate } from 'react-router-dom';


const Improvments = () => {
  const navigate= useNavigate();
  return (
    <div className='relative mt-[0rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
        <Fade bottom>
          <div className='flex flex-col  items-center  lg:items-start justify-between w-[90%] lg:w-[65rem] h-full '>
          <h4 className='flex items-center text-center w-full    text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> PERFECTIONARE</h4>
          <h3 className='text-[20px] lg:text-[32px] font-extrabold text-center lg:text-left'>CUM TE POTI PERFECTIONA CU AJUTORUL NOSTRU</h3>
          <h4  className='text-center'>Te-ai gandit sa iti imbunatatesti aptitudinile de a conduce?</h4>
          <p className='mt-[1rem]'>Daca iti doresti sa fii pur si simplu mai sigur in trafic atat pentru tine cat si pentru cei din jur, noi iti oferim posibilitatea de a face acest pas prin cursurile pe care le oferim.</p>
          </div>
        </Fade>
        
        <div className='flex flex-col lg:flex-row  lg:w-[40rem] justify-between'>
          <Fade left>
            <button  onClick={()=>{navigate("/servicii/perfectionare-moto");window.scrollTo({top:0,left:0})}} className=" flex justify-center items-center mt-[1rem] lg:mt-[2rem] text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-black w-[18rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0px_0px_26px_-5px_#DC2626]">CURS PERFECTIONARE MOTO<span className='ml-2 text-[20px]'><AiOutlineArrowRight /></span></button>
          </Fade>
          <Fade right>
            <button  onClick={()=>{navigate("/servicii/conducere-defensiva");window.scrollTo({top:0,left:0})}} className=" flex justify-center items-center mt-[1rem] lg:mt-[2rem] text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-black w-[18rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0px_0px_26px_-5px_#DC2626]">CURS CONDUCERE DEFENSIVA<span className='ml-2 text-[20px]'><AiOutlineArrowRight /></span></button>
          </Fade>
        </div>
        
    </div>
  )
}

export default Improvments