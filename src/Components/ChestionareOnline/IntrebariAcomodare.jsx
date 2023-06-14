import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { useDispatch, useSelector } from "react-redux";
import { AddAnswer } from "../../redux/QuizzSystem";
import data from './Questions' 
const IntrebariAcomodare = ({ start, checkedAnswers, currentQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const answers = [
    [
      ["A", "6"],
      ["B", "10"],
      ["C", "2"],
      ["D", "15"],
      ["E", "13"],
      ["F", "15"],
    ],
    [
      ["A", "10"],
      ["B", "20"],
      ["C", "30"],
      ["D", "60"],
      ["E", "100"],
    ],
    [
      ["A", "Mar"],
      ["B", "Piersica"],
      ["C", "Lapte"],
      ["D", "Ou"],
      ["E", "Pruna"],
    ],
  ];
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
          currentQuestion !== 0 && "hidden"
        }`}
      >
        <h4>1+1 = ?</h4>
        <div
          onClick={() => {
            if (checkExistence(0)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 0));
              console.log("eliminat 0");
            } else {
              setSelectedAnswer([...selectedAnswer, 0]);
              console.log("adaugat 0");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][0]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(1)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 1));
              console.log("eliminat 1");
            } else {
              setSelectedAnswer([...selectedAnswer, 1]);
              console.log("adaugat 1");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][1]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(2)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 2));
              console.log("eliminat 2");
            } else {
              setSelectedAnswer([...selectedAnswer, 2]);
              console.log("adaugat 2");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][2]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(3)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 3));
              console.log("eliminat 3");
            } else {
              setSelectedAnswer([...selectedAnswer, 3]);
              console.log("adaugat 3");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][3]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(4)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 4));
              console.log("eliminat 4");
            } else {
              setSelectedAnswer([...selectedAnswer, 4]);
              console.log("adaugat 4");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][4]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(5)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 5));
              console.log("eliminat 5");
            } else {
              setSelectedAnswer([...selectedAnswer, 5]);
              console.log("adaugat 5");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[0][5]} />
        </div>
      </div>
      <div
        className={`flex flex-col items-center text-[28px] lg:text-[42px] font-bold mt-[2rem] ${
          currentQuestion !== 1 && "hidden"
        }`}
      >
        <h4>Cate minute sunt intr-o ora ?</h4>
        <div
          onClick={() => {
            if (checkExistence(0)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 0));
              console.log("eliminat 0");
            } else {
              setSelectedAnswer([...selectedAnswer, 0]);
              console.log("adaugat 0");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[1][0]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(1)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 1));
              console.log("eliminat 1");
            } else {
              setSelectedAnswer([...selectedAnswer, 1]);
              console.log("adaugat 1");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[1][1]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(2)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 2));
              console.log("eliminat 2");
            } else {
              setSelectedAnswer([...selectedAnswer, 2]);
              console.log("adaugat 2");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[1][2]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(3)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 3));
              console.log("eliminat 3");
            } else {
              setSelectedAnswer([...selectedAnswer, 3]);
              console.log("adaugat 3");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[1][3]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(4)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 4));
              console.log("eliminat 4");
            } else {
              setSelectedAnswer([...selectedAnswer, 4]);
              console.log("adaugat 4");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[1][4]} />
        </div>
      </div>
      <div
        className={`flex flex-col items-center text-[28px] lg:text-[42px] font-bold mt-[2rem] ${
          currentQuestion !== 2 && "hidden"
        }`}
      >
        <h4>Care din urmatoarele alimente sunt fructe?</h4>
        <div
          onClick={() => {
            if (checkExistence(0)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 0));
              console.log("eliminat 0");
            } else {
              setSelectedAnswer([...selectedAnswer, 0]);
              console.log("adaugat 0");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[2][0]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(1)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 1));
              console.log("eliminat 1");
            } else {
              setSelectedAnswer([...selectedAnswer, 1]);
              console.log("adaugat 1");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[2][1]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(2)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 2));
              console.log("eliminat 2");
            } else {
              setSelectedAnswer([...selectedAnswer, 2]);
              console.log("adaugat 2");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[2][2]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(3)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 3));
              console.log("eliminat 3");
            } else {
              setSelectedAnswer([...selectedAnswer, 3]);
              console.log("adaugat 3");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[2][3]} />
        </div>
        <div
          onClick={() => {
            if (checkExistence(4)) {
              setSelectedAnswer(selectedAnswer.filter((item) => item !== 4));
              console.log("eliminat 4");
            } else {
              setSelectedAnswer([...selectedAnswer, 4]);
              console.log("adaugat 4");
            }
          }}
          className="my-[2rem]"
        >
          <Answer answerOption={data.questions.answers[2][4]} />
        </div>
      </div>
    </div>
  );
};

export default IntrebariAcomodare;
