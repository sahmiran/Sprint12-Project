import React from "react";
import { projectsData } from "../data/projectsIndex.js";
import "./Projects.css";
import Project from "./Project.jsx";
import { useTheme } from "../context/useTheme.jsx";

function Projects() {
  const { theme } = useTheme();
  const filteredProjects = projectsData.slice(0, 2);

  return (
    <section className={`projects--container ${theme}`}>
      <div className="projects--container--box">
        <div className="projects--container--title">
          <h1>Projects</h1>
        </div>
        <Project projectsData={filteredProjects} />
      </div>
    </section>
  );
}

export default Projects;
