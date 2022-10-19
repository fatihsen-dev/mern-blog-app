import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import siteSlice from "./siteSlice";

export const store = configureStore({
   reducer: {
      auth: authSlice,
      site: siteSlice,
   },
});
