import { BookOpenText } from "lucide-react";

export const HowItWorks = () => {
  return (
    <div className="how-it-works flex flex-col gap-6">
      <h4 className="flex gap-2 text-2xl items-center font-semibold">
        <BookOpenText className="text-slate-200" /> Guide
      </h4>
      <ol className="list-decimal list-inside flex flex-col gap-4">
        <li>
          <strong>Set Questions: </strong>
          Specify the number of questions per session using the input bar.
        </li>
        <li>
          <strong>Start the Quiz: </strong>
          Begin with randomly selected questions from our question bank.
        </li>
        <li>
          <strong>Answer Questions: </strong>
          Choose the correct multiple-choice option by clicking on it.
        </li>
        <li>
          <strong>Show Explanation: </strong>
          View explanations after each question to understand the correct
          answer.
        </li>
        <li>
          <strong>Check Your Score: </strong>
          After submitting all the answers check your final score for further
          improvisation.
        </li>
      </ol>
      <p>
        By following these steps, you'll be able to effectively practice
        JavaScript concepts and improve your skills. Good luck, and have fun!
      </p>
    </div>
  );
};
