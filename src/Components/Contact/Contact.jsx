import React from 'react'
import {AiOutlinePhone,AiOutlineClockCircle,AiOutlineMail} from 'react-icons/ai'
import {BsFillPinMapFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full w-full py-[10rem]'>
    <div className='flex flex-col items-center w-full lg:w-[65rem] h-full '>
        <h2 className='text-[26px] lg:text-[42px] font-extrabold'>CONTACT</h2>
        <p className='w-[80%] text-center'>Vezi mai jos detaliile de contact</p>
        <div className='mt-[3rem]  flex flex-wrap justify-center lg:flex-row flex-col text-[16px] lg:text-[22px]'>
            <a href="tel:+40755651487" className='flex items-center  font-bold mx-[1rem] my-[.5rem] cursor-pointer '><span className='text-[28px] lg:text-[48px] text-red-500 mr-2'><AiOutlinePhone /></span> 0755 651 487   </a>
            <h3 className='flex items-center  font-bold mx-[1rem] my-[.5rem] '><span className='text-[28px] lg:text-[48px] text-red-500 mr-2' ><BsFillPinMapFill /></span>Calea Radnei, nr 99/A , Arad</h3>
            <h3 className='flex items-center  font-bold mx-[1rem] my-[.5rem] '><span className='text-[28px] lg:text-[48px] text-red-500 mr-2' ><AiOutlineClockCircle /></span>Luni-Vineri: 9:00-13:00</h3>
            <h3 className='flex items-center  font-bold mx-[1rem] my-[.5rem] cursor-pointer '><span className='text-[28px] lg:text-[48px] text-red-500 mr-2' ><AiOutlineMail/></span>Scoalaauto.motopoptean@gmail.com</h3>
        </div>
        <div className='w-[90%] lg:w-full items-center justify-center mt-[5rem] shadow-xl'>
            <iframe className='w-full h-[30rem]' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Calea Radnei, nr 99/A Arad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <form className='flex flex-wrap justify-center lg:justify-between mt-[10em] w-[90%] lg:w-[45rem] h-full bg-white shadow-xl p-[2rem]' onClick={(e)=>{e.preventDefault();}}>
          <h4 className='w-full text-center lg:mb-[4rem] font-bold text-[16px] lg:text-[28px] '>PUTETI COMPLETA FORMULARUL SI VA CONTACTAM NOI</h4>
         <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
            <label className="">Nume si Prenume</label>
                  <input
                    className=" border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                    type="text"
                    required
                  ></input>
          </div>
          <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
            <label className="">Mail</label>
                  <input
                    className=" border-b-[1px] border-black w-[18rem] !outline-none focus:border-red-500  focus:ring-0"
                    type="mail"
                    required
                  ></input>
          </div>
          <div className="mt-[2rem] lg:mt-0 flex flex-col text-left group">
            <label className="mt-[2rem]">Mesaj</label>
                  <textarea
                    className=" mt-[1rem] border-b-[1px] border-black w-[18rem] lg:w-[41rem] h-[6rem] !outline-none focus:border-red-500  focus:ring-0"
                    type="text"
                    required
                  ></textarea>
          </div>
          <button className='mt-[2rem] w-full bg-red-500 text-white border-[2px] border-red-500  text-[18px] font-bold border-red-500 duration-300 transition ease-in-out hover:bg-black  hover:border-black rounded-[15px] px-[2rem] py-[.5rem]'>
              TRIMITE
          </button>
        </form>
    </div>
</div>
  )
}

export default Contact