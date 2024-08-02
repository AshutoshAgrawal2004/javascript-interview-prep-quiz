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
      className={cn(
        "bg-slate-900 justify-start whitespace-pre-line text-left h-[unset] px-0 py-0"
      )}
    >
      <div
        className={cn(
          "text-xl flex items-center justify-center h-full w-12 rounded-tl-[8px] rounded-bl-[8px]"
        )}
      >
        {option.letter}
      </div>
      <div
        className={cn(
          "bg-background flex-1 py-4 px-4 rounded-tr-[8px] rounded-br-[8px]",
          {
            "border-2 border-l-0": showInGreen || showInRed,
            "bg-red-950 border-red-800": showInRed,
            "bg-green-950 border-green-800": showInGreen,
          }
        )}
      >
        {option.option}
      </div>
    </Button>
  );
};
