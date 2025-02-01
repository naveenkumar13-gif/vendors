import React, { useEffect, useState } from "react";
import { dummyCourses } from "../../../assets/assets";
import { calculateCourseDuration } from "../../../Store/coursesList";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Line } from "rc-progress";
import Footer from "../../../components/student/footer/Footer";

function MyEnrollment() {
  const [enrollmentsCourses, setEnrollmentsCoures] = useState([]);
  const [progress, setProgress] = useState([
    {
      lectureCompleted: 1.5,
      totalLecture: 5,
    },
    {
      lectureCompleted: 3,
      totalLecture: 5,
    },

    {
      lectureCompleted: 2,
      totalLecture: 5,
    },

    {
      lectureCompleted: 4,
      totalLecture: 7,
    },

    {
      lectureCompleted: 4,
      totalLecture: 4,
    },

    {
      lectureCompleted: 5,
      totalLecture: 5,
    },

    {
      lectureCompleted: 3,
      totalLecture: 7,
    },

    {
      lectureCompleted: 5,
      totalLecture: 5,
    },

    {
      lectureCompleted: 8,
      totalLecture: 7,
    },
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchEnrolledCourses = () => {
      setEnrollmentsCoures(dummyCourses);
    };
    fetchEnrolledCourses();
  }, []);
  return (
    <>
      <div className="px-8 py-10">
        <h1 className="text-2xl font-bold">My Enrollments</h1>
        <table className="w-full table-fixed overflow-hidden border mt-10">
          <thead className="text-gray-900 border border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr className=" my-2 ">
              <th className="px-4 pt-3 font-semibold ">Couurse</th>
              <th className="px-4 pt-3 font-semibold ">Duration</th>
              <th className="px-4 pt-3 font-semibold ">Completed</th>
              <th className="px-4 pt-3 font-semibold ">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrollmentsCourses.map((course, index) => (
              <tr key={index} className="border-b  border-gray-500/20 ">
                <td className="flex items-center space-x-3 p-2 px-4 ">
                  <img
                    src={course.courseThumbnail}
                    alt={course.name}
                    className="w-28 "
                  />
                  <div className="flex-auto">
                    <p className="mb-1 max-sm:text-sm"> {course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      percent={
                        progress[index]
                          ? (progress[index].lectureCompleted * 100) /
                            progress[index].totalLecture
                          : 0
                      }
                      className="bg-gray-300"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  <p>{calculateCourseDuration(course)}</p>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progress[index] &&
                    `${progress[index].lectureCompleted}/${progress[index].totalLecture}`}
                  <span>Lecture</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    className="bg-blue-700 px-4 py-2 cursor-pointer rounded text-white  hover:bg-blue-800 duration-300 "
                    onClick={() => navigate("/player/" + course._id)}
                  >
                    {progress[index] &&
                    progress[index].lectureCompleted /
                      progress[index].totalLecture ===
                      1
                      ? "completed"
                      : "OnGoing.."}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default MyEnrollment;
