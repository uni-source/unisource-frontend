import { apiSlice } from "../apiSlice";

export const studentHasProjectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStudentHasProject: builder.mutation({
      query: (studentHasProjectData) => ({
        url: "api/v1/student-has-project",
        method: "POST",
        body: studentHasProjectData,
        credentials: "include" as const,
      }),
    }),
    updateRecommendation: builder.mutation({
      query: (recommendationData) => ({
        url: "api/v1/student-has-project/update-recommendation",
        method: "PUT",
        body: recommendationData,
        credentials: "include" as const,
      }),
    }),
    updateStatus: builder.mutation({
      query: (statusData) => ({
        url: "api/v1/student-has-project/update-status",
        method: "PUT",
        body: statusData,
        credentials: "include" as const,
      }),
    }),
    getAllStudentHasProjects: builder.query({
      query: () => ({
        url: "api/v1/student-has-project",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getStudentHasProjectById: builder.query({
      query: (id) => ({
        url: `api/v1/student-has-project/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProjectsByStudentId: builder.query({
      query: (studentId) => ({
        url: `api/v1/student-has-project/student/${studentId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProjectByProjectId: builder.query({
      query: (projectId) => ({
        url: `api/v1/student-has-project/project/${projectId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateStudentHasProjectMutation,
  useUpdateRecommendationMutation,
  useUpdateStatusMutation,
  useGetAllStudentHasProjectsQuery,
  useGetStudentHasProjectByIdQuery,
  useGetProjectsByStudentIdQuery,
  useGetProjectByProjectIdQuery,
} = studentHasProjectApi;
