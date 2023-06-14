import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
  const [num, setNum] = useState(1800);
  const [timer,setTimer]=useState("30:00")
  let intervalRef = useRef();
  
  const decreaseNum = () =>{ setNum((prev) => prev - 1);

  }

  useEffect(() => {


    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  
    console.log(start);
  }, []);

  useEffect(()=>{
    const minutes=(parseInt(num/60)).toString().length<2 ?  "0" + (parseInt(num/60)).toString() : (parseInt(num/60)).toString()
    const seconds=(num%60).toString().length<2 ? "0" + (num%60).toString()  : (num%60).toString();
    setTimer(minutes + ":"+   seconds )
  },[num])
  return (
    <h4 className="text-[24px]">
      {timer}

    </h4>
  );
}