import "./App.css";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import Answers from "./components/Answers/Answers";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Question />
      <Result />
      <Answers />
    </div>
  );
};

export default App;
