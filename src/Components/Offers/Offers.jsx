import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import OfferCardMain from './OfferCardMain';
import studentImg from './Images/student.jpg'

const Offers = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center w-full h-full '>
      <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full'>
      <div className="relative   bg-bgProducts bg-cover bg-center  w-screen h-[32rem] ">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[60%] w-full h-full ">
            <div className="relative mb-4 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
            <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Oferte</a>
            </div>

            <h2 className='text-[26px] lg:text-[42px] font-extrabold text-white'>PROFITA DE <span className='text-red-600'> OFERTE</span></h2>

          </div>

        </div>

          <div className='mt-[3rem] flex flex-col items-center lg:grid lg:grid-cols-2  w-full '>
            <OfferCardMain offerTitle={<p  className='w-[90%] mt-[2rem] lg:text-[20px]'>Daca esti <span className='font-bold'>ELEV</span>, <span className='font-bold'>STUDENT</span> sau <span className='font-bold'>SOMER</span>, profita acum de reducerea de <span className='font-bold text-[18px] lg:text-[24px]'>100</span> de lei</p>} reducere="100 lei REDUCERE" offerImage={studentImg} />
            <OfferCardMain offerTitle={<p  className='w-[90%] mt-[2rem] lg:text-[20px]'>Te poti inscrie impreuna cu un prieten/prietena si veti obtine amandoi <span className='font-bold text-[18px] lg:text-[24px]'> 10% </span> reducere din pretul de scolarizare</p>} reducere="10% REDUCERE" offerImage={studentImg} />
            <OfferCardMain offerTitle={<p  className='w-[90%] mt-[2rem] lg:text-[20px]'>Ne-am cunoscut deja si vrei sa obtii o a doua categorie? In cazul acesta iti oferim o reducere de <span className='font-bold text-[18px] lg:text-[24px]'>100</span> de lei</p>} reducere="100 lei REDUCERE" offerImage={studentImg} />

          </div>
      </div>
    </div>
  )
}

export default Offers