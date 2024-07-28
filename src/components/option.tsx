import { IOption } from "@/types/question";

interface OptionProps {
  option: IOption;
  userAnsweredCorrectly: boolean | null;
  onAnswer: (isCorrect: boolean) => void;
}

export const Option = ({
  option,
  userAnsweredCorrectly,
  onAnswer,
}: OptionProps) => {
  return (
    <div
      onClick={() => onAnswer(option.isCorrect)}
      className="border border-white p-4"
    >
      {option.option}
      <span>
        {userAnsweredCorrectly !== null && (option.isCorrect ? "✔️" : "❌")}
      </span>
    </div>
  );
};
