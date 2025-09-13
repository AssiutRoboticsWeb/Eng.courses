import { use, useEffect, useState } from "react";
import useApi from "../fetchApis/useApi";
import { Link } from "react-router-dom";

import SubjectCard from "./SubjectCard";
const Subjects = ({ deprtName, deprtId, year , yearId, semester }) => {
  const { data, isLoading, error, getData } = useApi(
    // "http://localhost:5001/subjects"
    `https://eng-courses-server.vercel.app/api/track/${deprtId}`
  );
  useEffect(() => {
    getData();
    console.log("******* getData called *******");
  }, []);

const yearCourses = 
  data && data.data.years.find((y) => y._id == yearId);

  const subjects =
    semester == 1
      ? yearCourses?.firstSemester?.subjects || []
      : yearCourses?.secondSemester?.subjects || [];

      
  return (
    <section className="subject-page">
      <h2 className="text-3xl font-bold text-center my-5">
        {deprtName} Subjects
      </h2>
      <ul
        className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
              grid  grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {isLoading && <p>Loading...</p>}

         {subjects.map((subject, index) => (
          <SubjectCard key={index} subjectDetails={subject} />
        ))}

      </ul>
    </section>
  );
};

export default Subjects;
