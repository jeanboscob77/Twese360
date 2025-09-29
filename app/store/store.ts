"use client";
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import adminReducer from "./adminSlice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    admin: adminReducer,
  },
});

// Infer types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
