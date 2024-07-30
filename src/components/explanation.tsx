import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSelector } from "@/store/store";

export const Explanation = () => {
  const { questions, currentQuestionIndex, userAnswers, currentQuestionId } =
    useAppSelector((state) => state.quiz);
  const question = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionId];

  if (!userAnswer) return null;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          Show Explanation
        </AccordionTrigger>
        <AccordionContent className="whitespace-pre-line">
          {question.explanation}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
