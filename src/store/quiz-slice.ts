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
    jumpToQuestion: (state, action: PayloadAction<number>) => {
      if (action.payload >= state.questions.length) return;
      if (action.payload < 0) return;
      state.currentQuestionIndex = action.payload;
      state.currentQuestionId = state.questions[action.payload].id;
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

export const { answerQuestion, jumpToQuestion, startQuiz, resetSavedAnswers } =
  quizSlice.actions;

export default quizSlice.reducer;
