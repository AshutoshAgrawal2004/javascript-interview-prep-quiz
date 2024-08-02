import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { questionsData } from "@/data/questions-data";
import { resetSavedAnswers, startQuiz } from "@/store/quiz-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getRandomQuestions } from "@/utils/get-random-questions";
import { ArrowRight, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const userAnswers = useAppSelector((state) => state.quiz.userAnswers);
  const dispatch = useAppDispatch();

  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const onStartQuiz = () => {
    let excludeQuestions: string[] = [];

    Object.keys(userAnswers).forEach((key) => {
      if (userAnswers[key]?.isCorrect) {
        excludeQuestions.push(key);
      }
    });

    // If user is requesting more questions that what is available for him
    // then reset the saved answers
    if (questionsData.length - excludeQuestions.length < numberOfQuestions) {
      onResetAnswers();
      excludeQuestions = [];
    }

    const questionsSet = getRandomQuestions(
      questionsData,
      numberOfQuestions,
      excludeQuestions
    );
    dispatch(startQuiz({ questions: questionsSet }));
    navigate("/quiz/0");
  };

  const onResetAnswers = () => {
    dispatch(resetSavedAnswers());
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <p className="p-4 italic rounded-xl  bg-slate-900">
        From basic to advanced: test how well you know JavaScript, refresh your
        knowledge a bit or prepare for your coding interview!
        <br />
        <br /> <span className="float-right">~ Fellow Developer</span>
      </p>

      <div className="flex flex-col lg:w-[40%] w-[75%] gap-4 justify-center items-center">
        <p className="text-sm text-gray-500">Choose number of questions</p>
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

        <span className="text-6xl font-semibold">{numberOfQuestions}</span>
      </div>
      <Button className="text-base gap-2" onClick={onStartQuiz}>
        Start Quiz
        <ArrowRight size="20" />
      </Button>

      {Object.keys(userAnswers).length ? (
        <Button
          variant="link"
          className="text-gray-500 gap-2"
          onClick={onResetAnswers}
        >
          <RotateCcwIcon size="20" /> Reset Saved Answers
        </Button>
      ) : null}

      <hr className="w-full border-b border-b-secondary" />
      <HowItWorks />
      <Footer />
    </div>
  );
};
