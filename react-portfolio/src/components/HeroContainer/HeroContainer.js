import React from "react";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";
import styles from "./hero.module.css";

const HeroContainer = () => {
  const { ref: refLeft } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className={styles.heroContainer} id="Home">
      <div className={styles.content} ref={refLeft}>
        <h1 className={styles.bigOne}>
          Hello! <br />
        </h1>
        <p>I'm a front-end JavaScript developer and a content creator!</p>
      </div>
    </div>
  );
};

export default HeroContainer;
