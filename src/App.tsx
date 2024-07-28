import { Quiz } from "./components/quiz";
import { questionsData } from "./data/questions-data";

function App() {
  return (
    <div className=" bg-primary text-white w-full h-full min-h-screen pt-8">
      <div className="container max-w-7xl">
        <Quiz questionSet={questionsData} />
      </div>
    </div>
  );
}

export default App;
