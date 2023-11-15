import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaMotorcycle} from 'react-icons/fa'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'

const Instructor = ({instrcutorName,instructorAvatar, owner=false,moto=false, auto=false, description}) => {
  return (
    <div className='mt-[3rem] flex flex-col items-center h-[550px] lg:h-[600px] mx-[.5rem] py-[1rem] border-[1px] border-gray-300 rounded-[15px]'>
        <img src={instructorAvatar} className='min-w-[220px] lg:min-w-[280px]  min-h-[220px] lg:min-h-[280px] max-w-[220px] lg:max-w-[280px]  max-h-[220px] lg:max-h-[280px]  rounded-[50%] border-[2px] border-red-500 '/>
        <p className='mt-4 font-extrabold text-[16px] lg:text-[20px]'>{instrcutorName}</p>
        <h4 className={` ${!owner && "hidden"} h-0 font-bold text-red-600 text-[15px] lg:text-[20px] `}>Fondator</h4>
        <div className='mt-[2rem] flex justify-center items-center  text-gray-500 bg-white w-full h-[5rem]'>
        {
            moto && <div className='flex justify-center items-center text-[38px] rounded-[50%] border-[2px] border-gray-500 mx-[.5rem] w-[3.5rem] h-[3.5rem]'> <FaMotorcycle /></div>
        }
         {
            auto && <div className='flex justify-center items-center text-[38px] rounded-[50%] border-[2px] border-gray-500 mx-[.5rem] w-[3.5rem] h-[3.5rem]'> <BsFillCarFrontFill /></div>
        }
        </div>
        {
            (auto || moto) ?
        <><h4 className='mt-[.5rem] text-center font-extrabold text-[15px] lg:text-[16px] '>INSTRUCTOR AUTO <br /> <span className='text-red-500'>{(moto && auto) ? "CATEGORIILE A SI B"  : auto ? "CATEGORIA B": moto && "CATEGORIA A"}</span></h4>
        </>
        : <>
            <h4 className='flex flex-col mt-[.5rem] text-center font-extrabold text-[15px] lg:text-[16px] '>PROFESOR DE <span className='text-red-500'>LIGISLATIE</span></h4>
        </>
}
        <div className='relative flex items-center justify-center w-[20rem] h-[17rem] lg:h-[10rem]'>
            <span className='absolute  left-2 lg:left-0 top-0 text-[36px] text-red-500'><RiDoubleQuotesL /></span>
    
        <p className='mt-[.3rem] w-[75%] text-[13px] lg:text-[14px] text-justify'>{description }</p>
        <span className='absolute  right-2 lg:right-0 bottom-0 text-[36px] text-red-500'><RiDoubleQuotesR /></span>
        </div>
    </div>
  )
}

export default Instructor