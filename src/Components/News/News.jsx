import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
const News = () => {

  const navigate=useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full py-[10rem]">
    <div className="relative flex flex-col items-center w-full lg:w-[65rem] h-full ">
      <div className="absolute top-[-1rem] left-[1rem] lg:left-0 flex items-start lg:items-center text-[12px] lg:text-[14px] text-gray-500 ">
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
        <a className="cursor-pointer">Obtine Permisul</a>
      </div>
      <div className="flex flex-col items-center">
          <h2 className="text-[26px] w-[90%] lg:w-full  lg:text-[42px] text-center font-extrabold leading-[1.7rem] lg:leading-[4rem]">
            TE AJUTAM SA OBTII{" "}
            <span className="text-red-600">PERMISUL AUTO</span>{" "}
          </h2>
          <h3 className=" lg:text-[24px] font-bold text-gray-500 text-center">
            CATEGORII PERMIS DE CONDUCERE
          </h3>
        </div>
      </div>
    </div>
  )
}

export default News