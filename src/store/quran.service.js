import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quranApi = createApi({
  reducerPath: "quranApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getSurahList: builder.query({
      query: () => "/surahs",
    }),
    getSurahByNumber: builder.query({
      query: ({ surahNumber, page }) => `/surahs/${surahNumber}?page=${page}`,
    }),
    getAyahPortion: builder.query({
      query: ({ surahNumber, from, to }) =>
        `/ayahs/portion?surahNumber=${surahNumber}&from=${from}&to=${to}`,
    }),
  }),
});

export const {
  useGetSurahListQuery,
  useGetSurahByNumberQuery,
  useGetAyahPortionQuery,
} = quranApi;
