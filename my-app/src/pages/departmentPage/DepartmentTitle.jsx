import React from "react";
const DepartmentTitle = ({DepartmentTitle}) => {
  return (
    <article className="department-description flex flex-col justify-center items-center gap-5 mb-5 capitalize">
      <h2 className="text-2xl font-bold">{DepartmentTitle.departmentName}</h2>
      <div className="flex gap-5">
        <h5 className="bg-white border-1 p-3 rounded-lg shadow-2xl">
          years <span>{DepartmentTitle.year}</span>
        </h5>
        <h5 className="bg-white border-1 p-3 rounded-lg shadow-2xl">
          Semester <span>{DepartmentTitle.semester}</span>
        </h5>
      </div>
      <p>Include Courses </p>
    </article>
  );
};
export default DepartmentTitle;
