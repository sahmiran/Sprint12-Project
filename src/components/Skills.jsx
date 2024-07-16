import React, { useEffect, useState } from "react";
import "./Skills.css";
import { API } from "../api/useAxios";
import { useTheme } from "../context/useTheme";

//import { skillsData } from "../data/skillsIndex.js";
function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [error, setError] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    API.get("/skills")
      .then((responce) => {
        setSkillsData(responce.data);
        console.log(responce.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <section className={`skills-container ${theme}`}>
      <div className="skills-container-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-container-box">
        {skillsData.slice(0, 3).map((skill) => (
          <div className="skills-container-box-one" key={skill.id}>
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
