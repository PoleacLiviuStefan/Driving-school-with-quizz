import React, { useState } from "react";
import Answer from "./Answer";

const IntrebariAcomodare = ({ start }) => {
  const [question, setQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const answers = [
    ["A", "6", false],
    ["B", "10", false],
    ["C", "2", true],
    ["D", "15", false],
    ["E", "13", false],
    ["F", "15", false],
  ];
  const checkExistence=(element)=>
  {
    return selectedAnswer.includes(element);
  }
  return (
    <div
      className={`relative top-0 w-full ${
        start !== 4 && "hidden"
      } flex flex-col items-center`}
    >
      <h3 className="text-center w-screen bg-white lg:text-[20px] font-bold text-gray-500 italic">
        Intrebari de acomodare
      </h3>
      <div
        className={`flex flex-col items-center text-[28px] lg:text-[42px] font-bold mt-[2rem] ${
          question !== 0 && "hidden"
        }`}
      >
        <h4>1+1 = ?</h4>
        <div
          onClick={() => {
            if (checkExistence(0)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 0));
           
            } else {
              setSelectedAnswer([...selectedAnswer, 0]);
            }
            console.log(selectedAnswer);
          }}
        >
          <Answer answerOption={answers[0]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(1)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 1));
              console.log("da");
            } else {
              setSelectedAnswer([...selectedAnswer, 1]);
            }
   
          }}
        >
          <Answer answerOption={answers[1]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(2)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 2));
              console.log("da");
            } else {
              setSelectedAnswer([...selectedAnswer, 2]);
            }
      
          }}
        >
          <Answer answerOption={answers[2]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(3)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 3));
              console.log("da");
            } else {
              setSelectedAnswer([...selectedAnswer, 3]);
            }
 
          }}
        >
          <Answer answerOption={answers[3]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(4)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 4));
              console.log("da");
            } else {
              setSelectedAnswer([...selectedAnswer, 4]);
            }

          }}
        >
          <Answer answerOption={answers[4]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(5)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 5));
              console.log("da");
            } else {
              setSelectedAnswer([...selectedAnswer, 5]);
            }

          }}
        >
          <Answer answerOption={answers[5]} />
        </div>
      </div>
    </div>
  );
};

export default IntrebariAcomodare;
