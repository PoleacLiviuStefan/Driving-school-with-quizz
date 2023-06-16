import React, { useState, useRef, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineArrowRight,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineWarning,
  AiFillCloseCircle,
  AiFillCheckCircle
} from "react-icons/ai";
import IntrebariAcomodare from "./IntrebariAcomodare";
import ReverseTimer from "./ReverseTimer";
import data from "./Questions";

const ChestionariiOnline = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showComfirmedPassword, setShowComfirmedPassword] = useState(false);
  const [selectedCategory, setSelectCategory] = useState(1);
  const [showError, setShowError] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [currentQuestionsAsnwers, setCurrentQuestionsAnswers] = useState([]);
  const [usedQuestionsIndex,setUsedQuestionsIndex]=useState([])
  const [laterQuestions,setLaterQuestions]=useState([]);
  const [randomNumber,setRandomNumber]=useState(Math.floor(Math.random() * 38) )
  const [timeExpired,setTimerExpired]=useState(false);
  const passwordInput = useRef(null);
  const comfirmedPasswordInput = useRef(null);
  const checkExistence = (element) => {
    return usedQuestionsIndex.includes(element);
  };
  const registerPasswordHandler = (e) => {
    e.preventDefault();
    if (passwordInput.current.value !== comfirmedPasswordInput.current.value) {
      setShowError(0);
      window.scrollTo({ top: 0, left: 0 });
    } else {
      setStart(3);
      setShowError(-1);
    }
  };

  const handleChildValue = (value) => {
    setCurrentQuestionsAnswers(value);
    console.log(currentQuestionsAsnwers);
  };
  const handleChildTimer=(value)=>{
      setTimerExpired(true);
      if(timeExpired===true && correctAnswers<22)
        setStart(7);
      else if(timeExpired===true && correctAnswers>=22)
        setStart(8);
      console.log(timeExpired);
  }

  const checkValueCorrectitude = () => {
    //verificare daca raspunsul este corect
    console.log(data.questions.correctOptionsExamen[randomNumber]);
 

    if (currentQuestionsAsnwers.length !== 0) {
      if(start===4)
      {
        if(JSON.stringify(currentQuestionsAsnwers) ===
        JSON.stringify(data.questions.correctOptions[questionNumber])) //verificare pentru intrebarile de acomodare
        setCorrectAnswers((prev) => prev + 1);
        else
        setWrongAnswers((prev) => prev + 1);
      }
      else if(start===6)
      {if (
        JSON.stringify(currentQuestionsAsnwers) ===
          JSON.stringify(data.questions.correctOptionsExamen[randomNumber]) &&
        start === 6
      ) {
        setCorrectAnswers((prev) => prev + 1);

      } else {
        setWrongAnswers((prev) => prev + 1);
        console.log(wrongAnswers);
        if (wrongAnswers === 4) {
          setStart(7);
        }
      }
    }
      if (questionNumber === 2 && start === 4) {
        setQuestionNumber(0);
        setStart(5);
      } else setQuestionNumber((prev) => prev + 1);
      if(questionNumber===25)
        {
          if(correctAnswers>=22)
            setStart(8);
          else
            setStart(7);
        }
    }
    if(questionNumber+laterQuestions.length>=25)
    { let i=0;
      setRandomNumber(laterQuestions[i])
    }
    else
    {
    let currentRandom=Math.floor(Math.random() * 38)
    while(checkExistence(currentRandom))
    {
      currentRandom=Math.floor(Math.random() * 38);
    }
    setRandomNumber(currentRandom);
    setUsedQuestionsIndex([...usedQuestionsIndex, currentRandom])
  }
    console.log(usedQuestionsIndex);
    window.scrollTo({ top: 0, left: 0 });
  };

  const handleLaterQuestion= () =>{
      
      setLaterQuestions([...laterQuestions, randomNumber]);
      let currentRandom=Math.floor(Math.random() * 38)
      while(checkExistence(currentRandom))
      {
        currentRandom=Math.floor(Math.random() * 38);
      }
      setRandomNumber(currentRandom);
      setUsedQuestionsIndex([...usedQuestionsIndex, currentRandom])
      console.log(laterQuestions.length)
  }

  useEffect(() => {
    if(start===7 || start===8)
    {const timer = setTimeout(() => {
      localStorage.setItem("completedQuizz",true);
      window.location.reload(true);

    }, 5000);
    return () => clearTimeout(timer);}
  }, [start]);
  return (
    <div
      className={`flex justify-center items-center w-full  ${
        start <= 3 ? "bg-chestionareBg bg-cover h-screen" : "bg-gray-100 h-full"
      }  py-[5rem]`}
    >
      <div className="relative  flex flex-col items-center justify-center w-full lg:w-[65rem] h-full ">
        <div className="absolute top-[-2rem] left-[1rem] lg:left-0 flex items-centert text-[12px]  lg:text-[14px] text-gray-500 ">
          <a
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            Scoala Auto-Moto POPTEAN
          </a>
          <span className="mx-[1rem] ">
            <AiOutlineRight />
          </span>
          <a className="cursor-pointer">Legislatie</a>
        </div>
        <h2
          className={`text-[26px] lg:text-[42px] font-extrabold text-center leading ${
            start > 3 && "hidden"
          }`}
        >
          CHESTIONARE AUTO
          <br /> <span className="text-red-600">PROBA TEORETICA</span>
        </h2>
        <div
          className={`mt-[1rem] text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showError !== 0 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            PAROLELE NU SUNT LA FEL <br /> VA ROG COMPLETATI AMBELE CAMPURI CU
            ACEEASI PAROLA
          </h4>
        </div>
        <button
          onClick={() => setStart(1)}
          className={`mt-[3rem] ${
            start && "hidden"
          } bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]`}
        >
          INCEPE
        </button>
        <div
          className={`w-[90%] mt-[2rem] ${
            start !== 1 && "hidden"
          } flex flex-col items-center lg:text-[24px] font-bold`}
        >
          <h3>Scrie mai jos ID-ul unic de cursant</h3>
          <input
            type="text"
            className="mt-[1rem] border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
          ></input>
          <button
            onClick={() => setStart(2)}
            className="mt-[2rem] flex items-center bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            CONTINUA
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <form
          onSubmit={(e) => registerPasswordHandler(e)}
          className={`w-[80%] mt-[2rem] ${
            start !== 2 && "hidden"
          } flex flex-col items-center text-[18px] lg:text-[24px] font-bold`}
        >
          <h3 className="text-center ">
            Fiind prima data cand doresti sa completezi aceste chestionare te
            rugam sa iti alegi o parola pe care sa o folosesti si in viitor
          </h3>
          <label className="mt-[3rem]">PAROLA</label>
          <div className="flex mt-[.2rem]">
            <input
              ref={passwordInput}
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
            ></input>
            <span
              onClick={() => {
                if (showPassword) setShowPassword(false);
                else setShowPassword(true);
              }}
              className="flex items-center justify-center w-[2rem] h-[2rem] bg-red-600 text-white text-[24px] lg:text-[36px] cursor-pointer "
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <label className="mt-[3rem]">COMFIRMA PAROLA</label>
          <div className="flex mt-[.2rem]">
            <input
              ref={comfirmedPasswordInput}
              type={`${showComfirmedPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
            ></input>
            <span
              onClick={() => {
                if (showComfirmedPassword) setShowComfirmedPassword(false);
                else setShowComfirmedPassword(true);
              }}
              className="flex items-center justify-center w-[2rem] h-[2rem] bg-red-600 text-white text-[24px] lg:text-[36px] cursor-pointer"
            >
              {showComfirmedPassword ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="mt-[2rem] flex items-center bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            CONTINUA
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
        </form>
        <div
          className={`w-[90%] mt-[2rem] ${
            start !== 3 && "hidden"
          } flex flex-col items-center lg:text-[32px] font-extrabold`}
        >
          <h3 className="text-center  ">SELECTATI CATEGORIA</h3>
          <div className="mt-[2rem] flex flex-col lg:flex-row text-red-500  lg:text-[24px]">
            <span
              onClick={() => setSelectCategory(0)}
              className={` px-[3rem] py-[.5rem] border-red-500 border-[2px] rounded-[15px] mx-[1rem] cursor-pointer duration-300 transition ease-in-out  hover:bg-red-500 hover:text-white ${
                selectedCategory === 0 && "bg-red-500 text-white"
              } my-[.5rem] lg:my-0`}
            >
              A,A1,A2,AM
            </span>{" "}
            <span
              onClick={() => setSelectCategory(1)}
              className={`flex justify-center px-[3rem] py-[.5rem] border-red-500 border-[2px] rounded-[15px] mx-[1rem] cursor-pointer duration-300 transition ease-in-out  hover:bg-red-500 hover:text-white  ${
                selectedCategory === 1 && "bg-red-500 text-white"
              } my-[.5rem] lg:my-0`}
            >
              B,B1
            </span>{" "}
            <span
              onClick={() => setSelectCategory(2)}
              className={`flex justify-center px-[3rem] py-[.5rem] border-red-500 border-[2px] rounded-[15px] mx-[1rem] cursor-pointer duration-300 transition ease-in-out  hover:bg-red-500 hover:text-white  ${
                selectedCategory === 2 && "bg-red-500 text-white"
              } my-[.5rem] lg:my-0`}
            >
              C,C1
            </span>
          </div>
          <button
            onClick={() => {
              setStart(4);
              localStorage.setItem("modChestionar", true);
            }}
            className="mt-[2rem] flex items-center bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            INCEPE
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className={` ${start !== 4 && start !== 6 && "hidden"} w-full`}>
          <IntrebariAcomodare
            start={start}
            checkedAnswers={handleChildValue}
            currentQuestion={questionNumber}
            randomNumber={randomNumber}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center text-center h-screen ${
            start !== 5 && "hidden"
          }`}
        >
          <h4 className="text-[22px] lg:text-[42px]">
            Ai raspuns corect la {correctAnswers} intrebari de acomodare
          </h4>
          <p className="mt-[1rem] text-[16px] lg:text-[24px] lg:w-[50rem] text-center">
            Acum urmeaza examenul ce contine 26 de intrebari si se incheie la
            expirarea timpului de 30 de minute sau la depasirea numarului permis
            de erori (6 raspunsuri gresite){" "}
          </p>
          <button
            onClick={() => {
              setStart(6);
              setCorrectAnswers(0);
              setWrongAnswers(0);
              setUsedQuestionsIndex([]);
            }}
            className=" mt-[2rem] bg-red-600 w-[10rem] lg:w-[15rem] h-[3rem] lg:h-[5rem] text-[20px] lg:text-[30px] text-white rounded-[8px]"
          >
            START
          </button>
        </div>
        <div
          className={`fixed flex flex-col lg:flex-row justify-center items-center  top-0 z-50 bg-white h-[5rem] w-full font-bold text-[13px] lg:text-[15px] ${
            start !== 6 && "hidden"
          }`}
        >
          <div className=" mx-[2rem] hidden lg:flex flex-col items-center ">
            Intrebari Initiale:<span className=" text-[18px] lg:text-[24px]">26</span>
          </div>
          <div className="flex">
          <div className="mx-[.5rem] lg:mx-[2rem] flex flex-col items-center">
            Intrebari Ramase:
            <span className="text-[20px] lg:text-[24px]">{26 - questionNumber}</span>
          </div>
          <span className="mx-[.5rem] lg:mx-[2rem] flex flex-col items-center">
            Timp Ramas: {start === 6 && <ReverseTimer timerExpiredParent={handleChildTimer} />}{" "}
          </span>
          </div>
          <div className="flex">
          <span className="mx-[.5rem] lg:mx-[2rem] text-green-400">
            Raspunsuri Corecte:<span className="text-[16px] lg:text-[20px] mx-[.3rem]" >{correctAnswers}</span>
          </span>
          <span className="mx-[.5rem] lg:mx-[2rem] text-red-400">
            Raspunsuri Gresite:<span className="text-[16px] lg:text-[20px] mx-[.3rem]">{wrongAnswers}</span>
          </span>
          </div>
        </div>
        <div
          className={`fixed flex justify-center items-center  bottom-0 z-50 bg-white h-[5.5rem] w-full font-bold ${
            start !== 6 && start !== 4 && "hidden"
          } text-[14px] lg:text-[15px]`}
        >
          <button
            onClick={handleLaterQuestion}
            className={`mx-[2rem] w-[12rem] h-[4rem] shadow-md ${
              start !== 6 && "hidden"
            }`}
          >
            Raspunde Mai Tarziu
          </button>

          <button
            onClick={checkValueCorrectitude}
            className={`mx-[2rem]  w-[12rem] h-[4rem] shadow-md ${
              currentQuestionsAsnwers.length !== 0
                ? "text-white bg-green-400"
                : "text-gray-400"
            }`}
          >
            Trimite Raspunsul
          </button>
        </div>
        <div
          className={`flex flex-col items-center justify-center  ${
            start !== 7 && "hidden"
          } text-center h-screen`}
        >
          <span className="text-[86px] lg:text-[148px] text-red-500">
            <AiFillCloseCircle />
          </span>
          <p className="mt-[2rem] text-[18px] lg:text-[28px] lg:w-[50rem] font-bold">
            Testul a luat sfarsit. Ati fost declarat respins la examenul de
            teorie. Poti incerca iarasi pentru a te perfectiona
          </p>
        </div>
        <div
          className={`flex flex-col items-center justify-center  ${
            start !== 8 && "hidden"
          } text-center h-screen`}
        >
            <span className="text-[86px] lg:text-[148px] text-green-500"><AiFillCheckCircle />
            </span>
            <p className="mt-[2rem] text-[18px] lg:text-[28px] lg:w-[50rem] font-bold">
              Felicitari! Ati promovat examenul teoretic cu un punctaj final de {correctAnswers} raspunsuri corecte
            </p>
          </div>
      </div>
    </div>
  );
};

export default ChestionariiOnline;
