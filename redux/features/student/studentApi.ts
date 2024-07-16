import { apiSlice } from "../apiSlice";

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
        query: (id) => ({
          url: `api/v1/student/${id}`,
          method: "GET",
          credentials: "include" as const,
        }),
      }),
    updateAvatar: builder.mutation({
      query: (formData) => ({
        url: "api/v1/student/upload-image",
        method: "POST",
        body: formData,
        credentials: "include" as const,
      }),
    }),

    updateScore: builder.mutation({
      query: (Data) => ({
        url: "api/v1/student/score",
        method: "PUT",
        body: Data,
        credentials: "include" as const,
      }),
    }),

    updateDescription: builder.mutation({
      query: (Data) => ({
        url: "api/v1/student/description",
        method: "PUT",
        body: Data,
        credentials: "include" as const,
      }),
    }),
    }),
});

export const { useGetStudentQuery,useUpdateAvatarMutation,useUpdateScoreMutation,useUpdateDescriptionMutation} = studentApi;
