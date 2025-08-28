import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CoursesView from "./components/courses/coursesView/coursesView.jsx";

import "./App.css";
/* import pages */
import CourseInfo from "./pages/OldCourseInfo/CourseInfo.jsx";
import Home from "./pages/homePage/Home.jsx";
/* import components */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  // const fetchDataFunc2 = async (url) => {
  //   try {
  //     const res = await PostData(url); // or API URL
  //     console.log("Fetched Data:", res);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // fetchDataFunc2("https://eng-courses-server.vercel.app/api/track");
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  const PostDataFunc = async (url) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "general\n",
          name: "",
        }),
      });
      const data = await res.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (false) {
    PostDataFunc("https://eng-courses-server.vercel.app/api/track")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */

  return (
    <>
      <Header />
      <div
        className="core-section"
        style={{ minHeight: "83vh", marginTop: "65px" }}>
        {/* <Home /> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
