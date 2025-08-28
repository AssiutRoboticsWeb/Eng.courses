import { Link } from "react-router-dom";
/* import icons */
import { MdElectricBolt } from "react-icons/md";

const DepartmentCard = ({ departmentDetails }) => {
  if (!departmentDetails) {
    return <p>Loading...</p>;
  }
  return (
    <li className="department">
      <Link
        to={`/${departmentDetails.name?.trim()}`}
        className="flex flex-col items-center justify-center gap-5 p-5
            bg-white rounded-lg hover:scale-105 transition-all
             hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition-all group
            ">
        <div className="department-icon bg-gray-200 rounded-full p-1 group-hover:bg-gray-300">
          {<MdElectricBolt size={50} className="text-blue-500" />}
        </div>
        <div className="department-name font-bold  md:text-2xl lg:text-3xl">
          {departmentDetails.name}
        </div>
        <div
          className="department-courses-number 
              text-gray-600  md:text-lg lg:text-2xl
            ">
          <span>48</span> Courses
        </div>
      </Link>
    </li>
  );
};

export default DepartmentCard;
