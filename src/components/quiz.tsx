import { IQuestion } from "@/types/question";
import { useState } from "react";
import { Question } from "./question";

interface QuizProps {
  questionSet: IQuestion[];
}

export const Quiz: React.FC<QuizProps> = ({ questionSet }) => {
  console.log(questionSet);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnsweredCorrectly, setUserAnsweredCorrectly] = useState<
    boolean | null
  >(null);
  const onAnswer = (isCorrect: boolean) => {
    setUserAnsweredCorrectly(isCorrect);
  };

  const onNext = () => {
    setQuestionIndex(questionIndex + 1);
    setUserAnsweredCorrectly(null);
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Javascript Quiz</h1>
      <div>
        <Question
          question={questionSet[questionIndex]}
          userAnsweredCorrectly={userAnsweredCorrectly}
          onAnswer={onAnswer}
        />
      </div>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
};
