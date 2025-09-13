import React, { useEffect } from "react";
import CourseCard from "./homePage/CourseCard";
import useApi from "../fetchApis/useApi";
import SectionTitle from "./homePage/SectionTitle";
import { Link, useParams } from "react-router-dom";
const CoursesPage = () => {
  let id ="68b8d3067dd260bdd060be79";
  // "http://localhost:5001/subjects"
  let { deprtName, courseId } = useParams();
  console.log("courseId =>", courseId);
  console.log("deprtName =>", deprtName);
  
  let sectionTitleContent = {
    title: `${deprtName} Courses`,
    description: `the courses offered by the ${deprtName} department.`,
  };
  const { data, isLoading, error, getData } = useApi(
    `https://eng-courses-server.vercel.app/api/year/subjects/${courseId}`
  );
  useEffect(() => {
    getData();
  }, []);

  const courses = data ? data.data.courses : [];
  console.log("courses =>", courses);
  
  return (
    <section>
      <SectionTitle sectionTitleContent={sectionTitleContent} />
      <ul
        className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
              grid  grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">

        {data &&
          courses.map(
            (course, index) =>  
            
              // course.department.toLowerCase() === deprtName.toLowerCase() &&
              // course.id === courseId &&
              //  ( console.log("course Drsh ==>" , course.courses)) &&
              // course.courses.map((c, index) => (
                <CourseCard
                  key={index}
                  CourseDetails={course}
                  deprtName={deprtName}
                  courseId={courseId}
                />
              // ))
          )}
      </ul>
    </section>
  );
};

export default CoursesPage;
