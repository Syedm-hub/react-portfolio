import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import Slide from "react-reveal/Slide";

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
      <div className={styles.contentContainer}>
        <Slide left>
          <img src="./images/about-me.svg" alt="developer illustration" />
        </Slide>
        <Slide right>
          <div className={styles.content}>
            <p>
              A digital marketer who has a passion to learn new every day and
              has a goal-oriented mindset who always looks for ways to get the
              strategy into action.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
