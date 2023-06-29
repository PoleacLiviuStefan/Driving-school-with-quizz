import React, { useEffect,useState } from 'react'
import logo from '../../Images/logo.png'
import Fade from 'react-reveal'
const LoadingScreen = () => {
   const [showLogo,setShowLogo]=useState(false);
   const [showScoala,setShowScoala]=useState(false);
   const [showAuto,setShowAuto]=useState(false);
   const [hideLoading,setHideLoading]=useState(false);
   useEffect(() => {
        setShowLogo(false);
        const timer = setTimeout(() => {
            setShowLogo(true)
            
        }, 500);
        
        return () => clearTimeout(timer)
  }, []);
  useEffect(() => {
    setShowScoala(false);
    const timer = setTimeout(() => {
        setShowScoala(true)
        
    }, 750);
    
    return () => clearTimeout(timer)
}, []);
useEffect(() => {
    setShowAuto(false);
    const timer = setTimeout(() => {
        setShowAuto(true)
        
    }, 1250);
    
    return () => clearTimeout(timer)
}, []);
useEffect(() => {
    
    const timer = setTimeout(() => {
        setHideLoading(true);
        
    }, 2000);
    
    return () => clearTimeout(timer)
}, []);
  return (
    <div className={`flex flex-col justify-center items-center absolute left-0 top-0 z-50 w-screen h-screen bg-white `}>
        {
            showLogo &&
        <Fade top >
            <img src={logo} className={`absolute mt-[-14rem] w-[150px]`} />
        </Fade>
}
    {   
        showScoala && 
        <Fade  bottom>
            <h6 className='absolute mt-[-3rem] flex items-center text-[20px] font-extrabold'><span className='h-[1px] w-[3rem] bg-black mr-1'/>SCOALA DE SOFERI<span className='h-[1px] w-[3rem] bg-black ml-1'/></h6>
        </Fade>
}
{
    showAuto && 
        <Fade duration={6000} bottom >
            <h6 className='absolute  text-[24px] text-red-500 font-extrabold'>AUTO-MOTO POPTEAN</h6>
        </Fade>
}
    </div>
  )
}

export default LoadingScreen