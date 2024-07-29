// quizSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, IOption } from "@/types/question";

export interface QuizState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  currentQuestionId: string;
  userAnswers: { [key: string]: IOption | null };
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  currentQuestionId: "",
  userAnswers: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (
      state,
      action: PayloadAction<{ questionId: string; answer: IOption }>
    ) => {
      state.userAnswers[action.payload.questionId] = action.payload.answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
        state.currentQuestionId =
          state.questions[state.currentQuestionIndex].id;
      }
    },
    startQuiz: (state, action: PayloadAction<{ questions: IQuestion[] }>) => {
      state.currentQuestionIndex = 0;
      state.questions = action.payload.questions;
      state.currentQuestionIndex = 0;
      state.currentQuestionId = state.questions[0].id;

      const newAnswers: { [key: string]: IOption | null } = {};
      Object.keys(state.userAnswers).forEach((key) => {
        if (state.userAnswers[key]?.isCorrect) {
          newAnswers[key] = { ...state.userAnswers[key] };
        }
      });

      state.userAnswers = { ...newAnswers };
    },
    resetSavedAnswers: (state) => {
      state.userAnswers = {};
    },
  },
});

export const { answerQuestion, nextQuestion, startQuiz, resetSavedAnswers } =
  quizSlice.actions;

export default quizSlice.reducer;
