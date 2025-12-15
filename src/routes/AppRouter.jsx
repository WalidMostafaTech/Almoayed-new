import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const AboutUS = React.lazy(() => import("../pages/AboutUS/AboutUS"));
const ContactUs = React.lazy(() => import("../pages/ContactUS/ContactUS"));

const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUS /> },
      { path: "contact", element: <ContactUs /> },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
