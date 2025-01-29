import React from "react";
import { assets, dummyTestimonial } from "../../../assets/assets";
import { motion } from "motion/react";

function Testimonials() {
  return (
    <div>
      <div className="py-14 px-8 flex flex-col justify-center items-center max-sm:py-10 ">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-medium text-gray-800"
        >
          Testimonials
        </motion.h2>
        <p className="text-gray-500 mt-3 text-center max-md:text-base">
          Hear from our learners as they share their journeys of transformation,
          <br />
          success, and how our platform has made a difference in their lives.
        </p>
      </div>
      <div className="flex items-center gap-8 px-6 max-md:flex-col mb-12">
        {dummyTestimonial.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            key={index}
            className=" bg-gray-200 p-0.5  rounded-md flex-1 w-1/2 max-md:w-[70%] max-sm:w-[90%] m-auto"
          >
            <div className="  ">
              <div className="flex items-center gap-2 p-2">
                <img
                  src={item.image}
                  alt="item.image"
                  className="w-20
                  "
                />
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-gray-800/80 max-lg:text-sm">
                    {item.name}
                  </h1>
                  <p className="text-gray-600/60 max-lg:text-sm">{item.role}</p>
                </div>
              </div>
              <div className=" bg-white p-4 ">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={i < item.rating ? assets.star : assets.star_blank}
                      alt="star"
                      className="w-3.5 h-3.5"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mt-5 max-lg:text-sm max-md:text-base">
                  {item.feedback}
                </p>
                <a href="#" className="text-blue-500/60 max-lg:text-sm">
                  Read more
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
