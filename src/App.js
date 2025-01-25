import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/student/home/index";
import CourseList from "./pages/student/courseList/index";
import CourseDetails from "./pages/student/courseDetalis/index";
import MyEnrollments from "./pages/student/myEnrollments/index";
import Player from "./pages/student/player/index";
import Loading from "./components/student/loading/Loading";
import Educator from "./pages/educator/educators/index";
import DashBoard from "./pages/educator/dashBoard";
import AddCourse from "./pages/educator/addCourse/index";
import MyCourses from "./pages/educator/mycourses/index";
import StudentsEnrolled from "./pages/educator/studentsEnorolled/index";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<DashBoard />} />
          <Route path="add-courses" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
