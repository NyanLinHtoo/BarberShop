import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Service from "../pages/Service";
import About from "../pages/About";
import HairStylists from "../pages/HairStylists";

const AppRouter = () => {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/hairStylists",
          element: <HairStylists />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ],
    },
  ]);
  return <RouterProvider router={config} />;
};

export default AppRouter;
