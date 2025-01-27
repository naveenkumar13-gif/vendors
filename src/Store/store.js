import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../Store/coursesList";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
