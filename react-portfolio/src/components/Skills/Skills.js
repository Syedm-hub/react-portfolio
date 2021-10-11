import React from "react";

import CreateSkills from "./CreateSkills";

import styles from "./skills.module.css";
import appStyles from "../../app.module.css";
const Skills = () => {
  const devSkills = [
    { name: "js", color: `yellow` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3", color: "blue" },
    { name: "git-alt", color: "orange" },
    { name: "github", color: "grey" },
  ];

  const DesignSkills = [
    { name: "xd", color: "blue" },
    { name: "photoshop", color: "blue" },
  ];
  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>Development Skills</h2>
      <p>React | JavaScript | NodeJS | MongoDB </p>
      <div duration={1500} top>
        <CreateSkills skills={devSkills} size="9vw" />
      </div>
      <br />
      <h2 className={appStyles.heading}> Design Skills</h2>
      <div duration={2000} bottom>
        <p> Adobe Photoshop | Canva </p>
        <CreateSkills skills={DesignSkills} size="9vw" />
      </div>
    </div>
  );
};

export default Skills;
