import React from "react";
import styles from "./Neon.module.scss";

const Neon = ({ text }) => {
  return (
    <div className={styles.neon}>
      <span className={styles.text} data-text={text}>
        {text}
      </span>
      <span className={styles.spotlight}></span>
    </div>
  );
};

export default Neon;
