import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Options } from "./options";
import { Explanation } from "./explanation";
import { NavButtons } from "./nav-buttons";
import { useAppSelector } from "@/store/store";

interface QuestionProps {}

export const Question: React.FC<QuestionProps> = ({}) => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );

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
