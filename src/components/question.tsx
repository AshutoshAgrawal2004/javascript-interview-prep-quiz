import { Option } from "./option";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { nextQuestion, prevQuestion } from "@/store/quiz-slice";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QuestionProps {}

export const Question: React.FC<QuestionProps> = ({}) => {
  const { questions, currentQuestionIndex, currentQuestionId, userAnswers } =
    useAppSelector((state) => state.quiz);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const question = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionId];

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
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center gap-8">
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
      <div className="flex flex-col gap-8">
        <div className="">
          <h4 className="text-2xl font-semibold">{question.question}</h4>
          {question.codeBlock && (
            <SyntaxHighlighter language={"javascript"} style={dracula}>
              {question.codeBlock}
            </SyntaxHighlighter>
          )}
          <div className="flex flex-col gap-4 mt-8">
            {question.options.map((option) => (
              <Option key={option.id} option={option} />
            ))}
          </div>
        </div>
      </div>
      {userAnswer && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">
              Show Explanation
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              {question.explanation}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};
