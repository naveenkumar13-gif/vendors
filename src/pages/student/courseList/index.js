import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../../components/student/searchBar/SearchBar";
import { assets, dummyCourses } from "../../../assets/assets";
import CourseCard from "../../../components/student/courseCard/CourseCard";
import { motion } from "motion/react";
import Footer from "../../../components/student/footer/Footer";
import Loading from "../../../components/student/loading/Loading";

function CourseList() {
  const navigate = useNavigate();
  const { input } = useParams();
  const [filterded, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (input) {
      const filteredCourses = dummyCourses.filter((course) =>
        course.courseTitle.toLowerCase().includes(input.toLowerCase())
      );
      setFiltered(filteredCourses);
    } else {
      setFiltered(dummyCourses);
    }
  }, [input, filterded]);

  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCourses(true);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative px-8 pt-20 text-left">
        <div className=" flex items-center justify-between max-sm:flex-col ">
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-medium text-gray-800"
            >
              Course list
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-500 max-sm:mb-6"
            >
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span>/course List</span>
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SearchBar data={input} />
          </motion.div>
        </div>
        {input && (
          <div className="flex items-center  gap-4 mt-8 text-gray-800 ">
            <p className="text-gray-500">
              Showing results for <span className="font-bold">{input}</span>
            </p>
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
              src={assets.cross_icon}
              alt="cross_icon"
              className="cursor-pointer w-5 h-5"
              onClick={() => navigate(-1)}
            />
          </div>
        )}
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 my-8 ">
          {loading || !showCourses ? (
            <Loading />
          ) : (
            filterded.map((course) => (
              <CourseCard course={course} key={course._id} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;
