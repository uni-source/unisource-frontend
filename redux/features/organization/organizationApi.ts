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
      }),
    }),

    updateOrganizationDescription: builder.mutation({
      query: (Data) => ({
        url: "api/v1/organization/description",
        method: "PUT",
        body: Data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useGetOrganizationQuery,
  useUpdateOrganizationAvatarMutation,
  useUpdateOrganizationDescriptionMutation,
} = organizationApi;
