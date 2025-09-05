import { useState, useRef } from "react";
import { Link } from "react-router";
// import icon
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

// export default function header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">

//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-indigo-400">
//             MyApp
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="hover:text-indigo-400">Home</Link>
//             <Link to="/about" className="hover:text-indigo-400">About</Link>
//             <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
//           </div>

//           {/* Mobile button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               {/* Hamburger icon */}
//               {isOpen ? (
//                 <span className="text-2xl">✖</span>
//               ) : (
//                 <span className="text-2xl">☰</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
//           <Link to="/" className="block hover:text-indigo-400">Home</Link>
//           <Link to="/about" className="block hover:text-indigo-400">About</Link>
//           <Link to="/contact" className="block hover:text-indigo-400">Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

const Header = () => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  return (
    <header
      className="conatiner fixed z-50 top-0 w-full  px-4 py-2 bg-white shadow-lg h-16 capitalize flex items-center font-bold justify-between 
    ">
      {/* ---------------------------------- logo ----------------------------------  */}
      <figure className="logo w-1/2 md:w-1/4 min-w-max">
        <h2 className="text-2xl font-bold ">eng-learning</h2>
      </figure>
      <aside
        className={`header-menu  bg-blue-50 absolute top-full w-full left-0 text-center rounded-b-lg
          md:flex md:justify-between md:items-center md:relative md:left-0 md:top-0    pb-4 md:pb-0 
          ${isHeaderMenuOpen ? "flex-col md:flex-row" : "hidden md:flex"}
        `}>
        {/* ---------------------------------- menu ---------------------------------- */}
        <ul
          className={`menu   md:w-2/3 md:flex  md:justify-evenly  
        `}>
          <li>
            <Link to="/">home</Link>
          </li>
          {/* <li>
          <Link to="/Not-Done-yet">Departments</Link>
          <select
            name=""
            id=""
            className=" border rounded-md    focus:ring-2 focus:ring-indigo-500 outline-none border-none focus:outline-none">
            <optgroup label="General">
              <option value="department">Department</option>
              <option value="electrical">electrical</option>
              <option value="mechanical">mechanical</option>
              <option value="civil">civil</option>
              <option value="archtict">archtict</option>
            </optgroup>
            <optgroup label="creadit">
              <option value="all">all</option>
              <option value="electrical">electrical</option>
              <option value="mechanical">mechanical</option>
              <option value="civil">civil</option>
              <option value="archtict">archtict</option>
            </optgroup>
          </select>
        </li> */}
          <li className="whitespace-nowrap">
            <Link to="/myCourses">my courses</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        {/* ---------------------------------- login singup --------------------------- */}
        <div
          className={`login-singup flex flex-col gap-4 md:flex-row   max-w-sm m-auto md:m-0 
        `}>
          <button
            id="login"
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <Link to="https://eng-courses-server.vercel.app">login</Link>
          </button>
          <button
            id="singup"
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <Link to="https://eng-courses-server.vercel.app">singup</Link>
          </button>
        </div>
      </aside>
      {/* ---------------------------------- profile --------------------------- */}
      <div className="profile flex  gap-4">
        <CgProfile size={40} className="block md:hidden" />
        <CiMenuBurger
          size={40}
          className="block md:hidden"
          onClick={() => {
            setIsHeaderMenuOpen(!isHeaderMenuOpen);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
