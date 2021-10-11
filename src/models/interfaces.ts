export interface Result {
  city: string;
  guess: number;
  value: number;
  result: boolean;
}

export interface GuessOption {
  city: string;
  guess: number;
}

interface TempApiResult {
  main: {
    temp: number;
  };
}

export interface TempApiResponse {
  list: TempApiResult[];
}
