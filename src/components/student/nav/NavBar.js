import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
function NavBar() {
  const isCourseListPage = useLocation().pathname.includes("/course-list/");
  const [isEductor, setIsEductor] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.email);
  return (
    <>
      <ul
        className={`flex items-center justify-between  py-4 px-6  max-sm:px-3 border border-b-gray-600  ${
          isCourseListPage ? "bg-white " : "bg-cyan-100/70"
        } text-white`}
      >
        <Link to={"/"} className="flex items-center gap-4 outline-none">
          <motion.img
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer"
          />
        </Link>
        <li className="flex gap-4  justify-between items-center text-black max-sm:hidden">
          {user ? (
            <>
              <div className="">
                {/* <button
                  className="outline-none cursor-pointer"
                  onClick={() => Navigate("/educator")}
                >
                  {isEductor ? "Educator dashboard" : "Become Educator"}
                </button> */}

                <Link
                  to={"/my-enrollments"}
                  className="hover:text-blue-600 duration-300"
                >
                  My-Enrollments
                </Link>
              </div>
              <div className="flex items-center gap-1 max-sm:gap-0 max-sm:text-xs cursor-pointer">
                <img src={assets.user_icon} alt="user_loago" />
                <h2 className="">{user}</h2>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                {/* <button
                  className="outline-none cursor-pointer"
                  onClick={() => Navigate("/educator")}
                >
                  {isEductor ? "Educator dashboard" : "Become Educator"}
                </button> */}
                |
                <Link
                  to={"/my-enrollments"}
                  className="hover:text-blue-600 duration-300"
                >
                  My-Enrollments
                </Link>
              </div>
              <motion.button
                initial={{ transform: "translateX(200px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{ type: "spring" }}
                onClick={() => navigate("/login")}
                className="bg-blue-700 px-4 py-2 cursor-pointer rounded-full text-white  hover:bg-blue-800 duration-300 "
              >
                create Account
              </motion.button>
            </>
          )}
        </li>
        <li className="hidden max-sm:block">
          <div className="flex gap-4 items-center  text-black">
            <img src={assets.user_icon} alt="user_loago" />
            <Link
              to={"/my-enrollments"}
              className="hover:text-blue-600 duration-300"
            >
              My-Enrollments
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
