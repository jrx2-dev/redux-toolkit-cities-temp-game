import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { WEATHER_API_KEY, WEATHER_API_UNITS } from "../../constants";
import { WEATHER_API_UNITS } from "../../constants";
import { selectRandomCities } from "../../helpers/citiesHelper";
import { checkResult } from "../../helpers/resultHelper";
import { Result, GuessOption, TempApiResponse } from "../../models/interfaces";

interface CitiesState {
  index: number;
  results: Result[];
  fetching: boolean;
  cities: string[];
}

const initialState: CitiesState = {
  index: 0,
  results: [],
  fetching: false,
  cities: selectRandomCities(),
};

export const fetchTemp = createAsyncThunk(
  "cities/fetchTemp",
  async (data: GuessOption): Promise<Result> => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${
        data.city
      }&units=${WEATHER_API_UNITS}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const resJson: TempApiResponse = await response.json();

    // we only are going to use the first result
    const currentTemp = resJson.list[0].main.temp;

    const result: Result = {
      city: data.city,
      guess: data.guess,
      value: currentTemp,
      result: checkResult(data.guess, currentTemp),
    };

    return result;
  }
);

const citySlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    resetGame() {
      return {
        ...initialState,
        cities: selectRandomCities(),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemp.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchTemp.fulfilled, (state, action: PayloadAction<Result>) => {
        state.index++;
        state.results.push(action.payload);
        state.fetching = false;
      })
      .addCase(fetchTemp.rejected, (state) => {
        console.warn("ups! rejected...");
        state.fetching = false;
      });
  },
});

export const { resetGame } = citySlice.actions;
export default citySlice.reducer;
