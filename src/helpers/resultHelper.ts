import { DEVIATION } from "../constants";

export const checkResult = (guess: number, current: number): boolean =>
  Math.abs(guess - current) > DEVIATION ? false : true;
