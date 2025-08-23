import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "~/api/api";

export const adminLogin = createAsyncThunk('auth/admin_login',
  async (credentials: {email: string, password: string})=>{
    console.log("credentials: ", credentials)
    try {
      const {data} = await api.post('/admin-login', credentials)
      console.log("data: ", data)
    } catch (err) {
      
    }
  }
)
 
export const authReducer = createSlice({
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

export default authReducer.reducer;