import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../courseCard/CourseCard";
import { dummyCourses } from "../../../assets/assets";
import { useSelector } from "react-redux";

function CourseCardSection() {
  // const courses = useSelector((store) => store.course.course);
  return (
    <div className="py-10 text-center max-md:py-5">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p
        className="text-gray-500 my-4 text-sm px-4  max-md:text-xs"
        data-aos="fade-down"
      >
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness,
        <br />
        our courses are crafted to deliver results.
      </p>

      {/*  flex gap-4  justify-between items-center w-[90%] m-auto  max-lg:flex-col max-lg:w-1/2 max-md:w-[80%] max-lg:m-auto max-lg:gap-6 */}
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4  px-8 my-16 max-lg:my-8 max-lg:px-4  ">
        {dummyCourses.slice(0, 4).map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>

      <div className="mt-10">
        <Link
          to={"/course-list"}
          onClick={() => window.scrollTo(0, 0)}
          className="text-gray-500  p-3  rounded border border-grey-500/30"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
}

export default CourseCardSection;
