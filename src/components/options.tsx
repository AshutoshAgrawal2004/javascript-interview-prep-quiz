import { useAppSelector } from "@/store/store";
import { Option } from "./option";

export const Options = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col gap-4 mt-8">
      {question.options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </div>
  );
};
