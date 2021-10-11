import React from "react";

import Form from "./Form";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <div bottom>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
