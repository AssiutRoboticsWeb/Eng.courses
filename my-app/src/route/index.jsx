import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/homePage/Home.jsx";
import About from "../pages/aboutPage/About.jsx";
import Department from "../pages/departmentPage/Department.jsx";
import CoursesPage from "../pages/CoursesPage.jsx";
import MyCourses from "../pages/myCoursesPage/MyCoursees.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout component
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/department/:deprtName/:deprtId",
        element: <Department />
      },
      {
        path: "/department/:deprtName/course/:courseId",
        element: <CoursesPage />,
      },
      {
        path: "/myCourses",
        element: <MyCourses />,
      },
    ],
  },
]);

export default router;
