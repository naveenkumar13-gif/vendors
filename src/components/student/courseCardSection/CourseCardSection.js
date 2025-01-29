import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../courseCard/CourseCard";
import { dummyCourses } from "../../../assets/assets";
import { motion, useInView } from "motion/react";

function CourseCardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="py-10 text-center max-md:py-5">
      <motion.h2
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 1,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="text-4xl font-medium text-gray-800"
      >
        Learn from the best
      </motion.h2>
      <motion.p className=" max-w-2xl  text-gray-500 mx-auto  my-4 max-sm:hidden">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness,
        <br />
        our courses are crafted to deliver results.
      </motion.p>

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
