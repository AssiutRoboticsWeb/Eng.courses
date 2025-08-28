import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/homePage/Home.jsx";
import About from "../pages/aboutPage/About.jsx";
import Header from "../components/Header.jsx";
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
    ],
  },
]);

export default router;
