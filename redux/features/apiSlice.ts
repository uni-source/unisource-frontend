import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => ({
        url: 'me',
        method: 'GET',
        credentials: 'include',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              success: true,
              token: result.data.token,
              user: result.data.user,
              message: 'User loaded successfully',
            })
          );
          console.log(result.data.user);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoadUserQuery } = apiSlice;