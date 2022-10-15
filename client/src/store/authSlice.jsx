import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
   name: "auth",
   initialState: {
      user: false,
      key: localStorage.getItem("key") || false,
   },
   reducers: {
      signin: (state, action) => {
         state.key = action.payload.id;
         state.user = action.payload;
      },
      logout: (state) => {
         state.user = false;
         state.key = false;
         localStorage.removeItem("key");
      },
   },
});

export const { signin, logout } = authSlice.actions;
export default authSlice.reducer;
