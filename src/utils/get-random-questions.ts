import { IQuestion } from "@/types/question";

export const getRandomQuestions = (
  questions: IQuestion[],
  numQuestions: number
): IQuestion[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};
