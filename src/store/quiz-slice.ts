// quizSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, IOption } from "@/types/question";
import { questionsData } from "@/data/questions-data";

export interface QuizState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  userAnswers: { [key: number]: IOption | null };
}

const initialState: QuizState = {
  questions: questionsData,
  currentQuestionIndex: 0,
  userAnswers: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
    },
    answerQuestion: (
      state,
      action: PayloadAction<{ index: number; answer: IOption }>
    ) => {
      state.userAnswers[action.payload.index] = action.payload.answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.userAnswers = {};
    },
  },
});

export const { setQuestions, answerQuestion, nextQuestion, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
