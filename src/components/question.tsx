import { IOption, IQuestion } from "@/types/question";
import { Option } from "./option";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";

interface QuestionProps {
  question: IQuestion;
  userAnswer: IOption | null;
  onAnswer: (option: IOption) => void;
  onNextQuestion: () => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  userAnswer,
  onAnswer,
  onNextQuestion,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h4 className="text-xl">{question.question}</h4>
        {question.codeBlock && (
          <SyntaxHighlighter language={"javascript"} style={dracula}>
            {question.codeBlock}
          </SyntaxHighlighter>
        )}
      </div>
      <div className="flex flex-col gap-6">
        {question.options.map((option) => (
          <Option
            key={option.option}
            option={option}
            userAnswer={userAnswer}
            onAnswer={onAnswer}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onNextQuestion}>Next Question</Button>
      </div>
      {userAnswer !== null && (
        <div>
          <h5 className="text-green-400 mb-4">Explanation</h5>
          <p className="whitespace-pre-line">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};
