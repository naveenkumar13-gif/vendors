import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useMatch } from "react-router-dom";
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
import NavBar from "./components/student/nav/NavBar";
import Loader from "./components/student/loading/Loading";
import Login from "./components/student/login/Login";
import { useSelector } from "react-redux";
function App() {
  const isEductor = useMatch("/educator/*");
  const [loading, setLoading] = useState(true);
  const user = useSelector((store) => store.user.email);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="text-default bg-white min-h-screen">
        {!user ? (
          <Login />
        ) : (
          <>
            {!isEductor && <NavBar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/course-list" element={<CourseList />} />
              <Route path="/course-list/:input" element={<CourseList />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/my-enrollments" element={<MyEnrollments />} />
              <Route path="/player/:id" element={<Player />} />
              <Route path="/loading/:path" element={<Loading />} />
              <Route path="/educator" element={<Educator />}>
                <Route path="educator" element={<DashBoard />} />
                <Route path="add-courses" element={<AddCourse />} />
                <Route path="my-courses" element={<MyCourses />} />
                <Route path="student-enrolled" element={<StudentsEnrolled />} />
              </Route>
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

export default App;
