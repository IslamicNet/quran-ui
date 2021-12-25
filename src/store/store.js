import { configureStore } from "@reduxjs/toolkit";

import { quranApi } from "./quran.service";
import appReducer from "./app.slice";

const store = configureStore({
  reducer: {
    app: appReducer,
    [quranApi.reducerPath]: quranApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quranApi.middleware),
});

export default store;
