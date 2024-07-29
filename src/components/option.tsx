import { IOption } from "@/types/question";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { answerQuestion } from "@/store/quiz-slice";

interface OptionProps {
  option: IOption;
}

export const Option = ({ option }: OptionProps) => {
  const { currentQuestionId, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();

  const userAnswer = userAnswers[currentQuestionId];

  const showInRed =
    userAnswer && userAnswer.letter === option.letter && !option.isCorrect;
  const showInGreen = userAnswer && option.isCorrect;

  const onAnswer = () => {
    if (userAnswer) return;
    dispatch(
      answerQuestion({ questionId: currentQuestionId, answer: { ...option } })
    );
  };

  return (
    <Button
      variant="outline"
      onClick={onAnswer}
      className={cn("justify-start gap-4", {
        "bg-red-800 hover:bg-red-600": showInRed,
        "bg-green-800 hover:bg-green-600": showInGreen,
      })}
    >
      <div className="rounded-full p-1 bg-slate-900 h-6 w-6 flex items-center justify-center">
        {option.letter}
      </div>
      {option.option}
    </Button>
  );
};
