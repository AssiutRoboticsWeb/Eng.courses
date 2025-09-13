import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import useApi from "../../fetchApis/useApi.jsx";
import toast, { Toaster } from "react-hot-toast";

const CourseCard = ({ CourseDetails , deprtName ,courseId }) => {
  // console.log("CourseDetails =>", CourseDetails);
  // console.log("CourseDetails =>", CourseDetails.courses);

  const { data, isLoading, error, getData, postData, deleteData } = useApi(
    "http://localhost:5000/enrolledCourses"
  );
  const [isEnrolled, setIsEnrolled] = useState(false);
  const notify = () => toast.success("Successfully toasted!");
  const handleEnrollBtn = () => {
    if (!isEnrolled) {
      postData(CourseDetails);
    } else {
      deleteData(CourseDetails?.id);
    }
    setIsEnrolled((prev) => !prev);
    notify();
  };
// let isEnrolled = true;
  return (
    <section className="card bg-white rounded-lg pb-5 hover:shadow-lg hover:shadow-gray-400 hover:scale-105  transition-all">
      <div className="card-top ">
        <iframe
          className=" w-full h-48 rounded-lg"
          src={`https://www.youtube.com/embed/${CourseDetails.videoUrl}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <div className="card-body text-left p-5 flex flex-col gap-3">
        <p className=" rounded-full bg-white max-w-max px-2 ">
          {/* {CourseDetails.deprtName} */}
        </p>
        <h3 className="text-md font-bold">{CourseDetails.name}</h3>
        <h6 className="text-sm">{CourseDetails.description}</h6>
        <p className="text-sm font-bold">{CourseDetails.instructor}</p>
        <div className="flex items-center gap-1">
          <span>
            <IoTimeOutline />
          </span>
          <span>{CourseDetails?.duration}</span>
          <span>Hours</span>
        </div>
      </div>
      <div className="card-footer  px-4 ">
        <button
          className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-md p-2  text-xl font-bold "
          onClick={handleEnrollBtn}>
          {isEnrolled ? "Unenroll" : "Enroll Now"}
        </button>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </section>
  );
};

export default CourseCard;
