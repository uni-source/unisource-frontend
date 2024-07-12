import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  success: boolean | null;
  token:string|null;
  user: any;
  message: string | null;
}

const initialState: AuthState = {
  success: null,
  token: null,
  user:null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (
      state,
      action: PayloadAction<{ success: any; data: any; message: any }>
    ) => {
      state.success = action.payload.success;
      state.message = action.payload.message;
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{ success: any; token: string;user:any; message: any }>
    ) => {
      state.success = action.payload.success;
      state.token = action.payload.token;
      state.user=action.payload.user;
      state.message = action.payload.message;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user);
    },
    userLoggedOut: (state) => {
      state.success = null;
      state.token = null;
      state.user=null;
      state.message = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
