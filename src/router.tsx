import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { QuizScreen, ResultScreen, WelcomeScreen } from "./screens";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <WelcomeScreen />,
      },
      {
        path: "/quiz/:questionIndex",
        element: <QuizScreen />,
      },
      {
        path: "/result",
        element: <ResultScreen />,
      },
    ],
  },
]);
