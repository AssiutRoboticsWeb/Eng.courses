import  { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import DepartmentSelection from "./components/courses/departmentSelection.jsx";
import CoursesView from "./components/courses/coursesView/coursesView.jsx"
/* import Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
/* import components */
import CourseInfo from "./components/CourseInfo/CourseInfo.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/home.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchDataFunc = async () => {
    try {
      const response = await fetch("/data/courses.json"); // or API URL
      const data = await response.json();
      setFetchedData(
        data.department.electrical.departments.powerEngineering.second
          .courses[0]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFunc();
  }, []);

  return (
    <>
      <Header />
      {/* <CourseInfo data={fetchedData} /> */}

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/courses" element={<DepartmentSelection />} />
        <Route path="/courses/department/:Id" element={<CoursesView />} />
        <Route path="/courses/course" element={<CourseInfo data={fetchedData} />} />
        <Route path="/course/course/lesson" element={<h1 className="bg-danger">lesson</h1>} />
        <Route path="*" element={ <h1>page Not created</h1>} />
      </Routes>
      
    </> 
  );
}

export default App;
