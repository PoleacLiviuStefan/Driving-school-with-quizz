import React,{useState,useEffect} from 'react'
import logo from '../../Images/logo.png'
import {useNavigate,useLocation} from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import {AiFillCaretRight} from 'react-icons/ai'


const Navbar = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [servicesMenu,setServicesMenu]=useState(false);

    const navigate=useNavigate();
    const located=useLocation();
    const [showMobileMenu,setShowMobileMenu]=useState(false);
    useEffect(() => {

        const onScroll = (e) => {
          setScrollValue(e.target.documentElement.scrollTop);
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
      }, [scrollValue]);
  return (
    <div className={` ${ (scrollValue>400 || located.pathname!=="/" ) ? "fixed text-black":"fixed lg:absolute text-white"} bg-white lg:bg-transparent  z-50 flex justify-center items-center top-0  w-full h-[3.3rem] lg:h-[6rem] px-[6rem] `}>
        <a onClick={()=>{navigate("/")}}><img src={logo} className='w-[45px] lg:w-[80px] lg:mr-[2rem] cursor-pointer' /></a>
        <ul className={`${(scrollValue>400 || located.pathname!=="/") ? "bg-white shadow-lg":"bg-transparent"} hidden lg:flex justify-between  w-[60rem]  py-[.5rem] px-[1rem] rounded-[20px] text-[14px] font-bold `} >
            <li onClick={()=>{navigate("/");}} className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 `}>ACASA</li>
            <li>DESPRE NOI</li>
            <li onClick={()=>{navigate("/oferte");}} className='cursor-pointer'>OFERTE</li>
            <li onClick={()=>{navigate("/produse");}}>PRODUSE</li>
            <li className='relative group transition ease-in-out duration-300'> SERVICII
              <ul className={`absolute opacity-0 hidden transition ease-in-out duration-1000 group-hover:flex group-hover:opacity-100 group  bg-white   w-[15rem] h-[11.5rem] flex-col justify-between shadow-xl text-black`}>
                <li onClick={()=>{navigate("/servicii/obtine-permisul")}} className='relative flex ml- items-center py-[.5rem] px-[1rem] border-b-[1px] border-gray-300 cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out  group-hover:left-4 duration-300'><BsChevronRight /></span> <span className='ml-6'>OBTINE PERMISUL</span> </li>
                <li onClick={()=>{navigate("/servicii/conducere-defensiva")}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white '><span className='absolute text-white  left-0  transition duration-500 ease-in-out group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>CONDUCERE DEFENSIVA</span></li>
                <li onClick={()=>{navigate("/servicii/perfectionare-moto")}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>PERFECTIONARE MOTO</span></li>
                <li onClick={()=>{navigate("/servicii/curs-cu-masina-personala")}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>CURS CU MASINA PERSONALA</span></li>
              </ul>
            </li>
            <li onClick={()=>{navigate("/inscrieri-online")}}>INSCRIERI ONLINE</li>
            <li>LEGISLATIE</li>
            <li>NOUTATI</li>
            <li>GALERIE</li>
            <li>CONTACT</li>
        </ul>
        <div onClick={()=>setShowMobileMenu(prev=>!prev)} className='absolute lg:hidden   left-[1.5rem] top-0  flex flex-col items-left justify-center h-[2rem]  w-[1.5rem]'>
              <span className={`relative ${showMobileMenu ? " animate-[topLine_.5s_ease-in-out_forwards]" :" animate-[topLineReverse_.5s_ease-in-out_forwards]"} top-[.3rem] w-[1.3rem] h-[2px] bg-black`} />
              <span className={`relative ${showMobileMenu ? " animate-[disappear_.5s_ease-in-out_forwards]" :" animate-[appear_.5s_ease-in-out_forwards]"}  top-[.6rem] w-[1rem] h-[2px] bg-black`} />
              <span className={`relative ${showMobileMenu ? " animate-[bottomLine_.5s_ease-in-out_forwards]" :"animate-[bottomLineReverse_.5s_ease-in-out_forwards]"} top-[.9rem] w-[1.3rem] h-[2px] bg-black`} />
             </div>
        <div className={`absolute ${!showMobileMenu && "hidden" } left-0 top-[3.2rem] bg-black bg-opacity-[60%] w-full h-screen`}>
           
            <div className={`flex justify-center bg-white w-[18rem] h-full `}>
            <ul className={`  flex flex-col items-start   w-[10rem]  py-[.5rem] px-[1rem]  text-[13px] font-bold text-black`} >
            <li onClick={()=>{navigate("/");setShowMobileMenu(false)}} className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.8rem] `}>ACASA</li>
            <li>DESPRE NOI</li>
            <li onClick={()=>{navigate("/oferte");setShowMobileMenu(false)}} className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>OFERTE</li>
            <li onClick={()=>{navigate("/produse");setShowMobileMenu(false)}} className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>PRODUSE</li>
            <li className={`flex flex-col  cursor-pointer transition ease-in-out group    hover:text-red-500 duration-300 my-[.7rem] `}> <span onClick={()=>{setServicesMenu(prev=>!prev)}} className='flex items-center '>SERVICII <span className={`ml-2 text-[16px] ${servicesMenu ? "animate-[rotateArrow_.3s_ease-in-out_forwards]":"animate-[reverseRotateArrow_.3s_ease-in-out_forwards]"}`}><AiFillCaretRight /></span></span>
              <ul className={`relative ${!servicesMenu && "hidden" } left-[-2.5rem] top-[.7rem]  group  bg-white   w-[15rem] h-[11.5rem] flex-col items-left justify-between  text-black`}>
                <li onClick={()=>{navigate("/servicii/obtine-permisul");setShowMobileMenu(false)}} className='relative flex items-center py-[.5rem] px-[1rem]  cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out  group-hover:left-4 duration-300'><BsChevronRight /></span> <span className='ml-6'>OBTINE PERMISUL</span> </li>
                <li onClick={()=>{navigate("/servicii/conducere-defensiva");setShowMobileMenu(false)}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out  hover:bg-red-600 hover:text-white '><span className='absolute text-white  left-0  transition duration-500 ease-in-out group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>CONDUCERE DEFENSIVA</span></li>
                <li onClick={()=>{navigate("/servicii/perfectionare-moto");setShowMobileMenu(false)}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>PERFECTIONARE MOTO</span></li>
                <li onClick={()=>{navigate("/servicii/curs-cu-masina-personala");setShowMobileMenu(false)}} className='flex items-center py-[.5rem] px-[1rem] cursor-pointer transition ease-in-out hover:bg-red-600 hover:text-white duration-300'><span className='absolute text-white  left-0  transition ease-in-out duration-300 group-hover:left-4'><BsChevronRight /></span><span className='ml-6'>CURS CU MASINA PERSONALA</span></li>
              </ul>
            </li>
            <li onClick={()=>{navigate("/inscrieri-online")}} className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>INSCRIERI ONLINE</li>
            <li className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>LEGISLATIE</li>
            <li className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>NOUTATI</li>
            <li className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>GALERIE</li>
            <li className={`flex flex-col  cursor-pointer transition ease-in-out    hover:text-red-500 duration-300 my-[.7rem] `}>CONTACT</li>
        </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar