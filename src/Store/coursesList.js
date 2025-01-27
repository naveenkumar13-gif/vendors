import { createSlice } from "@reduxjs/toolkit";
import { dummyCourses } from "../assets/assets";

const initialState = {
  course: dummyCourses,
};
const course = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export default course.reducer;
