import React from "react";

import "./Projects.css";
import { useTheme } from "../context/useTheme.jsx";
import { projectsData } from "../data/projectsIndex.js";

function Project() {
  const { theme } = useTheme();

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
