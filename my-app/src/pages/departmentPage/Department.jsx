import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DepartmentHero from "./DepartmentHero";
import DepartmentTitle from "./DepartmentTitle";
// import CourseCard from "../homePage/CourseCard";
import useApi from "../../fetchApis/useApi";
import Subjects from "../Subjects";
const Department = () => {
  let { deprtName, deprtId } = useParams();
  console.log("deprtId =>", deprtId);

  const departmentName = `${deprtName} Department`;
  const [year, setYear] = useState("");
  const [yearId, setYearId] = useState("");
  const [semester, setSemester] = useState("");

  console.log(" yearId =>", yearId);
  console.log(" year =>", year);
  console.log(" semester =>", semester);

  const { data, isLoading, error, getData } = useApi(
    // "http://localhost:5001/subjects"
    `https://eng-courses-server.vercel.app/api/track/${deprtId}`
  );
  useEffect(() => {
    getData();
  }, []);

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
        departmentDetails={data}
        setYear={setYear}
        setYearId={setYearId}
        setSemester={setSemester}
      />
      {/* ---------------------------------------------------------------------------- */}
      {yearId && semester && (
        <DepartmentTitle DepartmentTitle={{ departmentName, year, semester }} />
      )}
      {/* ---------------------------------------------------------------------------- */}
      {yearId && semester && (
        <Subjects
          deprtName={deprtName}
          deprtId={deprtId}
          year={year}
          yearId={yearId}
          semester={semester}
        />
      )}
    </div>
  );
};
export default Department;
