import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import indicator1 from "../../Images/indicator1.jpg";
import indicator2 from "../../Images/indicator2.jpg";
import indicator3 from "../../Images/indicator3.jpg";
import motoimg1 from "../../Images/motoimg1.jpg";
import motoimg2 from "../../Images/motoimg2.jpg";
import motoimg3 from "../../Images/motoimg3.jpg";
import motoimg4 from "../../Images/motoimg4.jpg";
import motoimg5 from "../../Images/motoimg5.jpg";
import motoimg6 from "../../Images/motoimg6.jpg";
import motoimg7 from "../../Images/motoimg7.jpg";
import motoimg8 from "../../Images/motoimg8.jpg";
import motoimg9 from "../../Images/motoimg9.jpg";
import motoimg10 from "../../Images/motoimg10.jpg";
import motoimg11 from "../../Images/motoimg11.jpg";
import motoimg12 from "../../Images/motoimg12.jpg";
import motoimg13 from "../../Images/motoimg13.jpg";
import motoimg14 from "../../Images/motoimg14.jpg";
import motoimg15 from "../../Images/motoimg15.jpg";
import motoimg16 from "../../Images/motoimg16.jpg";
import motoimg17 from "../../Images/motoimg17.jpg";
import motoimg18 from "../../Images/motoimg18.jpg";
import motoimg19 from "../../Images/motoimg19.jpg";
import motoimg20 from "../../Images/motoimg20.jpg";
import motoimg21 from "../../Images/motoimg21.jpg";
import motoimg22 from "../../Images/motoimg22.jpg";
import motoimg23 from "../../Images/motoimg23.jpg";
import motoimg24 from "../../Images/motoimg24.jpg";
import motoimg25 from "../../Images/motoimg25.jpg";
import motoimg26 from "../../Images/motoimg26.jpg";
import motoimg27 from "../../Images/motoimg27.jpg";
import motoimg28 from "../../Images/motoimg28.jpg";
import motoimg29 from "../../Images/motoimg29.jpg";
import motoimg30 from "../../Images/motoimg30.jpg";
import motoimg31 from "../../Images/motoimg31.jpg";
import motoimg32 from "../../Images/motoimg32.jpg";
import motoimg33 from "../../Images/motoimg33.jpg";
import motoimg34 from "../../Images/motoimg34.jpg";
import motoimg35 from "../../Images/motoimg35.jpg";
import motoimg36 from "../../Images/motoimg36.jpg";
import motoimg37 from "../../Images/motoimg37.jpg";
import motoimg38 from "../../Images/motoimg38.jpg";
import motoimg39 from "../../Images/motoimg39.jpg";
import motoimg40 from "../../Images/motoimg40.jpg";
import motoimg41 from "../../Images/motoimg41.jpg";
import motoimg42 from "../../Images/motoimg42.jpg";
import motoimg43 from "../../Images/motoimg43.jpg";
import motoimg44 from "../../Images/motoimg44.jpg";
import motoimg45 from "../../Images/motoimg45.jpg";
import motoimg46 from "../../Images/motoimg46.jpg";
import motoimg47 from "../../Images/motoimg47.jpg";

import data from "./Questions";

const IntrebariAcomodare = ({ start, checkedAnswers, currentQuestion,randomNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const checkExistence = (element) => {
    return selectedAnswer.includes(element);
  };
  useEffect(() => {
    checkedAnswers(selectedAnswer);
  }, [selectedAnswer]);
  useEffect(() => {
    setSelectedAnswer([]);
  }, [currentQuestion]);
  return (
    <div className={`top-0 w-full `}>
      <div
        className={`relative top-0 w-full ${
          start !== 4 && "hidden"
        } flex flex-col items-center`}
      >
        <h3 className="text-center w-screen bg-white lg:text-[20px] font-bold text-gray-500 italic">
          Intrebari de acomodare {currentQuestion + 1}/3
        </h3>
        {
 data.questions.Acomodare.map((question, index) => (
    <div
      key={index}
      className={`flex flex-col items-center text-[18px] lg:text-[28px] font-bold mt-[2rem] text-center ${
        currentQuestion !== index && "hidden"
      }`}
    >
      <h4>{question}</h4>
      {data.questions.answersAcomodare[index].map((answerOption, answerIndex) => (
        <div
          key={answerIndex}
          onClick={() => {
            if (checkExistence(answerIndex)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== answerIndex));
              console.log("eliminat", answerIndex);
            } else {
              setSelectedAnswer([...selectedAnswer, answerIndex]);
              console.log("adaugat", answerIndex);
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={answerOption} />
        </div>
      ))}
    </div>
  ))
}

        
      </div>
      <div
        className={`relative top-0 w-full ${
          start !== 6  && "hidden"
        } flex flex-col items-center`}
      >
              {
 data.questions.examenCategoriaB.map((question, index) => (
    <div
      key={index}
      className={`flex flex-col items-center text-[18px] lg:text-[28px] font-bold mt-[2rem] text-center ${
        currentQuestion !== index && "hidden"
      }`}
    >
      <h4>{data.questions.examenCategoriaB[randomNumber]}</h4>
      <img src={randomNumber===89 ? indicator3 : randomNumber===88 ? indicator2: randomNumber===87 && indicator1}></img>
      {data.questions.answersExamen[randomNumber].map((answerOption, answerIndex) => (
        <div
          key={answerIndex}
          onClick={() => {
            if (checkExistence(answerIndex)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== answerIndex));
              console.log("eliminat", answerIndex);
              console.log(randomNumber)
            } else {
              setSelectedAnswer([...selectedAnswer, answerIndex]);
              console.log("adaugat", answerIndex);
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={answerOption} />
        </div>
      ))}
    </div>
  ))
}
      </div>
      {/* Pentru categoria A */}
      <div
        className={`relative top-0 w-full ${
          start !== 11  && "hidden"
        } flex flex-col items-center`}
      >
              {
 data.questions.examenCategoriaA.map((question, index) => (
    <div
      key={index}
      className={`flex flex-col items-center text-[18px] lg:text-[28px] font-bold mt-[2rem] text-center ${
        currentQuestion !== index && "hidden"
      }`}
    >
      <h4>{data.questions.examenCategoriaA[randomNumber]}</h4>
   
      {data.questions.answersExamenCategoriaA[randomNumber].map((answerOption, answerIndex) => (
        <div
          key={answerIndex}
          onClick={() => {
            if (checkExistence(answerIndex)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== answerIndex));
              console.log("eliminat", answerIndex);
              console.log(randomNumber)
            } else {
              setSelectedAnswer([...selectedAnswer, answerIndex]);
              console.log("adaugat", answerIndex);
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={answerOption} />
        </div>
      ))}
    </div>
  ))
}
      </div>
    </div>
  );
};

export default IntrebariAcomodare;
