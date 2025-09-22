"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: "en" | "rw";
}

const initialState: LanguageState = {
  language: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"en" | "rw">) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
