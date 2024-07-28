import { IQuestion } from "@/types/question";
import { Option } from "./option";

interface QuestionProps {
  question: IQuestion;
  userAnsweredCorrectly: boolean | null;
  onAnswer: (isCorrect: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  userAnsweredCorrectly,
  onAnswer,
}) => {
  return (
    <div className="flex flex-col gap-12">
      <h4 className="text-xl">{question.question}</h4>
      <p className="whitespace-pre-line">{question.codeBlock}</p>
      <div className="flex flex-col gap-6">
        {question.options.map((option) => (
          <Option
            key={option.option}
            option={option}
            userAnsweredCorrectly={userAnsweredCorrectly}
            onAnswer={onAnswer}
          />
        ))}
      </div>
      {userAnsweredCorrectly !== null && (
        <p className="whitespace-pre-line">{question.explanation}</p>
      )}
    </div>
  );
};
