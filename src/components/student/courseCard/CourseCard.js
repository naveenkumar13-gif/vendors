import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function CourseCard({ course }) {
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return (totalRating / course.courseRatings.length).toFixed(1);
  };
  return (
    <Link
      to={"/course-list" + course._id}
      onClick={() => window.scrollTo(0, 0)}
      className=" shadow-md rounded-md  border overflow-hidden   border-gray-100"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="">
          <img
            src={course.courseThumbnail}
            alt={course.name}
            className="w-full h-full rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="p-4 text-base max-lg:text-lg  max-md:text-sm  text-left  ">
          <h3 className="font-bold">{course.courseTitle}</h3>
          <p className="text-gray-400">{course.educator}</p>
        </div>
        <div className="flex  space-x-2 items-center px-4">
          <p>{calculateRating(course)}</p>
          <div className="flex justify-center items-center gap-1  ">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < calculateRating(course) ? assets.star : assets.star_blank
                }
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
            <p className="text-gray-400">{course.courseRatings.length}</p>
          </div>
        </div>
        <div className=" text-base max-lg:text-lg  max-md:text-sm  text-left px-4 py-2  ">
          <p>
            $
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default CourseCard;
