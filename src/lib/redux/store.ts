import { configureStore, combineReducers } from "@reduxjs/toolkit";
import seasonNowSlicer from "./features/anime/getSeasonsNow";

const rootReducers = combineReducers({
  seasonNow: seasonNowSlicer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
