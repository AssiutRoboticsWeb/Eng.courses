import React, { useEffect } from "react";
import CourseCard from "./homePage/CourseCard";
import useApi from "../fetchApis/useApi";
import SectionTitle from "./homePage/SectionTitle";
import { Link, useParams } from "react-router-dom";
const CoursesPage = () => {
  const { data, isLoading, error, getData } = useApi(
    "http://localhost:5001/subjects"
  );
  useEffect(() => {
    getData();
  }, []);
  let { deprtName, courseId } = useParams();
  let sectionTitleContent = {
    title: `${deprtName} Courses`,
    description: `the courses offered by the ${deprtName} department.`,
  };
  return (
    <section>
      <SectionTitle sectionTitleContent={sectionTitleContent} />
      <ul
        className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
              grid  grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {data &&
          data.map(
            (course, index) =>
              course.department.toLowerCase() === deprtName.toLowerCase() &&
              course.id === courseId &&
              //  ( console.log("course Drsh ==>" , course.courses)) &&
              course.courses.map((lesson, index) => (
                <CourseCard
                  key={index}
                  CourseDetails={lesson}
                  deprtName={deprtName}
                  courseId={courseId}
                />
              ))
          )}
      </ul>
    </section>
  );
};

export default CoursesPage;
