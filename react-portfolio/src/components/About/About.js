import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
//import image from "../../156544831_775772586649145_1687675822764825902_n.jpg";
import styles from "./about.module.css";
import appStyles from "../../app.module.css";
const About = () => {
  const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });

  return (
    <div className={styles.aboutContainer} id="About">
      <h1
        className={appStyles.heading}
        ref={refRubber}
        onClick={() => getAnimation().play()}
      >
        About Me
      </h1>

      <p>
        A digital marketer who has a passion to learn new every day and has a
        goal-oriented mindset who always looks for ways to get the strategy into
        action.
      </p>
    </div>
  );
};

export default About;
