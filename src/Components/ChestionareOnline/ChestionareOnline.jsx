import React, { useState, useRef, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineArrowRight,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineWarning,
  AiFillCloseCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import IntrebariAcomodare from "./IntrebariAcomodare";
import ReverseTimer from "./ReverseTimer";
import dataChestionare from "./Questions";
import { auth } from "../Firebase/Firebase";

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
  const [usedQuestionsIndex, setUsedQuestionsIndex] = useState([]);
  const [laterQuestions, setLaterQuestions] = useState([]);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * start === 6 ? 89 : start === 11 && 47)
  );
  const [timeExpired, setTimerExpired] = useState(false);
  const [IDCursant, setIDCursant] = useState({
    ID: "",
    instructor: "",
  });
  const passwordInput = useRef(null);
  const comfirmedPasswordInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirmed, setPasswordComfirmed] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [data, setData] = useState(null);
  const [allIDs, setAllIDs] = useState([]);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);
        localStorage.setItem("userMail", user.email);
        setIDCursant({ ...IDCursant, instructor: user.email });
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const getData = () => {
    setIDCursant({
      ...IDCursant,
      instructor: localStorage.getItem("userMail"),
    });
    const { ID, instructor } = IDCursant;
    console.log({ IDCursant });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        ID,
        instructor,
      }),
    };

    const res = fetch(
      "https://scoala-auto-ac5da-default-rtdb.firebaseio.com/IDCursant.json",
      options
    );
    if (res) {
      console.log(res);
    } else {
      console.log("error receiving data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://scoala-auto-ac5da-default-rtdb.firebaseio.com/IDCursant.json"
        );
        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        setData(data)
     
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  const checkExistence = (element) => {
    return usedQuestionsIndex.includes(element);
  };
  const registerPasswordHandler = (e) => {
    e.preventDefault();

    if (password !== passwordComfirmed) {
      setShowError(0);
    } else if (password.length < 6) {
      setShowError(1);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });

      setShowError(-1);
    }
  };
  const InstructorLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setStart(15);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const CursantLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setStart(3);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkUserExistence = () => {
    console.log("verificare existenta");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user.email);
        setStart(15);
      } else {
        setAuthUser(null);
        setStart(13);
      }
    });
  };
  const userSignOut = () => {
    signOut(auth);
  };
  const handleChildValue = (value) => {
    setCurrentQuestionsAnswers(value);
  };
  const handleChildTimer = (value) => {
    setTimerExpired(true);
    if (timeExpired === true && correctAnswers < 22) setStart(7);
    else if (timeExpired === true && correctAnswers >= 22) setStart(8);
  };

  const checkValueCorrectitude = () => {
    //verificare daca raspunsul este corect
    const maxQuestions = start === 6 ? 25 : start === 11 && 19;
    if (currentQuestionsAsnwers.length !== 0) {
      if (start === 4) {
        console.log(questionNumber)
        if (
          JSON.stringify(currentQuestionsAsnwers) ===
          JSON.stringify(dataChestionare.questions.correctOptions[questionNumber])
        )
          //verificare pentru intrebarile de acomodare
          setCorrectAnswers((prev) => prev + 1);
        else setWrongAnswers((prev) => prev + 1);
      } else if (start === 6 || start === 11) {
        if (
          JSON.stringify(currentQuestionsAsnwers) ===
            JSON.stringify(
              start === 6
                ? dataChestionare.questions.correctOptionsExamen[randomNumber]
                : start === 11 &&
                dataChestionare.questions.correctOptionsExamenCategoriaA[randomNumber]
            ) &&
          (start === 6 || start === 11)
        ) {
          setCorrectAnswers((prev) => prev + 1);
        } else {
          setWrongAnswers((prev) => prev + 1);

          if (wrongAnswers === (start === 6 ? 4 : start === 11 && 2)) {
            //terminare la 5 intrebari gresite
            setStart(7);
          }
        }
      }

      if (questionNumber === 2 && start === 4) {
        setQuestionNumber(0);
        setStart(5);
      } else setQuestionNumber((prev) => prev + 1);
      if (questionNumber === maxQuestions) {
        console.log("numarul de raspunsuri corecte: ", correctAnswers);
        if (correctAnswers >= (start === 6 ? 21 : start === 11 && 16))
          setStart(8);
      }
    }
    console.log(questionNumber + laterQuestions.length);
    const maxQuestionsCategory = start === 6 ? 26 : start === 11 && 20;
    if (
      questionNumber + laterQuestions.length >= maxQuestionsCategory &&
      laterQuestions.length >= 1
    ) {
      console.log(
        questionNumber,
        "intrebarea la care suntem,",
        "si numarul de intrebari ramase",
        laterQuestions
      );
      setRandomNumber(laterQuestions[0]);

      const shiftedArray = [...laterQuestions.slice(1), laterQuestions[0]];
      const newArray = [...shiftedArray];
      newArray.pop();
      setLaterQuestions(newArray);
    } else {
      const maxRandom = start === 6 ? 89 : start === 11 ? 47 : 20;
      let currentRandom = Math.floor(Math.random() * maxRandom);
      while (checkExistence(currentRandom)) {
        currentRandom = Math.floor(Math.random() * maxRandom);
      }
      setRandomNumber(currentRandom);
      setUsedQuestionsIndex([...usedQuestionsIndex, currentRandom]);
    }

    window.scrollTo({ top: 0, left: 0 });
  };

  const handleLaterQuestion = () => {
    const maxQuestionsLater = start === 6 ? 25 : start === 11 ? 19 : 19;
    if (
      questionNumber + laterQuestions.length === maxQuestionsLater &&
      laterQuestions.length <= 1
    )
      console.log(
        "no later",
        questionNumber + laterQuestions.length
      ); //problema de rezolvat, raman 2 intrebari si nu mai merge
    else {
      if (questionNumber + laterQuestions.length >= maxQuestionsLater) {
        const firstIndex = laterQuestions[0];
        console.log(laterQuestions);
        console.log("inca aici");
        const shiftedArray = [...laterQuestions.slice(1), laterQuestions[0]];
        console.log("shifted array este:", shiftedArray);
        const newArray = [...shiftedArray];
        newArray[shiftedArray.length - 1] = firstIndex;
        console.log("newarray este:", newArray);
        setLaterQuestions(newArray);
        setRandomNumber(laterQuestions[0]);
        console.log(laterQuestions);
      } else {
        const maxRandom = start === 6 ? 89 : start === 11 ? 47 : 20;
        setLaterQuestions([...laterQuestions, randomNumber]);
        let currentRandom = Math.floor(Math.random() * maxRandom);
        while (checkExistence(currentRandom)) {
          currentRandom = Math.floor(Math.random() * maxRandom);
        }
        console.log("in al doilea else");
        setRandomNumber(currentRandom);
        setUsedQuestionsIndex([...usedQuestionsIndex, currentRandom]);
      }
    }
  };

  useEffect(() => {
    if (start === 7 || start === 8) {
      const timer = setTimeout(() => {
        localStorage.setItem("completedQuizz", true);
        window.location.reload(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [start]);

  useEffect(() => {
    console.log("nu");
  }, [data]);

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
          className={`text-[26px] lg:text-[42px] font-extrabold text-center leading-7 lg:leading-10 ${
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
        <div
          className={`mt-[1rem] text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showError !== 1 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            PAROLA TREBUIE SA CONTINA CEL PUTIN 6 CARACTERE
          </h4>
        </div>
        <button
          onClick={() => setStart(1)}
          className={`mt-[3rem] ${
            start && "hidden"
          } bg-red-500  py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626] w-[15rem] lg:w-[25rem]`}
        >
          CURSANT
        </button>
        <button
          onClick={checkUserExistence}
          className={`mt-[2rem] lg:mt-[3rem] ${
            start && "hidden"
          } bg-red-500  py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626] w-[15rem] lg:w-[25rem]`}
        >
          INSTRUCTOR
        </button>
        {/*conectare instructor*/}
        <form
          onSubmit={(e) => InstructorLogin(e)}
          className={`flex flex-col items-center justify-center  ${
            start !== 13 && "hidden"
          } lg:text-[24px] font-bold h-screen `}
        >
          <h4 className="text-[20px] lg:text-[32px] font-extrabold w-[15rem] lg:w-full text-center">
            Introduceti mai jos email-ul si parola
          </h4>
          <label className="mt-[1rem]">Email</label>
          <input
            type="email"
            className=" border-[2px] border-black w-full lg:w-[32rem] h-[2rem] px-[1rem]"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="mt-[1rem]">Parola</label>
          <div className="flex">
            <input
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            className="mt-[2rem] flex items-center justify-center bg-red-500 px-[4rem] py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626] lg:w-[32rem]"
          >
            INTRA IN CONT
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
        </form>
        {/*conectare cursant*/}
        <form
        onSubmit={(e)=>CursantLogin(e)}
          className={`w-[90%] mt-[2rem] ${
            start !== 1 && "hidden"
          } flex flex-col items-center lg:text-[24px] font-bold`}
        >
          <label className="mt-[1rem]">EMAIL</label>
      
          <input
            type="text"
            className="mt-[1rem] border-[2px] border-black w-full lg:w-[32rem] h-[2rem] px-[1rem]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="mt-[1rem]">PAROLA</label>
          <div className="flex mt-[.2rem] w-full lg:w-[32rem]">
            <input
              ref={passwordInput}
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            className="mt-[2rem] flex items-center bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            AUTENTIFICARE
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
          <div className="flex flex-col items-center mt-[1rem] lg:mt-[2rem] text-center lg:text-[20px] w-[90%] text-gray-600">
            <p>Este prima oara cand incerci sa parcuri aceste chestionare?</p>
            <p>Atunci apasa pe butonul urmator pentru a te inregistra</p>
            <button
              onClick={() => setStart(2)}
              className="mt-[1rem] flex items-center bg-red-500 px-[1rem] lg:px-[2rem] py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
            >
              INREGISTRARE
            </button>
          </div>
        </form>
        {/*Panou de control pentru instructori*/}
        <div
          className={`flex flex-col items-center ${
            start !== 15 && "hidden"
          } h-full w-full`}
        >
          <div className="flex justify-end items-center w-full  top-0">
            <h4 className="mr-[2rem] text-center">
              Conectat ca: <br />
              {localStorage.getItem("userMail")}
            </h4>
            <button
              onClick={userSignOut}
              className="mr-[1rem] bg-red-500 text-white font-bold px-[2rem] py-[.5rem] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_15px_-5px_#DC2626] text-[12px] lg:text-[15px]"
            >
              IESI DIN CONT
            </button>
          </div>
          <ul className="flex flex-col items-center lg:grid lg:grid-cols-2 items-center  justify-center w-[90%] lg:w-[60rem]">
          <li className="flex flex-col items-center my-[.5rem]">
              <input
              placeholder="Adauga ID-ul cursantului"
                value={IDCursant.ID}
                onChange={(e) =>
                  setIDCursant({ ...IDCursant, ID: e.target.value })
                }
              />
              <button
                onClick={getData}
                className="mr-[1rem] bg-red-500 text-white font-bold px-[2rem] py-[.5rem] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_15px_-5px_#DC2626] text-[12px] lg:text-[15px]"
              >
                ADAUGA CURSANTUL
              </button>
              <p  className="lg:text-[20px] font-bold mt-[1rem]">Toti cursantii</p>
            </li>
            <li></li>
       
           
            {data && Object.keys(data).map((key) => <li >{data[key].ID}</li>)}
          </ul>
        </div>
        <form
          onSubmit={(e) => registerPasswordHandler(e)}
          className={`w-[80%] mt-[.5rem] ${
            start !== 2 && "hidden"
          } flex flex-col items-center text-[16px] lg:text-[24px] font-bold`}
        >
          <h3 className="text-center ">
            Fiind prima data cand doresti sa completezi aceste chestionare te
            rugam sa iti scrii ID-ul de cursant si sa iti alegi un email si o
            parola pe care sa o folosesti si in viitor
          </h3>
          <label className="mt-[1rem]">ID-UL DE CURSANT</label>

          <input
            type="text"
            className=" border-[2px] border-black w-full w-full lg:w-[32rem] h-[2rem] px-[1rem] "
          />
          <label className="mt-[1rem]">EMAIL</label>

          <input
            type="email"
            className=" border-[2px] border-black w-full w-full lg:w-[32rem] h-[2rem] px-[1rem] "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="mt-[1rem]">PAROLA</label>
          <div className="flex mt-[.2rem] w-full lg:w-[32rem]">
            <input
              ref={passwordInput}
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <label className="mt-[1rem]">COMFIRMA PAROLA</label>
          <div className="flex mt-[.2rem] w-full lg:w-[32rem]">
            <input
              ref={comfirmedPasswordInput}
              type={`${showComfirmedPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={passwordComfirmed}
              onChange={(e) => setPasswordComfirmed(e.target.value)}
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
        {/*formularul daca este deja inscris*/}
        <form
          onSubmit={(e) => registerPasswordHandler(e)}
          className={`w-[80%] mt-[2rem] ${
            start !== 14 && "hidden"
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
        <div
          className={` ${
            start !== 4 && start !== 6 && start !== 11 && "hidden"
          } w-full`}
        >
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
            de erori (6 raspunsuri gresite)
          </p>
          <button
            onClick={() => {
              setStart(
                start === 5 && selectedCategory === 1
                  ? 6
                  : start === 5 && selectedCategory === 0 && 11
              );
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
            start !== 6 && start != 11 && "hidden"
          }`}
        >
          <div className=" mx-[2rem] hidden lg:flex flex-col items-center ">
            Intrebari Initiale:
            <span className=" text-[18px] lg:text-[24px]">
              {start === 6 ? 26 : start === 11 && 20}
            </span>
          </div>
          <div className="flex">
            <div className="mx-[.5rem] lg:mx-[2rem] flex flex-col items-center">
              Intrebari Ramase:
              <span className="text-[20px] lg:text-[24px]">
                {(start === 6 ? 26 : start === 11 && 20) - questionNumber}
              </span>
            </div>
            <span className="mx-[.5rem] lg:mx-[2rem] flex flex-col items-center">
              Timp Ramas:{" "}
              {(start === 6 || start === 11) && (
                <ReverseTimer timerExpiredParent={handleChildTimer} />
              )}{" "}
            </span>
          </div>
          <div className="flex">
            <span className="mx-[.5rem] lg:mx-[2rem] text-green-400">
              Raspunsuri Corecte:
              <span className="text-[16px] lg:text-[20px] mx-[.3rem]">
                {correctAnswers}
              </span>
            </span>
            <span className="mx-[.5rem] lg:mx-[2rem] text-red-400">
              Raspunsuri Gresite:
              <span className="text-[16px] lg:text-[20px] mx-[.3rem]">
                {wrongAnswers}
              </span>
            </span>
          </div>
        </div>
        <div
          className={`fixed flex justify-center items-center  bottom-0 z-50 bg-white h-[5.5rem] w-full font-bold ${
            start !== 6 && start !== 4 && start !== 11 && "hidden"
          } text-[14px] lg:text-[15px]`}
        >
          <button
            onClick={handleLaterQuestion}
            className={`mx-[2rem] w-[12rem] h-[4rem] shadow-md ${
              start !== 6 && start !== 11 && "hidden"
            } ${
              questionNumber + laterQuestions.length === 24 &&
              laterQuestions.length <= 1 &&
              "text-gray-400"
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
            }
            
            `}
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
          <span className="text-[86px] lg:text-[148px] text-green-500">
            <AiFillCheckCircle />
          </span>
          <p className="mt-[2rem] text-[18px] lg:text-[28px] lg:w-[50rem] font-bold">
            Felicitari! Ati promovat examenul teoretic cu un punctaj final de{" "}
            {correctAnswers} raspunsuri corecte
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChestionariiOnline;
