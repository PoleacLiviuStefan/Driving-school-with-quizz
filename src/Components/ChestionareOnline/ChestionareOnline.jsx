import React, { useState, useRef, useEffect, memo } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
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
  AiFillCaretRight,
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import IntrebariAcomodare from "./IntrebariAcomodare";
import ReverseTimer from "./ReverseTimer";
import dataChestionare from "./Questions";
import { auth } from "../Firebase/Firebase";
import indicator1 from "./Images/indicator1.jpg";
import indicator2 from "./Images/indicator2.jpg";
import indicator3 from "./Images/indicator3.jpg";
import motoimg1 from "./Images/motoimg1.jpg";
import motoimg2 from "./Images/motoimg2.jpg";
import motoimg3 from "./Images/motoimg3.jpg";
import motoimg4 from "./Images/motoimg4.jpg";
import motoimg5 from "./Images/motoimg5.jpg";
import motoimg6 from "./Images/motoimg6.jpg";
import motoimg7 from "./Images/motoimg7.jpg";
import motoimg8 from "./Images/motoimg8.jpg";
import motoimg9 from "./Images/motoimg9.jpg";
import motoimg10 from "./Images/motoimg10.jpg";
import motoimg11 from "./Images/motoimg11.jpg";
import motoimg12 from "./Images/motoimg12.jpg";
import motoimg13 from "./Images/motoimg13.jpg";
import motoimg14 from "./Images/motoimg14.jpg";
import motoimg15 from "./Images/motoimg15.jpg";
import motoimg16 from "./Images/motoimg16.jpg";
import motoimg17 from "./Images/motoimg17.jpg";
import motoimg18 from "./Images/motoimg18.jpg";
import motoimg19 from "./Images/motoimg19.jpg";
import motoimg20 from "./Images/motoimg20.jpg";
import motoimg21 from "./Images/motoimg21.jpg";
import motoimg22 from "./Images/motoimg22.jpg";
import motoimg23 from "./Images/motoimg23.jpg";
import motoimg24 from "./Images/motoimg24.jpg";
import motoimg25 from "./Images/motoimg25.jpg";
import motoimg26 from "./Images/motoimg26.jpg";
import motoimg27 from "./Images/motoimg27.jpg";
import motoimg28 from "./Images/motoimg28.jpg";
import motoimg29 from "./Images/motoimg29.jpg";
import motoimg30 from "./Images/motoimg30.jpg";
import motoimg31 from "./Images/motoimg31.jpg";
import motoimg32 from "./Images/motoimg32.jpg";
import motoimg33 from "./Images/motoimg33.jpg";
import motoimg34 from "./Images/motoimg34.jpg";
import motoimg35 from "./Images/motoimg35.jpg";
import motoimg36 from "./Images/motoimg36.jpg";
import motoimg37 from "./Images/motoimg37.jpg";
import motoimg38 from "./Images/motoimg38.jpg";
import motoimg39 from "./Images/motoimg39.jpg";
import motoimg40 from "./Images/motoimg40.jpg";
import motoimg41 from "./Images/motoimg41.jpg";
import motoimg42 from "./Images/motoimg42.jpg";
import motoimg43 from "./Images/motoimg43.jpg";
import motoimg44 from "./Images/motoimg44.jpg";
import motoimg45 from "./Images/motoimg45.jpg";
import motoimg46 from "./Images/motoimg46.jpg";
import motoimg47 from "./Images/motoimg47.jpg";
const ChestionariiOnline = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showComfirmedPassword, setShowComfirmedPassword] = useState(false);
  const [selectedCategory, setSelectCategory] = useState(1);
  const [showNotification, setShowNotification] = useState(-1);
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
    numePrenume: "",
    instructor: "",
    chestionareCorecte: "",
    chestionareGresite: "",
    contCreat: "nu",
  });
  const questionImages = {
    indicator1: indicator1,
    indicator2: indicator2,
    indicator3: indicator3,
    motoimg1: motoimg1,
    motoimg2: motoimg2,
    motoimg3: motoimg3,
    motoimg4: motoimg4,
    motoimg5: motoimg5,
    motoimg6: motoimg6,
    motoimg7: motoimg7,
    motoimg8: motoimg8,
    motoimg9: motoimg9,
    motoimg10: motoimg10,
    motoimg11: motoimg11,
    motoimg12: motoimg12,
    motoimg13: motoimg13,
    motoimg14: motoimg14,
    motoimg15: motoimg15,
    motoimg16: motoimg16,
    motoimg17: motoimg17,
    motoimg18: motoimg18,
    motoimg19: motoimg19,
    motoimg20: motoimg20,
    motoimg21: motoimg21,
    motoimg22: motoimg22,
    motoimg23: motoimg23,
    motoimg24: motoimg24,
    motoimg25: motoimg25,
    motoimg26: motoimg26,
    motoimg27: motoimg27,
    motoimg28: motoimg28,
    motoimg29: motoimg29,
    motoimg30: motoimg30,
    motoimg31: motoimg31,
    motoimg32: motoimg32,
    motoimg33: motoimg33,
    motoimg34: motoimg34,
    motoimg35: motoimg35,
    motoimg36: motoimg36,
    motoimg37: motoimg37,
    motoimg38: motoimg38,
    motoimg39: motoimg39,
    motoimg40: motoimg40,
    motoimg41: motoimg41,
    motoimg42: motoimg42,
    motoimg43: motoimg43,
    motoimg44: motoimg44,
    motoimg45: motoimg45,
    motoimg46: motoimg46,
    motoimg47: motoimg47,
  };
  const passwordInput = useRef(null);
  const comfirmedPasswordInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirmed, setPasswordComfirmed] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [data, setData] = useState(null);
  const [userID, setUserId] = useState("");
  const [IntrebariTerminate, setIntrebariTerminate] = useState([]);
  const [showQuestions, setShowQuestions] = useState(-1);

  const findNumbersInString = (str) => {
    const regex = /\d+/g; //
    const matches = str.match(regex); // Find all matches in the string

    if (matches) {
      return matches.map(Number); // Convert the matched strings to numbers
    }

    return [];
  };
  function extractTextFromImageUrl(imageUrl) {
    if (typeof imageUrl !== "string" || !imageUrl) {
      // Invalid image URL
      return "";
    }

    const imageKeys = Object.keys(questionImages);
    for (let i = imageKeys.length - 1; i >= 0; i--) {
      const key = imageKeys[i];
      if (imageUrl.includes(key)) {
        // Extract the text associated with the key

        return key;
      }
    }
  }
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);

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
      chestionareCoreste: "",
      contcreat: "nu",
    });
    const {
      ID,
      numePrenume,
      instructor,
      chestionareCorecte,
      chestionareGresite,
      contCreat,
    } = IDCursant;
    console.log({ IDCursant });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        ID,
        numePrenume,
        instructor,
        chestionareCorecte,
        chestionareGresite,
        contCreat,
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
        setData(data);
        console.log("data este", Object.entries(data["-NZ6yQ-Omd5zPXhYapIF"]));
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
    var sameID = false;
    var memorizedKey = "";
    Object.keys(data).map((key) => {
      if (data[key].ID === userID) {
        sameID = true;
        memorizedKey = key;
        console.log("da, exista ID cu acelasi ID din baza de date");
      }
    });
    if (!sameID) {
      setShowNotification(2);
    } else if (password !== passwordComfirmed) {
      setShowNotification(0);
    } else if (password.length < 6) {
      setShowNotification(1);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          const updatedField = { Email: email, contCreat: "da" };

          fetch(
            "https://scoala-auto-ac5da-default-rtdb.firebaseio.com/IDCursant/" +
              memorizedKey +
              ".json",
            {
              method: "PATCH",
              body: JSON.stringify(updatedField),
            }
          )
            .then((response) => response.json())
            .then((updatedData) => {
              console.log("Field updated successfully:", updatedData);
              window.location.reload();
            })
            .catch((error) => {
              console.error("Error updating field:", error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      setShowNotification(-1);
    }
  };
  const InstructorLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("userMail", userCredential.user.email);
        var mailCursant = false;
        Object.keys(data).map((key) => {
          if (data[key].Email === userCredential.user.email) {
            mailCursant = true;
          }
        });
        if (mailCursant === false) setStart(15);
        else {
          signOut(auth);
          setShowNotification(4);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowNotification(3);
      });
  };
  const CursantLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("da");
        localStorage.setItem("cursantConectat", true);
        localStorage.setItem("userEmailCursant", userCredential.user.email);

        setStart(3);
      })
      .catch((error) => {
        console.log(error);
        setShowNotification(3);
      });
  };
  const checkUserExistence = () => {
    console.log("verificare existenta");
    onAuthStateChanged(auth, (user) => {
      if (user && localStorage.getItem("cursantConectat") === false) {
        console.log("da,s-a conectat");
        setAuthUser(user);
        localStorage.setItem("userMail", user.email);
        setStart(15);
      } else {
        setAuthUser(null);
        setStart(13);
        localStorage.setItem("userMail", "");
        localStorage.setItem("cursantConectat", false);
      }
    });
  };
  const checkUserCursantExistence = () => {
    console.log("verificare existenta");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStart(3);
        localStorage.setItem("userEmailCursant", user.email);
      } else {
        setStart(1);
        localStorage.setItem("userEmailCursant", "");
      }
    });
  };
  const userSignOut = () => {
    signOut(auth);
    localStorage.setItem("cursantConectat", false);
    localStorage.setItem("userEmailCursant", "");
    localStorage.setItem("userMail", "");
    setEmail("");
    setPassword("");
  };
  const handleChildValue = (value) => {
    setCurrentQuestionsAnswers(value);
  };
  const handleChildQuestion = (value) => {
    setIntrebariTerminate([...IntrebariTerminate, value]);
    console.log(IntrebariTerminate);
  };
  const handleChildTimer = (value) => {
    setTimerExpired(true);
    if (timeExpired === true && correctAnswers < 22) setStart(7);
    else if (timeExpired === true && correctAnswers >= 22) setStart(8);
  };

  const checkValueCorrectitude = () => {
    console.log("ai apasat pe trimite");
    //verificare daca raspunsul este corect
    console.log(randomNumber);
    const maxQuestions = start === 6 ? 25 : start === 11 && 19;
    if (currentQuestionsAsnwers.length !== 0) {
      if (start === 4) {
        console.log(questionNumber);
        if (
          JSON.stringify(currentQuestionsAsnwers) ===
          JSON.stringify(
            dataChestionare.questions.correctOptions[questionNumber]
          )
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
                    dataChestionare.questions.correctOptionsExamenCategoriaA[
                      randomNumber
                    ]
            ) &&
          (start === 6 || start === 11)
        ) {
          setCorrectAnswers((prev) => prev + 1);
          var IntrebariTerminateNew = [...IntrebariTerminate];
          IntrebariTerminateNew[IntrebariTerminate.length - 1][2] = "corect";
          setIntrebariTerminate(IntrebariTerminateNew);
        } else {
          setWrongAnswers((prev) => prev + 1);
          var IntrebariTerminateNew = [...IntrebariTerminate];
          IntrebariTerminateNew[IntrebariTerminate.length - 1][2] = "gresit";

          if (wrongAnswers === (start === 6 ? 4 : start === 11 && 2)) {
            //terminare la 5 intrebari gresite

            setStart(7);

            var memorizedKey = "";
            Object.keys(data).map((key) => {
              if (
                data[key].Email === localStorage.getItem("userEmailCursant")
              ) {
                memorizedKey = key;
              }
            });
            console.log("cheia memorata este:", memorizedKey);
            const chestionareCorecte = findNumbersInString(
              data[memorizedKey].chestionareCorecte
            );
            const chestionareGresite = findNumbersInString(
              data[memorizedKey].chestionareGresite
            );
            const quizzNumber =
              "toateIntrebarile" +
              (
                chestionareCorecte.length +
                chestionareGresite.length +
                1
              ).toString();
            console.log(
              "toate chestionarele",
              data[memorizedKey].chestionareCorecte.length
            );

            const updatedField = {
              chestionareGresite:
                data[memorizedKey].chestionareGresite + " " + correctAnswers,
              [quizzNumber]: [...IntrebariTerminate, correctAnswers],
            };
            console.log(data[memorizedKey].chestionareGresite + correctAnswers);

            fetch(
              "https://scoala-auto-ac5da-default-rtdb.firebaseio.com/IDCursant/" +
                memorizedKey +
                ".json",
              {
                method: "PATCH",
                body: JSON.stringify(updatedField),
              }
            )
              .then((response) => response.json())
              .then((updatedData) => {
                console.log("Field updated successfully:", updatedData);
              })
              .catch((error) => {
                console.error("Error updating field:", error);
              });
          }
        }
      }

      if (questionNumber === 2 && start === 4) {
        setQuestionNumber(0);

        setStart(5);
      } else setQuestionNumber((prev) => prev + 1);
      if (questionNumber === maxQuestions) {
        console.log("numarul de raspunsuri corecte: ", correctAnswers);
        if (correctAnswers >= (start === 6 ? 21 : start === 11 && 16)) {
          setStart(8);
          var memorizedKey = "";
          Object.keys(data).map((key) => {
            if (data[key].Email === localStorage.getItem("userEmailCursant")) {
              memorizedKey = key;
            }
          });
          console.log("cheia memorata este:", memorizedKey);
          const chestionareCorecte = findNumbersInString(
            data[memorizedKey].chestionareCorecte
          );
          const chestionareGresite = findNumbersInString(
            data[memorizedKey].chestionareGresite
          );
          const quizzNumber =
            "toateIntrebarile" +
            (
              chestionareCorecte.length +
              chestionareGresite.length +
              1
            ).toString();
          console.log(
            "toate chestionarele",
            data[memorizedKey].chestionareCorecte.length
          );
          //adaugam in capatul intrebarilor, numarul de raspunsuri corecte
          setIntrebariTerminate([
            ...IntrebariTerminate,
            correctAnswers.toString(),
          ]);
          const updatedField = {
            chestionareCorecte:
              data[memorizedKey].chestionareCorecte + " " + correctAnswers,
            [quizzNumber]: IntrebariTerminate,
          };
          console.log(data[memorizedKey].chestionareCorecte + correctAnswers);

          fetch(
            "https://scoala-auto-ac5da-default-rtdb.firebaseio.com/IDCursant/" +
              memorizedKey +
              ".json",
            {
              method: "PATCH",
              body: JSON.stringify(updatedField),
            }
          )
            .then((response) => response.json())
            .then((updatedData) => {
              console.log("Field updated successfully:", updatedData);
            })
            .catch((error) => {
              console.error("Error updating field:", error);
            });
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
    }
  };

  const handleLaterQuestion = () => {
    console.log("ai apasat pe raspunde");
    const maxQuestionsLater = start === 6 ? 25 : start === 11 ? 19 : 19;
    if (
      questionNumber + laterQuestions.length === maxQuestionsLater &&
      laterQuestions.length <= 1
    )
      console.log("no later", questionNumber + laterQuestions.length);
    //problema de rezolvat, raman 2 intrebari si nu mai merge
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
  //timpul maxim de afisare a erorii
  useEffect(() => {
    if (start === 7 || start === 8) {
      const timer = setTimeout(() => {
        localStorage.setItem("completedQuizz", true);
        window.location.reload(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [start]);
  const reset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Email-ul de resetare a fost trimis");
      setEmail("");
      setShowNotification(5);
    } catch (err) {
      console.log(err);
      setShowNotification(6);
    }
  };
  useEffect(() => {
    if (
      showNotification !== -1 &&
      (start === 13 || start === 1 || start === 16)
    ) {
      const timer = setTimeout(() => {
        setShowNotification(-1);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowNotification(-1);
    }
  }, [showNotification, start]);
  const handleShowQuestions = (quizzIndex) => {
    console.log(quizzIndex);
    if (showQuestions !== quizzIndex) setShowQuestions(quizzIndex);
    else setShowQuestions(-1);
  };

  return (
    <div
      className={`flex justify-center items-center w-full  ${
        start <= 3 ? "bg-chestionareBg bg-cover h-full" : "bg-gray-100 h-full"
      }  py-[10rem]`}
    >
      <div className="relative  flex flex-col items-center justify-center w-full lg:w-[65rem] h-full  py-[4rem]">
        <div
          className={`flex items-center absolute top-0 left-[1rem] ${
            start !== 3 && start !== 5 && start !== 7 && start !== 8 && "hidden"
          }`}
        >
          <span className="text-[36px] text-red-500">
            <RxAvatar />
          </span>
          <p className="ml-2 font-bold">
            {localStorage.getItem("userEmailCursant")}
          </p>
          <button
            onClick={userSignOut}
            className={`ml-2 bg-red-500  py-[.5rem]  px-[.5rem] text-white font-bold text-[13px] lg:text-[16px]  rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626] ${
              (start === 7 || start === 8) && "hidden"
            }`}
          >
            DECONETARE
          </button>
        </div>
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
          <a
            onClick={() => {
              window.location.reload(false);
            }}
            className="cursor-pointer"
          >
            Legislatie
          </a>
        </div>
        <h2
          className={`text-[26px] lg:text-[42px] font-extrabold text-center leading-7 lg:leading-10 ${
            start > 3 && "hidden"
          }`}
        >
          CHESTIONARE AUTO
          <br /> <span className="text-red-600">PROBA TEORETICA</span>
        </h2>
        {/*Eroare parolele nu sunt identice*/}
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 0 && "hidden"
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
        {/*Eroare numar minim de caractere pentru parola */}
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 1 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            PAROLA TREBUIE SA CONTINA CEL PUTIN 6 CARACTERE
          </h4>
        </div>
        {/*Eroare numar minim de caractere pentru parola */}
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[13px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 2 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            ID-UL NU EXISTA! DACA ESTI INSCRIS LA SCOALA NOASTRA, TE RUGAM SA
            ITI CONTACTEZI INSTRUCTORUL PENTRU A TE ADAUGA IN BAZA DE DATE DE PE
            SITE. MULTUMIM!
          </h4>
        </div>
        {/*Verificare parola la login*/}
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 3 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            EMAIL-UL SAU PAROLA SUNT GRESITE.
          </h4>
        </div>
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 4 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            NU TE POTI CONECTA CU DATELE DE CURSANT LA UN CONT DE INSTRUCTOR
          </h4>
        </div>
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-green-500 px-[2rem] py-[1rem] ${
            showNotification !== 5 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineCheckCircle />
            </span>
            EMAIL-UL DE RESETARE A PAROLEI A FOST TRIMIS, VERIFICA ATAT INBOX-UL
            CAT SI SPAM-UL
          </h4>
        </div>
        <div
          className={`flex items-center justify-center fixed top-[0rem] w-full text-[14px] lg:text-[18px] text-white font-extrabold bg-red-500 px-[2rem] py-[1rem] ${
            showNotification !== 6 && "hidden"
          }`}
        >
          <h4 className="flex items-center text-center">
            <span className="text-[56px] mr-2">
              <AiOutlineWarning />
            </span>
            EMAIL-UL INTRODUS NU EXISTA IN BAZA DE DATE
          </h4>
        </div>

        <button
          onClick={checkUserCursantExistence}
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
          } lg:text-[24px] font-bold h-full `}
        >
          <h4 className="text-[20px] lg:text-[32px] font-extrabold w-[15rem] lg:w-full text-center">
            Introduceti mai jos email-ul si parola
          </h4>
          <label className="mt-[1rem]">Email</label>
          <input
            type="email"
            className=" border-[2px] border-black w-full lg:w-[32rem] h-[2rem] px-[1rem]"
            value={email}
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
          <div className="mt-[2rem] flex justify-center items-center text-center text-[14px] lg:text-[18px]">
            <p className="text-gray-600">
              Nu iti mai amintesti parola? Poti sa o resetezi apasand
            </p>
            <button
              onClick={() => {setStart(16);setShowNotification(-1)}}
              type="button"
              className="ml-[1rem] flex items-center bg-red-500 px-[1rem] lg:px-[2rem] py-[.2rem] lg:py-[.5rem] text-white font-bold text-[12px] lg:text-[16px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
            >
              RESETEAZA PAROLA
            </button>
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
        <div
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
            required
          ></input>
          <label className="mt-[1rem]">PAROLA</label>
          <div className="flex mt-[.2rem] w-full lg:w-[32rem]">
            <input
              ref={passwordInput}
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
            onClick={CursantLogin}
            type="submit"
            className="mt-[2rem] flex items-center bg-red-500 px-[4rem] py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            AUTENTIFICARE
            <span className="ml-1 text-[24px]">
              <AiOutlineArrowRight />
            </span>
          </button>
          <div className="mt-[2rem] flex justify-center items-center text-center text-[14px] lg:text-[18px]">
            <p className="text-gray-600">
              Nu iti mai amintesti parola? Poti sa o resetezi apasand
            </p>
            <button
              onClick={() => setStart(16)}
              className="ml-[1rem] flex items-center bg-red-500 px-[1rem] lg:px-[2rem] py-[.2rem] lg:py-[.5rem] text-white font-bold text-[12px] lg:text-[16px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
            >
              RESETEAZA PAROLA
            </button>
          </div>
          <div className="flex flex-col items-center mt-[1rem] lg:mt-[2rem] text-center lg:text-[20px] w-[90%] text-gray-600">
            <p>Este prima oara cand incerci sa parcurgi aceste chestionare?</p>
            <p>Atunci apasa pe butonul urmator pentru a te inregistra</p>
          </div>
          <button
            onClick={() => {
              setStart(2);
              setEmail("");
              setPassword("");
            }}
            className="mt-[1rem] flex items-center bg-red-500 px-[1rem] lg:px-[2rem] py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            INREGISTRARE
          </button>
        </div>
        {/* Resetarea parolei */}
        <div
          className={`flex flex-col items-center ${
            start !== 16 && "hidden"
          } h-full w-[90%] lg:text-[24px] `}
        >
          <label className="font-bold">EMAIL</label>
          <input
            type="text"
            className="mt-[1rem] border-[2px] border-black w-full  lg:w-[32rem] h-[2rem] px-[1rem]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <button
            onClick={reset}
            className="mt-[2rem] flex items-center bg-red-500 px-[1rem] lg:px-[2rem] py-[.5rem] lg:py-[1rem] text-white font-bold text-[18px] lg:text-[24px] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_26px_-5px_#DC2626]"
          >
            RESETEAZA PAROLA
          </button>
          <p className="mt-[2rem] text-gray-600 text-center w-[90%]">
            Dupa apasarea butonului "RESETEAZA PAROLA" o sa primesti pe mail-ul
            mentionat mai sus indicatiile de resetare a parolei,{" "}
          </p>
        </div>
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
          <ul className="flex flex-col lg:grid lg:grid-cols-2 items-start  justify-between w-[90%] lg:w-[60rem]">
            <li className="flex flex-col lg:flex-row items-center my-[.5rem] ">
              <div className="flex flex-col mr-[.5rem]">
                <input
                  placeholder="Adauga ID-ul cursantului"
                  value={IDCursant.ID}
                  onChange={(e) =>
                    setIDCursant({ ...IDCursant, ID: e.target.value })
                  }
                  className="w-[18.5rem] my-[.2rem]"
                />
                <input
                  placeholder="Adauga numele si prenumele cursantului"
                  value={IDCursant.numePrenume}
                  onChange={(e) =>
                    setIDCursant({ ...IDCursant, numePrenume: e.target.value })
                  }
                  className="w-[18.5rem] my-[.2rem]"
                />
              </div>
              <button
                onClick={getData}
                className="mt-[.5rem] mr-[1rem] bg-red-500 text-white font-bold px-[2rem] py-[.5rem] rounded-[8px] duration-300 transition ease-in-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0px_0px_15px_-5px_#DC2626] text-[12px] lg:text-[15px] w-[15rem]"
              >
                ADAUGA CURSANTUL
              </button>
            </li>
            <li />
            <li className="mt-[2rem] flex justify-center font-bold text-[18px] lg:text-[24px]">
              Toti cursantii
            </li>
            <li></li>

            {data &&
              Object.keys(data).map((key, index) => {
                if (data[key].instructor === localStorage.getItem("userMail")) {
                  return (
                    <>
                      <li className="w-full my-[1rem] px-[1rem]">
                        <span className="font-bold">{index + 1}.</span> ID:{" "}
                        {data[key].ID} <br /> Nume si Prenume:{" "}
                        {data[key].numePrenume} <br /> Email:{" "}
                        {data[key].Email === ""
                          ? "Cursanul nu s-a inregistrat"
                          : data[key].Email}{" "}
                        <br /> Chestionarele Corecte:{" "}
                        {data[key].chestionareCorecte} <br /> Chestionarele
                        Gresite: {data[key].chestionareGresite} <br />{" "}
                        <ul
                          className={`overflow-hidden flex flex-col justify-start ${
                            showQuestions === index
                              ? "h-full"
                              : "h-[3.5rem] lg:h-[2rem]"
                          }`}
                        >
                          <li>
                            <div className="mt-2 flex flex-col lg:flex-row ">
                              <button
                                className="flex items-center lg:ml-2 bg-red-500 text-white rounded-[8px] px-[.5rem] "
                                onClick={() => handleShowQuestions(index)}
                              >
                                Apasa pentru a vedea toate chestionarele{" "}
                                <span
                                  className={` ${
                                    showQuestions === index
                                      ? "rotate-[90deg]"
                                      : ""
                                  }`}
                                >
                                  <AiFillCaretRight />
                                </span>
                              </button>
                            </div>
                          </li>
                          {Object.entries(data[key]).map(
                            (value, indexSecond) => {
                              if (indexSecond >= 7)
                                return (
                                  <>
                                    <ul className={`flex flex-col my-[1rem]`}>
                                      Chestionarul numarul {indexSecond - 6} cu
                                      Intreabrile:{" "}
                                      {value[1].map((item, subIndex) => (
                                        <li
                                          className={`flex items-start p-2 ${
                                            subIndex % 2 === 0
                                              ? "bg-white"
                                              : "bg-gray-200"
                                          } ${
                                            value[1].length - 1 === subIndex &&
                                            "items-center font-bold text-[16px] lg:text-[20px]"
                                          }`}
                                          key={subIndex}
                                        >
                                          {value[1].length - 1 > subIndex
                                            ? subIndex + 1 + ". "
                                            : "Numarul de raspunsuri corecte: "}{" "}
                                          <span
                                            className={`ml-1 ${
                                              value[1].length - 1 ===
                                                subIndex &&
                                              "  text-[28px] lg:text-[42px]"
                                            }`}
                                          >
                                            {value[1].length - 1 === subIndex
                                              ? item
                                              : item[0]}{" "}
                                            <img
                                              className="mt-2"
                                              src={
                                                questionImages[
                                                  extractTextFromImageUrl(
                                                    item[1]
                                                  )
                                                ]
                                              }
                                            />
                                            <div
                                              className={` ${
                                                subIndex ===
                                                  value[1].length - 1 &&
                                                "hidden"
                                              }`}
                                            >
                                              Raspunsul a fost{" "}
                                              <span
                                                className={`font-bold ${
                                                  item[2] === "gresit"
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                                }`}
                                              >
                                                {item[2]}
                                              </span>
                                            </div>
                                          </span>{" "}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                );
                            }
                          )}
                        </ul>
                      </li>
                    </>
                  );
                }
                return null;
              })}
          </ul>
        </div>
        {/*Inregistrare Cursant*/}
        <form
          onSubmit={(e) => registerPasswordHandler(e)}
          className={`w-[80%] mt-[.5rem] ${
            start !== 2 && "hidden"
          } flex flex-col items-center text-[16px] lg:text-[24px] font-bold h-full`}
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
            value={userID}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <label className="mt-[1rem]">EMAIL</label>

          <input
            type="email"
            className=" border-[2px] border-black w-full w-full lg:w-[32rem] h-[2rem] px-[1rem] "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="mt-[1rem]">PAROLA</label>
          <div className="flex mt-[.2rem] w-full lg:w-[32rem]">
            <input
              ref={passwordInput}
              type={`${showPassword ? "text" : "password"}`}
              className=" border-[2px] border-black w-full lg:w-[30rem] h-[2rem] px-[1rem]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              required
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
            question={handleChildQuestion}
            currentQuestion={questionNumber}
            randomNumber={randomNumber}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center text-center h-full ${
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
              setQuestionNumber(0);
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
            className={`mx-[2rem]  w-[12rem] h-[4rem] shadow-md z-20 ${
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
