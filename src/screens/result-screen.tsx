import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/store";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const ResultScreen = () => {
  const navigate = useNavigate();
  const { userAnswers, questions } = useAppSelector((state) => state.quiz);

  const score = useMemo(() => {
    let score = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id]?.isCorrect) {
        score++;
      }
    });
    return score;
  }, [questions, userAnswers]);

  const restartQuiz = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold">Final Result 🎉</h1>
      <p>
        Your score is <strong>{score}</strong> out of {questions.length}
      </p>
      <div className="grid grid-cols-5 gap-4 my-6">
        {questions.map((question, i) => {
          const isSkipped = !!!userAnswers[question.id];
          const isCorrect = userAnswers[question.id]?.isCorrect;
          return (
            <div
              className={cn("h-12 w-12 flex justify-center items-center", {
                "bg-green-600": !isSkipped && isCorrect,
                "bg-red-600": !isSkipped && !isCorrect,
                "bg-yellow-600": isSkipped,
              })}
              key={question.id}
            >
              {i + 1}
            </div>
          );
        })}
      </div>

      <Button className="text-base" onClick={restartQuiz}>
        Restart Quiz
      </Button>

      <Footer />
    </div>
  );
};
