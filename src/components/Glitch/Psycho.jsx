import React from "react";
import styles from "./Psycho.module.scss";

export default ({ children }) => {
  return (
    <p
      className={styles.psycho}
      data-text={children
        .split("")
        .reverse()
        .join("")}
    >
      {children}
    </p>
  );
};
