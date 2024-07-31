import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";

export const NavButtons = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );

  const navigate = useNavigate();
  const onNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      navigate("/result");
    } else {
      navigate(`/quiz/${currentQuestionIndex + 1}`);
    }
  };

  const onPrevQuestion = () => {
    navigate(`/quiz/${currentQuestionIndex - 1}`);
  };

  return (
    <div className="flex justify-between items-center">
      <Button
        variant="secondary"
        onClick={onPrevQuestion}
        disabled={currentQuestionIndex === 0}
        className="gap-2"
      >
        <ChevronLeft size="20" />
        Previous
      </Button>
      <span className="text-xl font-semibold">
        Question {currentQuestionIndex + 1}
      </span>
      <Button onClick={onNextQuestion} className="gap-2">
        Next
        <ChevronRight size="20" />
      </Button>
    </div>
  );
};
