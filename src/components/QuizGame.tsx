import React, { useState } from "react";
import { motion } from "framer-motion";

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

const shuffle = ([...array]) => {
  const n = array.length - 1;
  for (var i = n; i >= 0; i = i - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const QuizGame = (props: { quizzes: Quiz[] }) => {
  const questionCount = props.quizzes.length;
  const quizzes = props.quizzes;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const quiz = quizzes[questionNumber - 1];

  const onHandleClick = (option: string) => {
    if (option === quiz.answer) {
      setResults([...results, true]);
    } else {
      setResults([...results, false]);
    }
    setQuestionNumber(questionNumber + 1);
    if (questionNumber === questionCount) {
      setIsDone(true);
    }
  };

  const retry = () => {
    setQuestionNumber(1);
    setIsDone(false);
    setResults([]);
  };

  return isDone ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto"
    >
      <div className="h-[60px] w-full bg-primary text-center text-2xl font-bold leading-[60px]">
        終了！
      </div>

      <div className="mb-[10px] w-full border-[1px] border-gray-300 bg-white py-[20px] text-center">
        {quizzes.map((quiz, index) => (
          <div className="my-5 mx-5 text-left" key={index}>
            <h3 className="text-xl font-bold">
              第{index + 1}問：{quiz.question}
            </h3>
            <p className="indent-3">答え：{quiz.answer}</p>
            <p className="indent-3">{results[index] ? "正解" : "不正解"}</p>
          </div>
        ))}
        <button className="btn btn-primary text-lg float-right mx-5" onClick={() => retry()}>
          再挑戦！
        </button>
        <div className="clear-right"></div>
      </div>
    </motion.div>
  ) : (
    <div className="mx-auto">
      <div className="h-[60px] w-full bg-primary text-center text-2xl font-bold leading-[60px]">{`${questionNumber} / ${questionCount}`}</div>
      <div className="mb-[10px] w-full border-[1px] border-gray-300 bg-white py-[20px] text-center">
        {quiz.question}
      </div>
      {shuffle(quiz.options).map((option: string, index: number) => (
        <button
          className="mx-auto my-[1px] block h-1/4 w-full border-[1px] border-gray-300 bg-white hover:bg-gray-300 active:bg-secondary"
          key={index}
          onClick={() => onHandleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
