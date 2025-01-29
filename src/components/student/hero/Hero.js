import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { assets } from "../../../assets/assets";
import { motion } from "motion/react";
function Hero() {
  return (
    <div>
      <div className="w-full text-center  gap-4 flex flex-col justify-center items-center pt-20 px-7 space-y-7 bg-gradient-to-b from-cyan-100/70 ">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.75 },
          }}
          className="text-4xl font-bold max-w-3xl m-auto max-sm:text-2xl tracking-wide  max-sm:max-w-full relative "
        >
          Empower your future with the courses designed to
          <span className="text-blue-600 ml-0.5 ">fit your choice.</span>
          <span className="max-md:hidden my-4">
            <img
              src={assets.sketch}
              className="absolute right-[9rem] "
              alt="sketch"
            />
          </span>
        </motion.h1>
        <motion.p className=" max-w-2xl  text-gray-500 mx-auto  my-4 max-sm:hidden">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </motion.p>
        <p className="max-w-2xl  text-gray-500 m-auto text-sm hidden max-sm:block">
          We bring together world-class instructors to help you achieve your
          professional goals.
        </p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
