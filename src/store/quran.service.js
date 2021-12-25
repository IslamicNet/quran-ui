import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quranApi = createApi({
  reducerPath: "quranApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getSurahList: builder.query({
      query: () => "/surahs",
    }),
    getSurahByNumber: builder.query({
      query: (number, page) => `/surahs/${number}?page=${page}`,
    }),
  }),
});

export const { useGetSurahListQuery, useGetSurahByNumberQuery } = quranApi;
