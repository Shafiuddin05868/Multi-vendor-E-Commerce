import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "~/api/fetcher";

export const adminLogin = createAsyncThunk(
  "auth/admin_login",
  async (
    credentials: { email: string; password: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const { data } = await api.post("/auth/admin-login", credentials);
      return fulfillWithValue(data);
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message || 'Login failed');
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload as string;
      });
  },
});

export default authSlice.reducer;
