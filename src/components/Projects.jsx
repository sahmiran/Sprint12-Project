import React from "react";
import { projectsData } from "../data/projectsIndex.js";
import "./Projects.css";
function Projects() {
  return (
    <section className="projects-container">
      <div className="projects-container-box">
        {" "}
        <div className="projects-container-title">
          <h1>projects</h1>
        </div>
        <div className="projects-container-card">
          {projectsData.map((project) => (
            <div className="projects-container-card-one" key={project.id}>
              <img
                className="projects-container-card-image"
                src={project.src}
              ></img>

              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
