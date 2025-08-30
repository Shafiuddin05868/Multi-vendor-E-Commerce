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
    loading: false,
    userInfo: "",
  },
  reducers: {
    clearMessage : (state)=>{
      state.errorMessage = ""
      state.successMessage = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload as string;
      }).addCase(adminLogin.fulfilled, (state, {payload})=>{
        state.loading = false;
        state.successMessage = payload?.message || "Login Successful";
        state.userInfo = payload;
      })
  },
});

export const {clearMessage} = authSlice.actions;

export default authSlice.reducer;
