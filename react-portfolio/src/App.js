import React from "react";
import Container from "@material-ui/core/Container";

import {
  Header,
  HeroContainer,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "./components";
import { data } from "./data";
import styles from "./app.module.css";

const App = () => {
  const navList = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <>
      <Container maxWidth="lg" className={styles.container}>
        <Header list={navList} />
        <HeroContainer />
        <About />
        <Skills />
        <Portfolio data={data} />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default App;
