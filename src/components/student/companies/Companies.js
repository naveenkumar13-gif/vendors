import React from "react";
import { assets } from "../../../assets/assets";
import { motion } from "motion/react";

function Companies() {
  return (
    <div className="py-10 text-center ">
      <p className="text-gray-500 tetx-base">Trusted by learners from</p>
      <div className="flex flex-wrap justify-center gap-6 items-center mt-5">
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
