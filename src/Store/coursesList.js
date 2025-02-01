import { createSlice } from "@reduxjs/toolkit";
import humanizeDuration from "humanize-duration";



const initialState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = "";
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


export const { setEmail, clearEmail } = userSlice.actions;
export default userSlice.reducer;

