import { useEffect } from "react";
import useApi from "../fetchApis/useApi";
import { Link } from "react-router-dom";

import SubjectCard from "./SubjectCard";
const Subjects = ({deprtName , year , semester}) => {
  const { data, isLoading, error, getData, } = useApi(
    "http://localhost:5001/subjects"
  );
  useEffect(() => {
    getData();
  }, []);
  data && console.log("Subjects data:", data);
  return (
    <section className="subject-page">
      <h2 className="text-3xl font-bold text-center my-5">
        {deprtName} Subjects
      </h2>
      <ul
        className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
              grid  grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {isLoading && <p>Loading...</p>}
        {data && data.map((subject, index) => (
          (subject.department).toLowerCase() == deprtName.toLowerCase() && 
          (subject.year).toString() == year.toString() &&
          (subject.semester).toString() == semester.toString() &&
          <SubjectCard key={index} subjectDetails={subject}  />
        ))}
      </ul>
    </section>
  );
};

export default Subjects;
