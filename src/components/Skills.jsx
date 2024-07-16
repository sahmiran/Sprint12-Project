import React from "react";
import "./Skills.css";
import { skillsData } from "../data/skillsIndex.js";
function Skills() {
  return (
    <section className="skills-container">
      <div className="skills-container-title">
        <h1>Skills</h1>
      </div>
      <div className="skills--container--box">
        {skillsData.slice(0, 3).map((skill) => (
          <div className="skills-container-box--one" key={skill.id}>
            <img className="skills-container-box-image" src={skill.src}></img>

            <p>{skill.title}</p>
          </div>
        ))}
      </div>
      <div className="skills-container-box">
        {skillsData.slice(3, 6).map((skill) => (
          <div className="skills-container-box-one" key={skill.id}>
            <img className="skills-container-box-image" src={skill.src}></img>

            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
