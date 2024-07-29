import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuizScreen, ResultScreen, WelcomeScreen } from "./screens";

function App() {
  return (
    <div className=" w-full h-full min-h-screen pt-8">
      <div className="container max-w-5xl">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
