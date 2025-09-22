"use client";
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

// Infer types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
