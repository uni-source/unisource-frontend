import { apiSlice } from "../apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "api/v1/project",
        method: "POST",
        body: projectData,
        credentials: "include" as const,
      }),
    }),
    updateProject: builder.mutation({
      query: (projectData) => ({
        url: "api/v1/project",
        method: "PUT",
        body: projectData,
        credentials: "include" as const,
      }),
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `api/v1/project/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: "api/v1/project",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `api/v1/project/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    updateProjectStatus: builder.mutation({
      query: (projectStatusData) => ({
        url: "api/v1/project/status",
        method: "PUT",
        body: projectStatusData,
        credentials: "include" as const,
      }),
    }),
    getProjectByMentorId: builder.query({
      query: (id) => ({
        url: `api/v1/project/mentor/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProjectByOrganizationId: builder.query({
      query: (id) => ({
        url: `api/v1/project/organization/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useGetProjectByIdQuery,
  useGetAllProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectStatusMutation,
  useGetProjectByMentorIdQuery,
  useGetProjectByOrganizationIdQuery
} = projectApi;
