import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { questionsData } from "@/data/questions-data";
import { resetSavedAnswers, startQuiz } from "@/store/quiz-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getRandomQuestions } from "@/utils/get-random-questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const userAnswers = useAppSelector((state) => state.quiz.userAnswers);
  const dispatch = useAppDispatch();

  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const onStartQuiz = () => {
    const excludeQuestions: string[] = [];

    Object.keys(userAnswers).forEach((key) => {
      if (userAnswers[key]?.isCorrect) {
        excludeQuestions.push(key);
      }
    });

    const questionsSet = getRandomQuestions(
      questionsData,
      numberOfQuestions,
      excludeQuestions
    );
    dispatch(startQuiz({ questions: questionsSet }));
    navigate("/quiz");
  };

  const onResetAnswers = () => {
    dispatch(resetSavedAnswers());
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl">Welcome to the Javascript Quiz</h1>
      <p className="text-lg">
        This quiz app is designed to help you practice JavaScript concepts with
        various questions. Good luck and have fun!
      </p>
      <div className="flex flex-col lg:w-[60%] gap-4 justify-center items-center">
        <Slider
          value={[numberOfQuestions]}
          onValueChange={(val) => {
            setNumberOfQuestions(val[0]);
          }}
          defaultValue={[10]}
          min={5}
          max={150}
          step={5}
        />
        <p className="text-lg">Number of questions: {numberOfQuestions}</p>
      </div>
      <Button onClick={onStartQuiz}>Start Quiz</Button>

      {Object.keys(userAnswers).length ? (
        <Button variant="outline" onClick={onResetAnswers}>
          Reset Saved Answers
        </Button>
      ) : null}

      <HowItWorks />
    </div>
  );
};
