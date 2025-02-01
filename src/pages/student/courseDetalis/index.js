import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, dummyCourses } from "../../../assets/assets";
import Loading from "../../../components/student/loading/Loading";
import { motion } from "motion/react";
import Footer from "../../../components/student/footer/Footer";
import {
  calculateRating,
  calculateChapterTime,
  calculateCourseDuration,
  calculateNoOfLectures,
} from "../../../Store/coursesList";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
function CourseDetails() {
  const { id } = useParams();
  // const courseDetails = dummyCourses.find((course) => course._id === id);
  const [couresData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [palyData, setPlayData] = useState(null);
  const [open, setOpen] = useState({});

  const fetchCourseDetails = async () => {
    const courseDetails = dummyCourses.find((course) => course._id === id);
    setCourseData(courseDetails);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchCourseDetails();
    setLoading(false);
  }, [id]);

  const toggleSection = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const headindVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 50,
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 50,
        delay: 0.5,
        duration: 1.5,
      },
    },
  };
  return couresData ? (
    <>
      <div className=" flex gap-8 px-8 pt-20 text-left relative z-10 max-md:px-2 max-md:flex-col max-lg:pt-15 max-md:pt-10 max-md:gap-6 max-sm:gap-4">
        <div className=" top-0 left-0 w-full bg-gradient-to-b -z-10 from-cyan-100/70 h-screen absolute"></div>

        <div className="max-w-3xl z-20 text-gray-900 ">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headindVariants}
            className="text-gray-800 font-semibold text-5xl max-md:text-4xl"
          >
            {couresData.courseTitle}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="text-base  my-4"
            dangerouslySetInnerHTML={{
              __html: couresData.courseDescription.slice(0, 200),
            }}
          ></motion.p>
          <div className="flex  space-x-2 items-center px-4 pt-3 pb-1 max-sm:px-2 ">
            <p>{calculateRating(couresData)}</p>
            <div className="flex justify-center items-center gap-1  ">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < calculateRating(couresData)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                  className="w-3.5 h-3.5"
                />
              ))}
              <p className="text-blue-600">
                ({couresData.courseRatings.length}
                {couresData.courseRatings.length > 1 ? "ratings" : "rating"})
              </p>
              <p>
                {couresData.enrolledStudents.length > 1
                  ? "students"
                  : "student"}
              </p>
            </div>
          </div>
          <p className="text-base max-lg:text-lg  max-md:text-sm  text-left px-4 py-2 flex gap-0.5  ">
            Course by{" "}
            <motion.span
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeInOut" }}
              className="text-blue-600 underline block ea"
            >
              {couresData.educator}
            </motion.span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structures</h2>
            <div className="pt-5">
              {couresData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-4 my-2 bg-white w-full max-md:p-2"
                >
                  <div
                    className="flex justify-between items-center px-4 py-3 cursor-pointer select-none max-md:px-2 max-md:py-1  max-md:gap-2"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2  max-sm:gap-1">
                      <img
                        src={assets.down_arrow_icon}
                        alt=""
                        className={`transform transition  ${
                          open[index] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="font-medium text-base  max-sm:text-xs">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm ">
                      {chapter.chapterContent.length} lecture-
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul
                      className="list-disc px-4 py-3
                     text-gray-600 border-t border-gray-300 max-md:px-2 max-md:py-1"
                    >
                      {chapter.chapterContent.map((lecture, i) => (
                        <li className="flex items-start gap-2 py-2 " key={i}>
                          <img
                            src={assets.play_icon}
                            alt=""
                            className="w-4 h-4 mt-1 "
                          />
                          <div className="flex items-center  justify-between w-full text-gray-800  max-sm:gap-0 ">
                            <p className="text-sm max-sm:text-[11px]">
                              {lecture.lectureTitle}
                            </p>
                            <div className=" flex items-center gap-2">
                              <p className=" text-md max-sm:text-[12px]">
                                {lecture.isPreviewFree && (
                                  <span
                                    className="text-blue-500 cursor-pointer "
                                    onClick={() =>
                                      setPlayData({
                                        videoId: lecture.lectureUrl
                                          .split("/")
                                          .pop(),
                                      })
                                    }
                                  >
                                    Preview
                                  </span>
                                )}
                              </p>
                              <p className=" text-md max-sm:text-[12px]">
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xl py-20 max-lg:py-15 max-md:py-10 max-sm:py-2">
              <h3 className="text-xl text-gray-800">Course Description</h3>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={paragraphVariants}
                className="text-base  my-4 text-gray-500 max-md:leading-relaxed "
                dangerouslySetInnerHTML={{
                  __html: couresData.courseDescription,
                }}
              ></motion.p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            delay: 0.5,
            duration: 2,
          }}
          className="max-w-full shadow-2xl bg-white min-w-[300px] overflow-hidden z-10 max-h-fit max-sm:my-5"
        >
          {palyData ? (
            <YouTube
              videoId={palyData.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-vedio"
            ></YouTube>
          ) : (
            <img src={couresData.courseThumbnail} alt="" />
          )}

          <div className="p-5 max-md:p-2.5">
            <div className="flex items-center gap-2">
              <img
                src={assets.time_clock_icon}
                alt="time_left"
                className="w-3.5"
              />
              <motion.p
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                  delay: 2,
                  duration: 2,
                }}
                className="text-red-500"
              >
                <span className="font-medium max-md:text-sm">5 days</span> left
                at this price
              </motion.p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 text-2xl font-semibold">
                $
                {(
                  couresData.coursePrice -
                  (couresData.discount * couresData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="text-xl line-through text-gray-700 max-lg:text-lg">
                ${couresData.coursePrice}
              </p>
              <p className="text-xl text-gray-500 max-lg:text-lg">
                {couresData.discount}% off
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 pt-2 max-lg:gap-2">
              <motion.div
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                  delay: 1,
                  duration: 1,
                }}
                className="flex items-center gap-1"
              >
                <img src={assets.star} alt="" />
                <p className="max-lg:text-sm">{calculateRating(couresData)}</p>
              </motion.div>
              <div className="h-4 bg-gray-500/40 w-0.5"></div>
              <motion.div
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                  delay: 1.5,
                  duration: 1.5,
                }}
                className="flex items-center gap-1 "
              >
                <img src={assets.time_clock_icon} alt="" />
                <p className="max-lg:text-sm">
                  {calculateCourseDuration(couresData)}
                </p>
              </motion.div>
              <div className="h-4 bg-gray-500/40 w-0.5"></div>
              <motion.div
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                  delay: 2,
                  duration: 2,
                }}
                className="flex items-center gap-1"
              >
                <img src={assets.lesson_icon} alt="" />
                <p className="max-lg:text-sm">
                  {calculateNoOfLectures(couresData)}lesons
                </p>
              </motion.div>
            </div>
            <button className="w-full py-3 rounded bg-blue-600 mt-6 text-white">
              {isEnrolled ? "Already Enrolled" : "Enrolled Now"}
            </button>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-xl text-gray-700">What's in the courses</p>
              <ul className="ml-4 pt-2 text-sm  list-disc text-gray-500">
                <li>
                  Good courses are regularly updated to match the latest JS
                  features and best practices.
                </li>
                <li>
                  {" "}
                  Many courses include real-world projects to help you practice
                  and build a portfolio.
                </li>
                <li>
                  Some platforms offer coding challenges and quizzes to test
                  your skills.
                </li>
                <li>
                  {" "}
                  Some courses include Q&A forums, live sessions, or mentor
                  support to help you when stuck.
                </li>
                <li> Learn at your own pace, anytime and anywhere.</li>
                <li>
                  Many paid courses provide a completion certificate, which can
                  add value to your resume.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  ) : (
    <div>
      <Loading />
    </div>
  );
}

export default CourseDetails;
