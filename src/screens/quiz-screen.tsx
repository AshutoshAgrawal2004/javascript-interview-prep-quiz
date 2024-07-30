import { Question } from "@/components/question";
import JavaScriptLogo from "../assets/JavaScript-logo.jpg";

export const QuizScreen = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold border-b border-secondary pb-4 flex justify-center items-center gap-4">
        <img src={JavaScriptLogo} alt="JavaScript Logo" className="w-8 h-8" />
        Javascript Quiz
      </h1>

      <div>
        <Question />
      </div>
    </div>
  );
};
