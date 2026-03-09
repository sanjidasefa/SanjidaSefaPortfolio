import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import TechStack from "../component/TechSection/TechStack";
import Services from "../component/Service/Services";
import Education from "../component/About/Education";
import Projects from "../component/Service/Projects";
import ProjectDetails from "../component/Service/ProjectDetails";
import Contact from "../component/About/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About-Me",
        element: <About></About>,
      },
      {
        path: "/Tech-Section",
        element: <TechStack></TechStack>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/My-Educatinal-Qualification",
        element: <Education></Education>,
      },
      {
        path: "/My-Contact-Info",
        element: <Contact></Contact>,
      },
      {
        path: "/My-Projects",
        element: <Projects></Projects>,
      },
      {
        path: "/My-Projects/:id",
        element: <ProjectDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/Projects.json");
          const data = await res.json();
          const project = data.find((p) => p.id === params.id);
          return project || null;
        },
      },
    ],
  },
]);

export default router;
