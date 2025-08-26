import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "~/api/fetcher";

export const adminLogin = createAsyncThunk('auth/admin_login',
  async (credentials: {email: string, password: string})=>{
    try {
      const {data} = await fetcher.post('/auth/admin-login', credentials, {credentials: 'include'})
    } catch (err) {
      
    }
  }
)
 
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: ()=>{},
});

export default authSlice.reducer;
