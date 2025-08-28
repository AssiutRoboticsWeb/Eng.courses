import React from "react";
import { IoTimeOutline } from "react-icons/io5";

const CourseCard = ({latestCourseDetails}) => {
  return (
    <section className="card bg-white rounded-lg pb-5 hover:shadow-lg hover:shadow-gray-400 hover:scale-105  transition-all">
      <div className="card-top ">
        <iframe
          className=" w-full h-48 rounded-lg"
          src={`https://www.youtube.com/embed/${latestCourseDetails.videoUrl}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <div className="card-body text-left p-5 flex flex-col gap-3">
        <p className=" rounded-full bg-white max-w-max px-2 ">{latestCourseDetails.departmentName}</p>
        <h3 className="text-md font-bold">{latestCourseDetails.courseName}</h3>
        <p className="text-sm">{latestCourseDetails.instructor}</p>
        <div className="flex items-center gap-1">
          <span><IoTimeOutline /></span>
          <span>{latestCourseDetails.duration}</span>
          <span>Hours</span>
        </div>
      </div>
      <div className="card-footer  px-4 "> 
        <button className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-md p-2  text-xl font-bold ">Enroll Now</button>
      </div>
    </section>
  );
};

export default CourseCard;
