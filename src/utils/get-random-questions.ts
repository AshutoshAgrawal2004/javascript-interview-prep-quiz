import { IQuestion } from "@/types/question";

export const getRandomQuestions = (
  questions: IQuestion[],
  numQuestions: number,
  excludedIds: string[]
): IQuestion[] => {
  // Filter out excluded questions
  const filteredQuestions = questions.filter(
    (question) => !excludedIds.includes(question.id)
  );

  // Shuffle the remaining questions
  const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());

  // Select the first `numQuestions` questions
  return shuffled.slice(0, numQuestions);
};
