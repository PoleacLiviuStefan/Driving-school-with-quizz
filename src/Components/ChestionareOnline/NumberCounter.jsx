import React, { useState } from 'react'
import {useSpring,animated} from 'react-spring';
import Fade from 'react-reveal/Fade'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const NumberCounter = ({n}) => {


  const [counterOn,setCounterOn]= useState(false);


  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      {counterOn &&  <CountUp start={0} end={n} duration={5} delay={0} />}
    </ScrollTrigger>
  )
}

export default NumberCounter;