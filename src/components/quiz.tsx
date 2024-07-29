import { IOption, IQuestion } from "@/types/question";
import { useState } from "react";
import { Question } from "./question";

interface QuizProps {
  questionSet: IQuestion[];
}

export const Quiz: React.FC<QuizProps> = ({ questionSet }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<IOption | null>(null);

  const onAnswer = (option: IOption) => {
    if (userAnswer !== null) return;
    setUserAnswer(option);
  };

  const onNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setUserAnswer(null);
  };
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-center">Javascript Quiz</h1>
      <div>
        <Question
          question={questionSet[questionIndex]}
          userAnswer={userAnswer}
          onAnswer={onAnswer}
          onNextQuestion={onNextQuestion}
        />
      </div>
    </div>
  );
};
