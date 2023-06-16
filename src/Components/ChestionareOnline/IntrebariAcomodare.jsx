import React, { useEffect, useState } from "react";
import Answer from "./Answer";

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
    <div className={`top-0 w-full ${start !== 4 && start !== 6 && "hidden"}`}>
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
          start !== 6 && "hidden"
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
    </div>
  );
};

export default IntrebariAcomodare;
