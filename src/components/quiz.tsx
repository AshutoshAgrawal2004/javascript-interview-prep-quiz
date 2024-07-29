import { Question } from "./question";

interface QuizProps {}

export const Quiz: React.FC<QuizProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-center">Javascript Quiz</h1>
      <div>
        <Question />
      </div>
    </div>
  );
};
