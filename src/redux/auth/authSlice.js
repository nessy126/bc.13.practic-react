import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: null,
    user: {
      email: null,
      
    },
    isLoading: false,
    error: null,
  },
  // reducers:
  extraReducers: {

  }
})

export default authSlice.reducer