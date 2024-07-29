import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/questions-data";
import { startQuiz } from "@/store/quiz-slice";
import { useAppDispatch } from "@/store/store";
import { getRandomQuestions } from "@/utils/get-random-questions";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const onStartQuiz = () => {
    const questionsSet = getRandomQuestions(questionsData, 10);
    dispatch(startQuiz({ questions: questionsSet }));
    navigate("/quiz");
  };

  return (
    <div>
      <h1 className="text-4xl mb-8">Welcome to the Javascript Quiz</h1>
      <Button onClick={onStartQuiz}>Start Quiz</Button>
    </div>
  );
};
