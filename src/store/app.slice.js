import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  language: "english",
};

const appSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    changeLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { toggleDarkMode, changeLanguage } = appSlice.actions;

export default appSlice.reducer;
