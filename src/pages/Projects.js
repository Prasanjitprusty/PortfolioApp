import React from "react";
import project from "../data/projects.json";
import { NavLink } from "react-router-dom";

const Projects = (setProject) => {
  return (
    <div className="container mx-auto py-10 px-4 bg-custom-navy min-h-screen min-w-full" id="projects">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">PROJECTS</h1>
      <div className="flex flex-wrap justify-center">
        {/* Render projects in rows */}
        {project.map((data, index) => (
          <div
            key={data.id}
            className={`my-4 px-4 ${
              index % 3 === 0 && index !== 0 ? "w-full flex justify-center" : "w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            }`}
          >
            <div
              className="bg-custom-dark text-light rounded-lg border border-yellow-500 shadow-yellow animate-doorOpenClose"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="flex justify-center p-3">
                <img
                  src={data.imageSrc}
                  alt={data.title}
                  className="w-64 h-48 object-cover border-2 border-yellow-500 rounded-lg"
                />
              </div>
              <div className="text-center p-4">
                <h5 className="text-lg font-semibold mb-2 text-white">{data.title}</h5>
                <p className="text-sm text-gray-300 mb-4">{data.description}</p>
                <div className="flex justify-center gap-4">
                  <NavLink
                    to={data.demo}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Demo
                  </NavLink>
                  <NavLink
                    to={data.source}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
                  >
                    Code
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
