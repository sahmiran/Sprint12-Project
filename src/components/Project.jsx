import React, { useEffect, useState } from "react";

import "./Project.css";
import { useTheme } from "../context/useTheme";
import { API } from "../api/useAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Project() {
  const { theme } = useTheme();

  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    API.get("/projects")
      .then((responce) => {
        setProjectsData(responce.data);
        console.log(responce.data);
        toast.success("projects mock api den alindi");
      })
      .catch()
      .finally();
  }, []);

  return (
    <div className="projects--container--card">
      {projectsData.map((project) => (
        <div
          className={`projects--container--card--one ${theme}`}
          key={project.id}
        >
          <img
            className="projects--container--card--image"
            src={project.src}
            alt={project.title}
          />
          <div>
            <h1>{project.title}</h1>
            <p>{project.text}</p>
            <div className="projects--container--buttons">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="projects--container--button"
              >
                View Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects--container--button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
