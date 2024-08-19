import { apiSlice } from "../apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new admin
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "api/v1/admin",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),

    // Get an admin by identity ID
    getAdminByIdentityId: builder.query({
      query: (identityId) => ({
        url: `api/v1/admin/${identityId}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAdminByIdentityIdQuery,
} = adminApi;
