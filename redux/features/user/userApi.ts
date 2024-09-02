import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    updateUser: builder.mutation({
      query: (formData) => ({
        url: "api/v1/auth",
        method: "PUT",
        body: formData,
        credentials: "include" as const,
      }),
    }),

    updatePassword: builder.mutation({
        query: (formData) => ({
          url: "api/v1/auth/reset-password",
          method: "PUT",
          body: formData,
          credentials: "include" as const,
        }),
      }),

    
    }),
});

export const {useUpdateUserMutation,useUpdatePasswordMutation} = userApi;
