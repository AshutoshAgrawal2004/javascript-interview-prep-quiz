import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Options } from "./options";
import { Explanation } from "./explanation";
import { NavButtons } from "./nav-buttons";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { jumpToQuestion } from "@/store/quiz-slice";

interface QuestionProps {}

export const Question: React.FC<QuestionProps> = ({}) => {
  const params = useParams();
  const navQuestionIndex = parseInt(params.questionIndex || "-1");
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navQuestionIndex != currentQuestionIndex) {
      dispatch(jumpToQuestion(navQuestionIndex));
    }
  }, [navQuestionIndex]);

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col gap-12 pb-8">
      <NavButtons />
      <div className="flex flex-col gap-8">
        <div className="">
          <h4 className="text-xl font-semibold">{question.question}</h4>
          {question.codeBlock && (
            <SyntaxHighlighter language={"javascript"} style={dracula}>
              {question.codeBlock}
            </SyntaxHighlighter>
          )}
          <Options />
        </div>
      </div>
      <Explanation />
    </div>
  );
};
