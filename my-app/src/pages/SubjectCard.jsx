import React from "react";
import { Link } from "react-router-dom";
const SubjectCard = ({ subjectDetails }) => {
  if (!subjectDetails) {
    return <p>Loading...</p>;
  }
  return (
    <li className="subject">
      <Link
        to={`/department/${subjectDetails.department?.trim()}/${subjectDetails.id?.trim()}`} 
        className="flex flex-col items-center justify-center gap-5 p-1 py-14
        bg-white rounded-lg hover:scale-105 transition-all
        hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition-all group relative
        ">
        <div className="subject-name font-bold  md:text-2xl lg:text-3xl">
          {subjectDetails.name}
        </div>
        <div
          className="description
              text-gray-600  md:text-base lg:text-xl
              ">
          <span>{subjectDetails.description}</span>
          <span
            className="absolute top-2 right-2 text-sm text-sky-500 bg-red-50 rounded-full px-2
          group-hover:text-sky-600
          ">
            {subjectDetails.department}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default SubjectCard;
