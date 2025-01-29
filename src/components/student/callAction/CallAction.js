import React, { useRef } from "react";
import { assets } from "../../../assets/assets";
import { motion, useInView } from "motion/react";

function CallAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-14 px-8 max-sm:py-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="text-4xl  font-semibold text-gray-800  max-md:text-2xl"
        >
          Learn anything, anytime, anywhere
        </motion.h2>
        <p className="text-gray-500 mt-3 text-center max-md:text-base">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div className="flex gap-4 items-center mt-8">
          <motion.button
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="px-10 py-3 rounded-md text-white bg-blue-600 max-md:px-5 "
          >
            Get Started
          </motion.button>
          <button className="flex items-center gap-2">
            Learn More <img src={assets.arrow_icon} alt="arrow_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallAction;
