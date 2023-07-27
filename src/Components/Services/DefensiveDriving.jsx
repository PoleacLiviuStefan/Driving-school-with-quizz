import React from 'react'
import {useNavigate} from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { GiCarWheel } from "react-icons/gi";
import PriceCard from './PriceCard';

const DefensiveDriving = () => {
    const navigate= useNavigate();
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
                <a className="cursor-pointer">Conducere Defensiva</a>
              </div>
              <div className="flex flex-col items-center">
              <h2 className="text-[26px]  lg:text-[42px] text-center font-extrabold leading-[1.7rem] lg:leading-[4rem] text-white ">
                    CONDUCERE{" "}
                <span className="text-red-600">DEFENSIVA</span>{" "}
              </h2>
                <p className='mt-[.5rem] lg:mt-0 text-center lg:text-[20px] font-bold text-gray-100'>INVATA CUM POTI AVEA O SIGURANTA MAI MARE IN TRAFIC</p>
            </div>
          </div>
        </div>
  
       
         
         
         
          <div className="flex flex-col px-[1rem] mt-[4rem] lg:px-0 lg:ml-[3rem] w-full lg:w-[65rem]    leading-[1.1rem] lg:leading-[1.3rem]  ">
              <h3 className=' text-[16px] lg:text-[24px] font-bold'>Cursuri conducere Defensiva nivelul 1 </h3>
              <p className='flex mt-[.5rem] lg:mt-[1rem]'> <span className="mr-2">
                  <GiCarWheel />
                </span>Scopul acestui curs este de a preveni accidentele rutiere si de a oferi un suport teoretic dar si practic tuturor soferilor indiferent de varsta si experienta. Prin conduita preventiva putem evita multe neplaceri in traficul rutier si astfel ne putem bucura de placerea de a conduce in siguranta.
              </p>
              <h3 className='mt-[2rem] text-[16px] lg:text-[24px] font-bold'>Cursuri conducere Defensiva nivelul 2 </h3>
              <p className='flex mt-[.5rem] lg:mt-[1rem]'> <span className="mr-2">
                  <GiCarWheel />
                </span>	Acest curs vine in sprijinul celor care au parcurs conducere defensiva nivelul 1. In acest curs soferii se vor intalnii cu situatii de derapaj, franare de urgenta la diferite viteze, franare de urgenta cu evitare, evitarea obstacolelor. 
              </p>
       
          </div>
          <h2 className="mt-[5rem] text-[26px] text-center lg:text-left lg:text-[36px] font-extrabold">
          TARIFE CURSURI CONDUCERE DEFENSIVA
        </h2>
          <div className='mt-[1rem] flex flex-wrap justify-center mb-[5rem]'>
            <PriceCard
              durationCard="30"
              titleCard="Conducere Defensiva Nivelul 1
              "
              benefitsCard={    <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
          
          
          </ul>}
              priceCard="800"
              customHeight={true}
            />
                <PriceCard
              durationCard="30"
              titleCard="Conducere Defensiva Nivelul 2
              "
              benefitsCard={    <ul className="relative flex flex-col items-center lg:text-[18px]  top-[4rem] w-full h-[40rem] ">
          
    
          </ul>}
              priceCard="800"
              customHeight={true}
            />
          </div>
        </div>
    </div>
  )
}

export default DefensiveDriving;