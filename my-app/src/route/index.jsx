import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/homePage/Home.jsx";
import About from "../pages/aboutPage/About.jsx";
import Department from "../pages/departmentPage/Department.jsx";
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
        path: "/department/:deprtName",
        // path: "/department",
        element: <Department />,
      },
    ],
  },
]);

export default router;
