import React,{useEffect, useState} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import BenefitsCard from "./BenefitsCard";
import {TbSteeringWheel} from 'react-icons/tb';
import {FaMotorcycle} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import Fade from 'react-reveal'
const Hero = () => {
    const [currentCard,setCurrentCard] = useState(0);
    
    const navigate=useNavigate();

    useEffect(()=>{
            const interval= setTimeout(()=>{
                if(currentCard<2)
                    setCurrentCard(prev=>prev+1)
                else
                    setCurrentCard(0);
            },6000)
            return ()=>clearTimeout(interval);
    },[currentCard])
  return (
    <div className="relative left-0 top-0 text-white">
      <div className="bg-bgHero bg-cover bg-left lg:bg-center w-screen h-[40rem]">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black/60 from-[35%] to-transparent   w-full h-full ">
          <h2 className="flex flex-col z-30 text-center font-extrabold text-[22px] lg:text-[42px] mt-[-17rem] leading-[1.6rem] lg:leading-[3.6rem]">
            SCOALA DE SOFERI{" "}
            <span className="text-[#DC2626] text-[26px] lg:text-[56px]"> AUTO-MOTO POPTEAN </span>
          </h2>
          <div className="custom-shape-divider-top-1683904231">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="absolute block z-30 flex flex-col items-center lg:items-start lg:flex-row w-[90%] lg:w-[35rem] justify-between mt-[-3rem]">
            <button onClick={()=>{navigate("/contact");window.scrollTo({top:0,left:0})}} className="flex  justify-center items-center text-[14px] lg:text-[16px] font-bold  rounded-[25px]  bg-black    w-[16rem] h-[3rem] transition ease-in-out 
            hover:text-black hover:bg-white hover:shadow-xl duration-300">
              {" "}
              CONTACT{" "}
              <span className="ml-2 text-[20px]">
                <AiOutlineArrowRight />
              </span>
            </button>
            <button onClick={()=>{navigate("/inscrieri-online");window.scrollTo({top:0,left:0})}} className=" mt-[1rem] lg:mt-0 text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-white w-[15rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]">
              {" "}
              INSCRIE-TE
            </button>
          </div>
          <div className="absolute flex flex-col lg:flex-row  items-center lg:items-start justify-between w-[90%] lg:w-[55rem] bottom-[-50rem] lg:bottom-[-8rem] z-20 ">
          <BenefitsCard
            titleCard="OBTINE PERMISUL"
            descriptionCard="Te-ai hotarat sa dai de permis? Suntem o echipa de instructori care te putem ajuta sa iti indeplinesti dorinta de a obtine permisul auto atat pentru categoria A cat si pentru categoria B"
            iconCard={<BsFillPersonVcardFill /> }
            selected={currentCard===0 ? true : false}
            navigateTo="http://localhost:5173/servicii/obtine-permisul"
          />
         <BenefitsCard
            titleCard="CURS DE CONDUCERE DEFENSIVA"
            descriptionCard="Te-ai gandit vreodata ca ai putea fi pus intr-o situatie periculoasa atunci cand cand conduci vehiculul? Haide sa inveti cum sa eviti aceste evenimente prin cursurile noastre"
            iconCard={<TbSteeringWheel />}
            selected={currentCard===1 ? true : false}
            navigateTo="/servicii/conducere-defensiva"
          />
           <BenefitsCard
            titleCard="CURS MOTO PENTRU PERFECTIONARE "
            descriptionCard="Vrei sa iti perfectionezi abilitatea de a conduce motoicleta proprie? Te putem ajuta sa iti dezvolti aceasta abilitate si de a capata mai multa incredere"
            iconCard={<FaMotorcycle />}
            selected={currentCard===2 ? true : false}
            navigateTo="/servicii/perfectionare-moto"
          />
        </div>
        </div>
        <div className="custom-shape-divider-bottom-1683908117">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
   
      </div>
    </div>
  );
};

export default Hero;
