import React from "react";
import { assets } from "../../../assets/assets";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const isCourseListPage = useLocation().pathname.includes("course-list");
  return (
    <>
      <ul
        className={`flex items-center justify-between  py-4 px-6  max-sm:px-3 border border-b-gray-600  ${
          isCourseListPage ? "bg-white " : "bg-cyan-100/70"
        } text-white`}
      >
        <li>
          <img src={assets.logo} alt="logo" className="w-28 cursor-pointer" />
        </li>
        <li className="flex gap-4  justify-between items-center text-black max-sm:hidden">
          <div className="flex gap-4 items-center">
            <button className="outline-none">Become Educator</button>|
            <Link
              to={"/my-enrollments"}
              className="hover:text-blue-600 duration-300"
            >
              My-Enrollments
            </Link>
          </div>
          <button className="bg-blue-700 px-4 py-2 cursor-pointer rounded-full text-white  hover:bg-blue-800 duration-300 ">
            create Account
          </button>
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
