import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";
import styles from "./hero.module.css";

const HeroContainer = () => {
  const { ref: refRight } = useWebAnimations({ ...bounceInRight });
  const { ref: refLeft } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className={styles.heroContainer} id="Home">
      <div className={styles.content} ref={refLeft}>
        <h1 className={styles.bigOne}>
          Hello! <br />
        </h1>
        <p>
          A digital marketer who has a passion to learn new every day and has a
          goal-oriented mindset who always looks for ways to get the strategy
          into action.
        </p>
      </div>
      <img
        ref={refRight}
        src="./images/header-image.svg"
        alt="developer illustration"
      />
    </div>
  );
};

export default HeroContainer;
