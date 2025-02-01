import React, { useEffect, useState } from "react";
import { assets } from "../../../assets/assets";
import { useParams } from "react-router-dom";
import { calculateChapterTime } from "../../../Store/coursesList";
import humanizeDuration from "humanize-duration";

function PLayer() {
  const { id } = useParams();
  const [enrollmentsCourses, setEnrollmentsCoures] = useState([]);
  const [couresData, setCourseData] = useState(null);
  const [palyData, setPlayData] = useState(null);
  const [open, setOpen] = useState({});

  const toggleSection = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  const getCourseData = () => {
    enrollmentsCourses.map((course) => {
      if (course._id === id) {
        setCourseData(course);
      }
    });
  };

  useEffect(() => {
    getCourseData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* left */}
        <div className="text-gray-800 flex justify-center items-center h-screen w-full bg-gray-300">
          <h2 className="text-3xl font-semibold">
            Course Structures...
            <br />
            <p className="text-blue-400 text-center"> soon</p>
          </h2>
          <p>{id}</p>
        </div>
        {/* right */}

        <div>
          <div className="pt-5">
            {couresData &&
              couresData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-4 my-2 bg-white w-full max-md:p-2"
                >
                  <div
                    className="flex justify-between items-center px-4 py-3 cursor-pointer select-none max-md:px-2 max-md:py-1  max-md:gap-2"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2  max-sm:gap-1">
                      <img
                        src={assets.down_arrow_icon}
                        alt=""
                        className={`transform transition  ${
                          open[index] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="font-medium text-base  max-sm:text-xs">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm ">
                      {chapter.chapterContent.length} lecture-
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul
                      className="list-disc px-4 py-3
                               text-gray-600 border-t border-gray-300 max-md:px-2 max-md:py-1"
                    >
                      {chapter.chapterContent.map((lecture, i) => (
                        <li className="flex items-start gap-2 py-2 " key={i}>
                          <img
                            src={
                              false ? assets.blue_tick_icon : assets.play_icon
                            }
                            alt=""
                            className="w-4 h-4 mt-1 "
                          />
                          <div className="flex items-center  justify-between w-full text-gray-800  max-sm:gap-0 ">
                            <p className="text-sm max-sm:text-[11px]">
                              {lecture.lectureTitle}
                            </p>
                            <div className=" flex items-center gap-2">
                              <p className=" text-md max-sm:text-[12px]">
                                {lecture.lectureUrl && (
                                  <span
                                    className="text-blue-500 cursor-pointer "
                                    onClick={() =>
                                      setPlayData({
                                        ...lecture,
                                        chapter: index + 1,
                                        lecture: i + 1,
                                      })
                                    }
                                  >
                                    Watch
                                  </span>
                                )}
                              </p>
                              <p className=" text-md max-sm:text-[12px]">
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PLayer;
