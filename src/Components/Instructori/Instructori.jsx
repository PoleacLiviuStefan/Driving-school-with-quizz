
import {useNavigate} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import Instructor from './Instructor';
import MariusPoptean from '../../Images/MariusPoptean.jpeg';
import IonutLefter from '../../Images/IonutLefter.jpeg'
import Legislatie from '../../Images/legislatie.jpeg'
import VirciuIoan from '../../Images/VirciuIoan.jpeg'
const Instructori = () => {

    const navigate=useNavigate();

  return (
    <div className='flex justify-center items-center w-full h-full '>
    
        <div className='relative flex flex-col items-center w-full lg:w-[65rem] h-full'>
        <div className="relative   bg-bgLicense bg-cover bg-center  w-screen h-[32rem] ">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-[50%] w-full h-full ">
            <div className="relative mb-4 left-[1rem] lg:left-0 flex items-center text-[12px] lg:text-[14px] text-white w-full lg:w-[65rem] ">
            <a onClick={()=>{navigate("/")}} className='cursor-pointer'>Scoala Auto-Moto POPTEAN</a> 
              <span className='mx-[1rem] '><AiOutlineRight /></span>
              <a className='cursor-pointer'>Echipa Noastra</a>
            </div>

   
            <h2 className='text-[26px] lg:text-[42px] font-extrabold text-white'>ECHIPA <span className='text-red-600'> NOASTRA</span></h2>
            <p className='text-white font-bold lg:text-[24px] text-center'>DESCOPERA ECHIPA NOASTRA DE OAMENI TALENTATI</p>
          </div>
        </div>


            <div className=' flex flex-col items-center lg:grid lg:grid-cols-3  w-full py-[5rem]'>
          
                <Instructor instrcutorName="IONEL LEFTER"  instructorAvatar={IonutLefter} moto={true} auto={true} description="Ionel Lefter instructor auto/moto autorizat categoria A si B cu o experienta de peste 15 ani în trafic." />
                <Instructor instrcutorName="MARIUS POPTEAN" owner={true} instructorAvatar={MariusPoptean}   auto={true} description="Marius Poptean  fondator al scolii Auto-Moto Poptean și instructor auto autorizat categoria B  cu o experienta  de peste 22 de ani  în trafic." />
                <Instructor instrcutorName="VÎRCIU IOAN"  instructorAvatar={VirciuIoan}  description="Profesor de legilatie rutiera autorizat cu o experienta de peste 30 de ani." />
            </div>


       
        </div>
    </div>
  )
}

export default Instructori