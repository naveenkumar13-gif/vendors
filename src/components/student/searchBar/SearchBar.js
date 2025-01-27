import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

function SearchBar({ data }) {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearch = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };
  return (
    <div>
      <form
        onSubmit={onSearch}
        className="border border-gray-400 flex items-center gap-1 p-0.5 bg-white rounded max-w-full w-full
      "
      >
        <img src={assets.search_icon} alt="serach_icon" className="px-3 w-10" />
        <input
          type="text"
          placeholder=" Serach for course"
          className="w-full outline-none text-gray-500/80  p-1 "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="bg-blue-700 px-6 py-2 cursor-pointer rounded text-white  hover:bg-blue-800 duration-300">
          Serach
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
