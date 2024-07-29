import { Quiz } from "./components/quiz";
import { questionsData } from "./data/questions-data";

function App() {
  return (
    <div className=" w-full h-full min-h-screen pt-8">
      <div className="container max-w-5xl">
        <Quiz questionSet={questionsData} />
      </div>
    </div>
  );
}

export default App;
