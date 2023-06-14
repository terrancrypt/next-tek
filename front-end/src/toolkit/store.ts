import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./slice/toastSlice";

export const store = configureStore({
  reducer: {
    toastReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;