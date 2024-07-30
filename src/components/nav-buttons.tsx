import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { nextQuestion, prevQuestion } from "@/store/quiz-slice";

export const NavButtons = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const onNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      navigate("/result");
    } else {
      dispatch(nextQuestion());
    }
  };

  const onPrevQuestion = () => {
    dispatch(prevQuestion());
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <Button
        variant="secondary"
        onClick={onPrevQuestion}
        disabled={currentQuestionIndex === 0}
      >
        <ChevronLeft /> Previous Question
      </Button>
      <span className="text-2xl font-semibold">
        Question {currentQuestionIndex + 1}
      </span>
      <Button onClick={onNextQuestion}>
        Next Question <ChevronRight />
      </Button>
    </div>
  );
};
