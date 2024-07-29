import { IOption, IQuestion } from "@/types/question";
import { Option } from "./option";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { nextQuestion } from "@/store/quiz-slice";

interface QuestionProps {}

export const Question: React.FC<QuestionProps> = ({}) => {
  const { questions, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();

  const question = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];

  const onNextQuestion = () => {
    dispatch(nextQuestion());
  };

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
          <Option key={option.option} option={option} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onNextQuestion}>Next Question</Button>
      </div>
      {userAnswer && (
        <div>
          <h5 className="text-green-400 mb-4">Explanation</h5>
          <p className="whitespace-pre-line">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};