import { use, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useApi from "./fetchApis/useApi.jsx";
import axios from "axios";
import "./App.css";
/* import pages */
// import CourseInfo from "./pages/OldCourseInfo/CourseInfo.jsx";
import Home from "./pages/homePage/Home.jsx";
/* import components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // console.log("App render");

  // let url = "https://eng-courses-server.vercel.app/api/track";

  // async function testDelete() {
  //   try {
  //     const res = await axios.delete("http://localhost:5000/enrolledCourses/1");
  //     console.log("Deleted:", res.status);
  //   } catch (err) {
  //     console.error("Axios failed:", err.response?.status, err.response?.data);
  //   }
  // }

  // testDelete();

  return (
    <>
      <Header />
      <div
        className="core-section"
        style={{ minHeight: "83vh", marginTop: "65px" }}>
        <Home />
        {/* <CoursesView /> */}
        {/* <Outlet /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
