import { useState, useEffect } from "react";
const DepartmentHero = ({ departmentName, setYear, setSemester }) => {
  return (
    <>
      <section className="mb-16">
        <figure
          className="w-full h-64 relative bg-electrical-department bg-no-repeat
      bg-cover bg-center">
          <div className="lay-out absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="content absolute top-0 left-0 w-full h-full flex  flex-col gap-10 items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {departmentName}
            </h2>
            <aside className="flex gap-5">
              <aside className="flex flex-col items-center gap-1">
                <label
                  htmlFor="select-year"
                  className="
                   w-20 text-center bg-white text-base border-1 outline-none border-gray-300 rounded-md cursor-pointer
                   ">
                  semester
                </label>
                <select
                  name="select-year"
                  id=""
                  className="
                  text-base border-1 outline-none border-gray-300 rounded-md cursor-pointer
                    w-10"
                  onChange={(e) => setYear(+e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </aside>
              <aside className="flex flex-col gap-1 items-center">
                <label
                  htmlFor="select-semester"
                  className="
                  w-20 text-center bg-white text-base border-1 outline-none border-gray-300 rounded-md cursor-pointer">
                  year
                </label>
                <select
                  name="select-semester"
                  id=""
                  className="text-base border-1 outline-none border-gray-300 rounded-md cursor-pointer
                    w-10"
                  onChange={(e) => setSemester(+e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </aside>
            </aside>
          </div>
        </figure>
      </section>
    </>
  );
};

export default DepartmentHero;
