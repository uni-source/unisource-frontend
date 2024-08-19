import { apiSlice } from "../apiSlice";

export const organizationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrganization: builder.query({
      query: (id) => ({
        url: `api/v1/organization/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    updateOrganizationAvatar: builder.mutation({
      query: (formData) => ({
        url: "api/v1/organization/upload-image",
        method: "POST",
        body: formData,
        credentials: "include" as const,
      })
    }),

    updateOrganizationDescription: builder.mutation({
      query: (data) => ({
        url: "api/v1/organization/description",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),

    createOrganization: builder.mutation({
      query: (data) => ({
        url: "api/v1/organization",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),

    verifyOrganization: builder.mutation({
      query: (data) => ({
        url: "api/v1/organization/organization-verify",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),

    getAllOrganizations: builder.query({
      query: () => ({
        url: "api/v1/organization",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetOrganizationQuery,
  useUpdateOrganizationAvatarMutation,
  useUpdateOrganizationDescriptionMutation,
  useCreateOrganizationMutation,
  useVerifyOrganizationMutation,
  useGetAllOrganizationsQuery,
} = organizationApi;
