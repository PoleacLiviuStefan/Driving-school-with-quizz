import React from "react";
import {CiTimer} from 'react-icons/ci'
const PriceCard = ({ durationCard,titleCard, benefitsCard, priceCard }) => {
  return (
    <div className="relative m-[1.5rem] flex flex-col items-center  w-[20rem] h-[39rem] bg-white shadow-lg overflow-hidden">
      <h3 className="flex flex-col justify-center items-center w-full h-[9.1rem] bg-[#ff0000] text-white text-[18px] lg:text-[24px] font-bold text-center">
        {titleCard}
    
        <span className="font-extrabold text-[22px] lg:text-[32px]">{priceCard} LEI</span>
      </h3>
      <div class="custom-shape-divider-top-1683994501">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
  {benefitsCard}
      
    </div>
  );
};

export default PriceCard;
