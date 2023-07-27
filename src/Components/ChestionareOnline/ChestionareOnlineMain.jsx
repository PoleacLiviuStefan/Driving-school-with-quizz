import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import ChestionarCardMain from './ChestionarCardMain';
import NumberCounter from './NumberCounter';
import bike from './Icons/bike.png';
import car from './Icons/car.png';
import Fade from 'react-reveal/Fade'
const ChestionareOnlineMain = () => {

    const navigate=useNavigate();

  return (
    <div className='relative mt-[0rem] lg:mt-[10rem] flex flex-col justify-center items-center py-[10rem] w-full h-full '>
    <div className='flex flex-col  items-center  lg:items-start justify-between w-[90%] lg:w-[65rem] h-full '>
    <Fade>
      <h4 className='flex items-center text-center w-full    text-red-600 text-[13px] lg:text-[15px] font-extrabold italic'><span className='h-[2px] w-[4rem] bg-red-600 mr-2  ' /> CHESTIONARE ONLINE</h4>
      <h3 className='text-[20px] lg:text-[32px] font-extrabold text-center lg:text-left'>COMPLETEAZA CHESTIONARE DIRECT PE PLATFORMA</h3>
      <h4  className='text-center'>Iti oferim posibilitatea de a te autoevalua direct din platforma noastra </h4>
      <p className='mt-[1rem]'> Daca esti deja inscris la scoala noastra, poti intra la sectiunea <span className='font-bold'>LEGISLATIE</span> apasand pe butonul de mai jos, acolo unde te ghidam in continuare pentru a iti dovedi cunostintele dobandite.</p>
    </Fade>
    <Fade>
    <div className='mt-[3rem] w-full flex lg:flex-row flex-col justify-center items-center'>
        <ChestionarCardMain categorie="Categoria A" categorieLogo={bike} />
        <div className='flex flex-col items-center my-[2rem] lg:my-0'>
          <h6 className="flex text-[72px] lg:text-[86px] font-lexend font-extrabold text-red-500"><NumberCounter n={130} />+</h6>
          <p className='text-[20px] font-bold w-[18rem] text-center'>Oameni care au reusit sa obtina permisul</p>
        </div>
        <ChestionarCardMain categorie="Categoria B" categorieLogo={car} />
    </div>
    </Fade>
    </div>
    <button onClick={()=>{navigate("/legislatie/chestionare-online");window.scrollTo({top:0,left:0})}} className=" flex justify-center items-center mt-[2rem] text-[14px] lg:text-[16px] font-bold border-[2px]  rounded-[25px] border-black w-[15rem] h-[2.7rem] transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0px_0px_26px_-5px_#DC2626]">CHESTIONARE ONLINE<span className='ml-2 text-[20px]'><AiOutlineArrowRight /></span></button>
   
</div>
  )
}

export default ChestionareOnlineMain