import { Result } from "../../models/interfaces";

import { useAppSelector } from "../../app/hooks";

import "./Answers.css";

const Answers = ():JSX.Element => {
  const results = useAppSelector((state) => state.cities.results);

  return (
    <div className="container">
      {results.map((r: Result, i: number) => {
        return (
          <div key={i} className={`answer ${r.result ? "ok" : "bad"}`}>
            <h3>{`${r.guess} °C`}</h3>
            <p>{`was ${r.value} °C`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
