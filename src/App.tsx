import { Route, Routes, useLocation } from "react-router-dom";
import { QuizScreen, ResultScreen, WelcomeScreen } from "./screens";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Header } from "./components/header";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="flex flex-col gap-8 w-full h-full min-h-screen pt-8 font-inter">
      <Header />
      <div className="container flex-1 max-w-4xl">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
