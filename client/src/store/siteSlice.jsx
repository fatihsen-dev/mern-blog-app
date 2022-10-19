import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
   name: "siteSlice",
   initialState: {
      navMenuStatus: false,
   },
   reducers: {
      changeMenuStatus: (state, action) => {
         state.navMenuStatus = action.payload;

         action.payload === true
            ? document.body.classList.add("scrollHidden")
            : document.body.classList.remove("scrollHidden");
      },
   },
});

export const { changeMenuStatus } = siteSlice.actions;
export default siteSlice.reducer;
