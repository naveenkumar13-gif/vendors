import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Store/coursesList";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
