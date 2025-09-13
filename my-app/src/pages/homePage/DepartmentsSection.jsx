import React from "react";
import { Link } from "react-router-dom";
import DepartmentCard from "./DepartmentCard.jsx";
import SectionTitle from "./SectionTitle.jsx";
/* import icons */
import { MdElectricBolt } from "react-icons/md";

const DepartmentsSection = ({
  sectionTitleContent,
  fetchedDepartmentsData,
}) => {
  fetchedDepartmentsData && console.log(fetchedDepartmentsData);

  // if(!sectionTitleContent) return <p>Loading111...</p>;
  if (!fetchedDepartmentsData) return <p>Loading222...</p>;
  const departments = [
    {
      departmentName: "Electrical ",
      departmentCoursesNumber: 45,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Power ",
      departmentCoursesNumber: 38,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Civil ",
      departmentCoursesNumber: 52,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Mechanical ",
      departmentCoursesNumber: 41,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Computer ",
      departmentCoursesNumber: 67,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Architecture   ",
      departmentCoursesNumber: 34,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Petroleum ",
      departmentCoursesNumber: 29,
      departmentIcon: MdElectricBolt,
    },
    {
      departmentName: "Communication ",
      departmentCoursesNumber: 31,
      departmentIcon: MdElectricBolt,
    },
  ];

  return (
    <section className="departments-section">
      {sectionTitleContent ? (
        <SectionTitle sectionTitleContent={sectionTitleContent} />
      ) : (
        <>looding 0000 </>
      )}
      {/* *************** */}

      {fetchedDepartmentsData ? (
        <ul
          className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
              grid  grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {fetchedDepartmentsData.map((dept, index) => (
            <DepartmentCard key={dept._id} departmentDetails={dept} _id={dept._id} />
          ))}
        </ul>
      ) : (
        <p>Loading222...</p>
      )}
    </section>
  );
};

export default DepartmentsSection;
