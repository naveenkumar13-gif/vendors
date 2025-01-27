import React from "react";
import Hero from "../../../components/student/hero/Hero";
import Companies from "../../../components/student/companies/Companies";
import CourseCardSection from "../../../components/student/courseCardSection/CourseCardSection";

function index() {
  return (
    <div>
      <Hero />
      <Companies />
      <CourseCardSection />
    </div>
  );
}

export default index;
