import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DepartmentHero from "./DepartmentHero";
import DepartmentTitle from "./DepartmentTitle";
import CourseCard from "../homePage/CourseCard";
import Years from "../../components/courses/coursesView/yearsBar";
import Subjects from "../Subjects";
const Department = () => {
  let { deprtName } = useParams();
  const departmentName = `${deprtName} Department`;
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const DepartCourses = [
    {
      departmentName: "Civil Engineering",
      courseName: "Concrete Structures Design",
      instructor: "Dr. Mahmoud Hassan",
      duration: "28",
      videoUrl: "https://www.youtube.com/embed/OmIjuvEkCJ0",
    },
    {
      departmentName: "Electrical Engineering",
      courseName: "Power Systems Analysis",
      instructor: "Dr. Sara Ali",
      duration: "35",
      videoUrl: "https://www.youtube.com/embed/fBm1dr_gRBk",
    },
    {
      departmentName: "Mechanical Engineering",
      courseName: "Thermodynamics Basics",
      instructor: "Prof. Ahmed Youssef",
      duration: "24",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
    {
      departmentName: "Computer Engineering",
      courseName: "Data Structures & Algorithms",
      instructor: "Dr. Mona Khaled",
      duration: "40",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
    {
      departmentName: "Architecture Engineering",
      courseName: "Urban Design Fundamentals",
      instructor: "Dr. Kareem Nassar",
      duration: "30",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
    {
      departmentName: "Petroleum Engineering",
      courseName: "Reservoir Engineering",
      instructor: "Dr. Hany Fawzy",
      duration: "32",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
    {
      departmentName: "Communication Engineering",
      courseName: "Wireless Communication Systems",
      instructor: "Dr. Rania Mostafa",
      duration: "27",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
    {
      departmentName: "Civil Engineering",
      courseName: "Transportation Engineering",
      instructor: "Prof. Tarek El-Sayed",
      duration: "29",
      videoUrl: "https://www.youtube.com/embed/PLACEHOLDER", // replace with real link
    },
  ];

  return (
    <div className="bg-blue-50">
      <DepartmentHero
        departmentName={departmentName}
        setYear={setYear}
        setSemester={setSemester}
      />
      {/* ---------------------------------------------------------------------------- */}
      {year && semester && (
        <DepartmentTitle DepartmentTitle={{ departmentName, year, semester }} />
      )}
      {/* ---------------------------------------------------------------------------- */}
      <Subjects  deprtName={deprtName} year={year} semester={semester} />

      {/* {year && semester && (
        <section>
          <ul
            className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
            grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DepartCourses.map((course, index) => {
              return <CourseCard key={index} CourseDetails={course} />;
            })}
          </ul>
        </section>
      )} */}
    </div>
  );
};
export default Department;
