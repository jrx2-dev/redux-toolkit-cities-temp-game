import { ChangeEvent, KeyboardEvent, useState } from "react";

import "./Question.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTemp } from "../../features/cities/cities-slice";

const Question = (): JSX.Element | null => {
  const { index, fetching, cities: citiesToGuess } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  const [temp, setTemp] = useState<number | string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemp(Number(e.target.value));
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && temp !== "") {
      handleClick();
    }
  };

  const handleClick = () => {
    dispatch(fetchTemp({ city: citiesToGuess[index], guess: Number(temp) }));
    setTemp("");
  };

  if (index === 5) return null;

  return (
    <div>
      <h1>
        {citiesToGuess[index]}
      </h1>
      <div className="form">
        <input
          className="question space"
          type="number"
          name="temp"
          id="temp"
          value={temp}
          onChange={handleChange}
          onKeyPress={handleKey}
          placeholder="Guess temperature (°C)..."
        />
        <button
          className="question button space"
          type="button"
          onClick={handleClick}
          disabled={temp === ""}
        >
          {">"}
        </button>
      </div>
      {fetching && <span className="question space">Checking...</span>}
    </div>
  );
};

export default Question;
