import React from "react";
import { assets } from "../../../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-8 w-full text-left">
      <div className="flex  justify-between items-center max-md:flex-row gap-8  py-10 border-b border-gray-700">
        <div className="flex flex-col gap-4 max-md:items-start w-full">
          <img src={assets.logo_dark} alt="logo" className="w-20" />
          <p className="mt-4 max-md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="flex flex-col  items-center gap-4 max-md:items-start w-full">
          <h1 className="text-xl font-semibold">Company</h1>
          <ul className="mt-4 max-md:text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 max-md:items-start w-full max-sm:hidden">
          <h2>Subscribe to our newsletter</h2>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-md"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm max-sm:text-xs ">
        Copyright 2024 © Edemy. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
