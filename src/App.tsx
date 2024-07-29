import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuizScreen, ResultScreen, WelcomeScreen } from "./screens";

function App() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen pt-8">
      <div className="container flex-1 max-w-5xl">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        </Router>
      </div>
      <footer className="p-6 text-center">
        <p className="text-lg mb-4">
          The questions in this quiz are sourced from{" "}
          <a
            href="https://github.com/lydiahallie/javascript-questions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Lydia Hallie’s JavaScript Questions
          </a>
          . We are grateful for the open-source contributions that made this
          possible.
        </p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/AshutoshAgrawal2004"
            className="underline"
          >
            Ashutosh Agrawal
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
