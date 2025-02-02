import React, { useRef } from "react";
import { assets } from "../../../assets/assets";
import { motion, useInView } from "motion/react";

function Companies() {
  return (
    <div className="py-10 text-center  max-sm:py-5">
      <h1 className="text-gray-500 tetx-base text-4xl">
        Trusted by learners from
      </h1>
      <div className="flex flex-wrap justify-center gap-6 items-center mt-5 ">
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          src={assets.microsoft_logo}
          alt="microsoft"
          className="w-[100px]"
        />
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          src={assets.adobe_logo}
          alt="adobe_logo"
          className="w-[100px]"
        />
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          src={assets.walmart_logo}
          alt="walmart_logo"
          className="w-[100px]"
        />
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          src={assets.paypal_logo}
          alt="paypal_logo"
          className="w-[100px]"
        />
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          src={assets.accenture_logo}
          alt="accenture_logo"
          className="w-[100px]"
        />
      </div>
    </div>
  );
}

export default Companies;
