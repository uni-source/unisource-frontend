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

    getAllStudents: builder.query({
      query: () => ({
        url: "api/v1/student",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    createStudent: builder.mutation({
      query: (studentData) => ({
        url: "api/v1/student",
        method: "POST",
        body: studentData,
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
      query: (data) => ({
        url: "api/v1/student/score",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),

    updateDescription: builder.mutation({
      query: (data) => ({
        url: "api/v1/student",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),

    verifyStudent: builder.mutation({
      query: (verificationData) => ({
        url: "api/v1/student/student-verify",
        method: "PUT",
        body: verificationData,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { 
  useGetStudentQuery,
  useGetAllStudentsQuery,
  useCreateStudentMutation,
  useUpdateAvatarMutation,
  useUpdateScoreMutation,
  useUpdateDescriptionMutation,
  useVerifyStudentMutation 
} = studentApi;
