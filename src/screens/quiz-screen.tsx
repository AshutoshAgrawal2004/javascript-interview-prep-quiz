import { Question } from "@/components/question";

export const QuizScreen = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-center">Javascript Quiz</h1>
      <div>
        <Question />
      </div>
    </div>
  );
};
