import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1
        className="
      text-4xl"
      >
        Course Details
      </h1>
      <p>{id}</p>
    </div>
  );
}

export default CourseDetails;
