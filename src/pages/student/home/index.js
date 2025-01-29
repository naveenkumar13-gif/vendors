import React from "react";
import Hero from "../../../components/student/hero/Hero";
import Companies from "../../../components/student/companies/Companies";
import CourseCardSection from "../../../components/student/courseCardSection/CourseCardSection";
import Testimonials from "../../../components/student/testimonials/Testimonials";
import CallAction from "../../../components/student/callAction/CallAction";
import Footer from "../../../components/student/footer/Footer";
function index() {
  return (
    <div className="flex flex-col  space-y-7  text-center">
      <Hero />
      <Companies />
      <CourseCardSection />
      <Testimonials />
      <CallAction />
      <Footer />
    </div>
  );
}

export default index;
