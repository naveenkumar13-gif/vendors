import React from "react";
import Hero from "../../../components/student/hero/Hero";
import Companies from "../../../components/student/companies/Companies";
import CourseCardSection from "../../../components/student/courseCardSection/CourseCardSection";
import Testimonials from "../../../components/student/testimonials/Testimonials";
import Footer from "../../../components/student/footer/Footer";
function index() {
  return (
    <div>
      <Hero />
      <Companies />
      <CourseCardSection />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}

export default index;
