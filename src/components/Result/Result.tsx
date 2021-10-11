import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { resetGame } from "../../features/cities/cities-slice";

import "./Result.css";

const Result = (): JSX.Element => {
  const { index, results } = useAppSelector((state) => state.cities);

  const dispatch = useAppDispatch();

  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    if (results.filter((r) => r.result === true).length >= 3) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [results]);

  return (
    <>
      {results.length && index == 5 ? (
        <>
          <h1>{win ? "You win!!!" : "...you lose :("}</h1>
          <div className="reset">
            <button className="replay" onClick={() => dispatch(resetGame())}>Play again!</button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Result;
