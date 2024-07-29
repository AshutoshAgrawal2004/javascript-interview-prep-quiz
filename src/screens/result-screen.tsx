import { useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";

export const ResultScreen = () => {
  const navigate = useNavigate();
  const { userAnswers, questions } = useAppSelector((state) => state.quiz);

  const score = Object.keys(userAnswers).reduce((acc, key) => {
    if (userAnswers[Number(key)]?.isCorrect) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const restartQuiz = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl">Quiz Result</h1>
      <p className="text-2xl">
        Your score is {score} out of {questions.length}
      </p>
      <button className="btn btn-primary" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};
