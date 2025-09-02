import React from "react";
import SectionTitle from "../homePage/SectionTitle.jsx";
const About = () => {
  return (
    <section className="about-page max-w-7xl mx-auto mb-16 p-4 md:p-8 lg:p-16 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>
        Our platform is a student-driven project that aims to collect and
        organize as many engineering courses and recorded lectures as possible
        in one place. We believe that sharing knowledge is the fastest way to
        help students study and understand better. <br />
        <br /> The idea started from students’ need to easily access lectures
        recorded by professors and teaching assistants. We organized and
        categorized the content by departments to make the learning experience
        simpler and more efficient.
      </p>
      <h2 className="text-3xl font-bold mb-4 mt-20">Our goals</h2>
      <ul className="text-left max-w-3xl mx-auto space-y-2">
        <li>
          Help every engineering student quickly find the content they need.
        </li>
        <li>
          Build a community where students and instructors share valuable
          resources.
        </li>

        <li>
          Continuously develop the platform into a comprehensive library for all
          engineering materials
        </li>
      </ul>
    </section>
  );
};

export default About;
