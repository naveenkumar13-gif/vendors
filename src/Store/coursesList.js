import { createSlice } from "@reduxjs/toolkit";
import { dummyCourses } from "../assets/assets";
import { time } from "motion";
import humanizeDuration from "humanize-duration";

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

export const calculateRating = (course) => {
  if (course.courseRatings.length === 0) {
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return (totalRating / course.courseRatings.length).toFixed(1);
};

export const calculateChapterTime = (chapter) => {
  let time = 0;
  chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"], round: true });
};

//
export const calculateCourseDuration = (course) => {
  let time = 0;
  course.courseContent.map((chapter) =>
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
  );
  return humanizeDuration(time * 60 * 1000, { units: ["h", "m"], round: true });
};

export const calculateNoOfLectures = (course) => {
  let lectures = 0;
  course.courseContent.map((chapter) => {
    if (Array.isArray(chapter.chapterContent)) {
      lectures += chapter.chapterContent.length;
    }
    return lectures;
  });
  return lectures;
};

export default course.reducer;
