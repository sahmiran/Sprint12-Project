import React, { useEffect, useState } from "react";
import "./Skills.css";

import { API } from "../api/useAxios.js";
import { useTheme } from "../context/useTheme.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Skills() {
  const { theme } = useTheme();
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    API.get("/skills")
      .then((responce) => {
        setSkillsData(responce.data);
        console.log(responce.data);
        toast.success("skilles mock api den alindi");
      })
      .catch()
      .finally();
  }, []);

  return (
    <section className={`skills ${theme}`}>
      <div className="skills--container">
        <div className={`skills--container--title`}>
          <h1 className={`skills--container--title--h1 ${theme}`}>Skills</h1>
        </div>
        <div className="skills--container--box">
          {skillsData.slice(0, 3).map((skill) => (
            <div className="skills--container--box--one" key={skill.id}>
              <img
                className="skills--container--box--image"
                src={skill.src}
                alt={skill.title}
              />
              <p className="skills--container--box--text">{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="skills--container--box">
          {skillsData.slice(3, 6).map((skill) => (
            <div className="skills--container--box--one" key={skill.id}>
              <img
                className="skills--container--box--image"
                src={skill.src}
                alt={skill.title}
              />
              <p className="skills--container--box--text">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
