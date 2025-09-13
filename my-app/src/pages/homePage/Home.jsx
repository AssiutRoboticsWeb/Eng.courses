import { React, useState, useEffect } from "react";
import axios from "axios";

import useFetchData from "../../fetchApis/useFetchData.jsx";
// import PostData from "./fetchApis/PostData.jsx";

import HeroSection from "./HeroSection.jsx";
import useApi from "../../fetchApis/useApi.jsx";
import DepartmentSelection from "./DepartmentsSection.jsx";
import LastestCoursesSection from "./LastestCoursesSection.jsx";
const Home = () => {
  // const { fetchedData, isLoading } = useFetchData(
  //   "https://eng-courses-server.vercel.app/api/track"
  // );
  // fetchedData && console.log("fetchedData =>", fetchedData);

  const {
    data,
    isLoading: loading,
    error: fetchError,
    getData,
  } = useApi(
    //  "https://eng-courses-server.vercel.app/api/track"
    "https://eng-courses-server.vercel.app/api/track"
  );

  useEffect(() => {
    getData();
  }, []);

  const SectionTitle = [
    {
      title: "Departments",
      description:
        "Choose the right department for you and start your learning journey",
    },
    {
      title: "Featured Courses",
      description: "Latest and best courses available on the platform",
    },
  ];

  return (
    <>
      <HeroSection />

      {loading ? (
        <p>Loading11...</p>
      ) : (
        <DepartmentSelection
          sectionTitleContent={SectionTitle[0]}
          fetchedDepartmentsData={data?.data}
        />
      )}
      <LastestCoursesSection sectionTitleContent={SectionTitle[1]} />
    </>
  );
};

export default Home;
