import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  success: boolean | null;
  data: any;
  message: string | null;
}

const initialState: AuthState = {
  success: null,
  data: null,
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
      state.data = action.payload.data;
      state.message = action.payload.message;
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{ success: any; data: any; message: any }>
    ) => {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
    },
    userLoggedOut: (state) => {
      state.success = null;
      state.data = null;
      state.message = null;
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
