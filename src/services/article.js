import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_RAPID_API_ARTICLE_BASE_URL;
const rapidAPI_Key = import.meta.env.VITE_RAPID_API_KEY;
const rapidAPI_Host = import.meta.env.VITE_RAPID_API_HOST;

export const articleAPI = createApi({
  reducerPath: "articleAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidAPI_Key);
      headers.set("X-RapidAPI-Host", rapidAPI_Host);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleAPI;
