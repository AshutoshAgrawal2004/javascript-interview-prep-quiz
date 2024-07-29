import { IOption } from "@/types/question";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface OptionProps {
  option: IOption;
  userAnswer: IOption | null;
  onAnswer: (option: IOption) => void;
}

export const Option = ({ option, userAnswer, onAnswer }: OptionProps) => {
  const showInRed =
    userAnswer !== null &&
    userAnswer.letter === option.letter &&
    !option.isCorrect;
  const showInGreen = userAnswer !== null && option.isCorrect;
  return (
    <Button
      variant="outline"
      onClick={() => onAnswer({ ...option })}
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
