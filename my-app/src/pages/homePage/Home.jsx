import { React, useState, useEffect } from "react";
import axios from "axios";

import useFetchData from "../../fetchApis/useFetchData.jsx";
// import PostData from "./fetchApis/PostData.jsx";

import HeroSection from "./HeroSection.jsx";
import DepartmentSelection from "./DepartmentsSection.jsx";
import LastestCoursesSection from "./LastestCoursesSection.jsx";
const Home = () => {
  const { fetchedData, isLoading, fetchError } = useFetchData(
    "https://eng-courses-server.vercel.app/api/track"
  );
    if (isLoading) return <p>Loading11...</p>;
  if (fetchError) return <p>Error11: {fetchError}</p>;

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

    {isLoading ? (
      <p>Loading11...</p>
    ) : (
      <DepartmentSelection
        sectionTitleContent={SectionTitle[0]}
        fetchedDepartmentsData={fetchedData}
      />
    )}
      <LastestCoursesSection sectionTitleContent={SectionTitle[1]} />
    </>
  );
};




export default Home;
