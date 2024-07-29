import { IQuestion } from "@/types/question";
import { questionRawData } from "./question-raw-data";

const parseQuiz = (input: string) => {
  const questions = input.split("---").filter((q) => q.trim());
  const quiz: IQuestion[] = questions.map((question, index) => {
    const id = String(index + 1);
    const questionMatch = question.match(/###### \d+\. (.*)/);
    const codeMatch = question.match(/```javascript\n([\s\S]*?)```/);
    const optionsMatch = [...question.matchAll(/- (\w): (.*)/g)];
    const answerMatch = question.match(
      /<details><summary><b>Answer<\/b><\/summary>\n<p>\n\n#### Answer: (\w)/
    );
    const explanationMatch = question.match(
      /<details><summary><b>Answer<\/b><\/summary>\n<p>\n\n#### Answer: \w\n\n([\s\S]*?)<\/p>/
    );

    const parsedOptions = optionsMatch.map(([_, letter, text]) => ({
      letter,
      option: text,
      isCorrect: letter === answerMatch?.[1],
    }));

    return {
      id,
      question: questionMatch ? questionMatch[1].trim() : "",
      codeBlock: codeMatch ? codeMatch[1].trim() : "",
      options: parsedOptions,
      ans: answerMatch ? answerMatch[1] : "",
      explanation: explanationMatch ? explanationMatch[1].trim() : "",
    };
  });

  return quiz;
};

export const questionsData = parseQuiz(questionRawData);
