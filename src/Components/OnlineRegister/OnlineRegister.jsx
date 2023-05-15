import React from 'react'
import {useNavigate} from 'react-router'
import {AiOutlineRight} from 'react-icons/ai'


const OnlineRegister = () => {
    const navigate=useNavigate();
    return (
    <div className='flex justify-center items-center w-full h-full '>
        <div className='relative flex flex-col items-center w-[65rem] h-full '>
            <div className='relative   bg-bgRegister bg-cover  w-screen h-[32rem]'>
                <div className='flex flex-col items-center justify-center bg-black bg-opacity-[50%] w-full h-full '>
                <div className='relative top-0 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] '>
                <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
                <span className='mx-[1rem] '><AiOutlineRight /></span>
                <a className='cursor-pointer'>Inscrieri Online</a>
                </div>
            
                    <h2 className='text-[26px] text-center lg:text-left lg:text-[42px] font-extrabold text-white '>TE POTI INSCRIE <span className='text-[#DC2626]'>DIRECT ONLINE</span> </h2>
               
                </div>
                </div>
                <div className='mt-[5rem] flex flex-col items-left w-full'>
                    <h3 className='text-black font-bold w-[35rem] text-[24px] '>COMPLETEAZA FORMULARUL URMATOR SI NE VEDEM DIRECT LA ORE</h3>
                    <form className='grid grid-cols-3 bg-white p-[1rem] w-full h-full' onSubmit={(e)=>{e.preventDefault()}}>
                        <div className='flex flex-col group'>
                            <label className=''>Nume</label>
                            <input className=' border-b-[1px] border-black w-[15rem] !outline-none focus:border-red-500  focus:ring-0' type="text" ></input>
                        </div>
                        <div className='flex flex-col group'>
                            <label className=''>Prenume</label>
                            <input className='border-b-[1px] border-black w-[15rem] !outline-none focus:border-red-500  focus:ring-0' type="text" ></input>
                        </div>
                        <div className='flex flex-col group'>
                            <label className=''>Prenumele Tatalui</label>
                            <input className='border-b-[1px] border-black w-[15rem] !outline-none focus:border-red-500  focus:ring-0' type="text" ></input>
                        </div>
                        <div className='mt-[3rem] flex flex-col group'>
                            <label className=''>Prenumele Mamei</label>
                            <input className='border-b-[1px] border-black w-[15rem] !outline-none focus:border-red-500  focus:ring-0' type="text" ></input>
                        </div>
                        <div className='mt-[3rem] flex flex-col group'>
                            <label className=''>CNP</label>
                            <input className='border-b-[1px] border-black w-[15rem] !outline-none focus:border-red-500  focus:ring-0' type="number" ></input>
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default OnlineRegister