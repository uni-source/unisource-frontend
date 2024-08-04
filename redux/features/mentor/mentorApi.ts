import { apiSlice } from "../apiSlice";

export const mentorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMentor: builder.mutation({
      query: (mentorData) => ({
        url: "api/v1/mentor",
        method: "POST",
        body: mentorData,
        credentials: "include" as const,
      }),
    }),
    deleteMentor: builder.mutation({
      query: (id) => ({
        url: `api/v1/mentor/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    getMentorById: builder.query({
      query: (id) => ({
        url: `api/v1/mentor/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getAllMentors: builder.query({
      query: () => ({
        url: "api/v1/mentor",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateMentorMutation,
  useDeleteMentorMutation,
  useGetMentorByIdQuery,
  useGetAllMentorsQuery,
} = mentorApi;
