import { configureStore } from "@reduxjs/toolkit";

import citiesReducer from "../features/cities/cities-slice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
