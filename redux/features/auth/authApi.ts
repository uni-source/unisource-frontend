import { apiSlice } from "../apiSlice";
import { userRegistration, userLoggedIn, userLoggedOut } from "./authSlice";
  
type RegistrationResponse = {
  success: boolean;
  data: any;
  message: string;
};

type RegistrationData = {
  email: string;
  password: string;
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: 'api/v1/auth/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              success: result.data.success,
              data: result.data.data,
              message: result.data.message,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'api/v1/auth/login',
        method: 'POST',
        body: { email, password },
        credentials: 'include',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              success: result.data.success,
              token: result.data.data.token,
              user: result.data.data.user,
              message: result.data.message,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    logOut: builder.query({
      query: () => ({
        url: 'logout',
        method: 'GET',
        credentials: 'include',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(userLoggedOut());
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogOutQuery } = authApi;