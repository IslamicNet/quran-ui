import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const appSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
