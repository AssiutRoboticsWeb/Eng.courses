import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../../fetchApis/useApi";
import CourseCard from "../homePage/CourseCard";
const MyCoursees = () => {
  const { data, isLoading, error, getData } = useApi(
    "http://localhost:5000/enrolledCourses"
  );
  useEffect(() => {
    getData();
  }, []);
  let departmentTitle = "all";

  data &&
    (departmentTitle = data.map((dept) =>
      dept.departmentName.split(" ")[0].toLowerCase()
    ));
  departmentTitle = [...new Set(departmentTitle)];

  const [filter, setFilter] = useState("all");
  console.log("filter", filter);

  return (
    <section className="my-courses-page pt-10">
      <section className="department-description flex  justify-center items-center gap-5 mb-5 capitalize py-10">
        <h2 className="text-3xl font-bold  animate-bounce">My Courses</h2>
      </section>

      <aside className="mb-5 bg-blue-100 p-5 py-2  capitalize  ">
        <span className="md:font-bold">filter by:</span>
        <select
          name="department"
          id="department"
          className="ml-2 border-1 outline-none border-gray-300 rounded-md cursor-pointer p-1"
          onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Departments</option>
          {departmentTitle.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </aside>

      <section>
        <ul
          className="departments-list  px-4 bg-blue-50  mb-5 p-7 text-center
            grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data &&
            data.map((myCourse, index) => {
              if (
                filter !== "all" &&
                myCourse.departmentName.split(" ")[0].toLowerCase() !==
                  filter.toLowerCase()
              ) {
                return null;
              }
              return <CourseCard key={index} CourseDetails={myCourse} />;
            })}
        </ul>
      </section>
    </section>
  );
};

export default MyCoursees;
