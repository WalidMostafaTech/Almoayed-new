import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const AboutUS = React.lazy(() => import("../pages/AboutUS/AboutUS"));
const ContactUs = React.lazy(() => import("../pages/ContactUS/ContactUS"));
const Services = React.lazy(() => import("../pages/Services/Services"));
const ServicesDetails = React.lazy(() =>
  import("../pages/ServicesDetails/ServicesDetails")
);
const Partners = React.lazy(() => import("../pages/Partners/Partners"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const ProjectsDetails = React.lazy(() =>
  import("../pages/ProjectsDetails/ProjectsDetails")
);
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = React.lazy(() =>
  import("../pages/BlogDetails/BlogDetails")
);

const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUS /> },
      { path: "contact", element: <ContactUs /> },
      { path: "services", element: <Services /> },
      { path: "service-details/:id", element: <ServicesDetails /> },
      { path: "partners", element: <Partners /> },
      { path: "projects", element: <Projects /> },
      { path: "project-details/:id", element: <ProjectsDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog-details/:id", element: <BlogDetails /> },

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
