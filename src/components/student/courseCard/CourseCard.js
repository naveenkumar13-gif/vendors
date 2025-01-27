import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link
      to={"/course-list" + course._id}
      onClick={() => window.scrollTo(0, 0)}
      className=" shadow-md rounded-md  border overflow-hidden   border-gray-100"
    >
      <div className=" ">
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
          <p>5</p>
          <div className="flex justify-center items-center gap-1  ">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={assets.star}
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
            <p className="text-gray-400">{22}</p>
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
      </div>
    </Link>
  );
}

export default CourseCard;
