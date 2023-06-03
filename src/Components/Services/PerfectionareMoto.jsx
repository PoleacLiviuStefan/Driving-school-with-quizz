import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import PriceCard from "./PriceCard";
import { CiTimer } from "react-icons/ci";

const PerfectionareMoto = () => {

    const navigate=useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full ">
        <div className="relative flex flex-col items-center w-full lg:w-[65rem] h-full ">
        <div className='relative flex flex-col justify-center items-center top-0 bg-bgHero bg-cover bg-left lg:bg-center w-screen h-[30rem]'>
            <div className='flex flex-col justify-center items-center absolute w-full h-full left-0 top-0 bg-black bg-opacity-[40%]'>

                  <div className="relative z-30 top-[-1rem]  lg:left-0 flex items-start lg:items-center text-[12px] lg:text-[14px] text-white ">
                <a
                  onClick={() => {
                    navigate("/");
                  }}
                  className="cursor-pointer"
                >
                  Scoala Auto-Moto POPTEAN
                </a>
                <span className="mx-[1rem] ">
                  <AiOutlineRight />
                </span>
                <a className="cursor-pointer">Perfectionare Moto</a>
              </div>
              <div className="flex flex-col items-center">
              <h2 className="text-[26px]  lg:text-[42px] text-center font-extrabold leading-[1.7rem] lg:leading-[4rem] text-white ">
                    PERFECTIONARE{" "}
                <span className="text-red-600">MOTO</span>{" "}
              </h2>
                <p className='mt-[.5rem] lg:mt-0 text-center lg:text-[20px] font-bold text-gray-100'>CUM SA ITI IMBUNATATESTI ABILITATILE DE A CONDUCE</p>
            </div>
          </div>
        </div>
  
       
         
         
         
          <div className="flex flex-col px-[1rem] mt-[4rem] lg:px-0 lg:ml-[3rem] w-full lg:w-[65rem]    leading-[1.1rem] lg:leading-[1.3rem]  ">
              <h3 className=' text-[16px] lg:text-[24px] font-bold'>Curs MOTO pentru perfectionare durata 2 zile</h3>
              <p className='flex mt-[.5rem] lg:mt-[1rem]'> <span className="mr-2">
                  <GiCarWheel />
                </span>Un curs destinat motociclistilor de toate varstele, in care se vor aprofunda notiunile teoretice si practice, vom perfectiona stilul de conducere astfel incat sa reducem la minim situatiile extreme in care poti fi pus in traficul urban. Este un curs care poate ajuta pe cei care se deplaseaza pentru livrari rapide. 

              </p>
              
       
          </div>
          <div className='mt-[3rem] flex flex-wrap justify-center'>
            <PriceCard
              durationCard="30"
              titleCard="Conducere Defensiva Nivelul 1
              "
              benefitsCard={    <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
          
            <li className="my-[.5rem] flex justify-center items-center h-[3rem] w-full border-b-[1px] border-b-gray-300  px-[1rem]"> <span className="mr-4 text-[24px]"><CiTimer /> </span> 30 ORE PRACTICE</li>
            <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]" >PLATA IN RATE</li>
            <li className="my-[.5rem] flex justify-center items-center w-full h-[3rem]  border-b-[1px] border-b-gray-300  px-[1rem]" >DURATA MINIMA: 6 SAPTAMANI</li>
          </ul>}
              priceCard="1000"
            />
           
          </div>
        </div>
    </div>
  )
}

export default PerfectionareMoto