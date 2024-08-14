import { apiSlice } from "../apiSlice";

export const proposalApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProposal: builder.mutation({
      query: (proposalData) => ({
        url: "api/v1/proposal",
        method: "POST",
        body: proposalData,
        credentials: "include" as const,
      }),
    }),
    updateProposalStatus: builder.mutation({
      query: (statusData) => ({
        url: "api/v1/proposal/update-status",
        method: "PUT",
        body: statusData,
        credentials: "include" as const,
      }),
    }),
    getAllProposals: builder.query({
      query: () => ({
        url: "api/v1/proposal",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProposalById: builder.query({
      query: (id) => ({
        url: `api/v1/proposal/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProposalsByStudentId: builder.query({
      query: (studentId) => ({
        url: `api/v1/proposal/student/${studentId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getProposalsByProjectId: builder.query({
      query: (projectId) => ({
        url: `api/v1/proposal/project/${projectId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateProposalMutation,
  useUpdateProposalStatusMutation,
  useGetAllProposalsQuery,
  useGetProposalByIdQuery,
  useGetProposalsByStudentIdQuery,
  useGetProposalsByProjectIdQuery,
} = proposalApi;
