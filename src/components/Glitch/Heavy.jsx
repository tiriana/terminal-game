import React, { useEffect, useRef, useState } from "react";
import styles from "./Heavy.module.scss";

const Heavy = ({ children } = {}) => (
  <div className={styles.glitchWrapper}>
    <div
      className={styles.glitch}
      data-text={children
        .split("")
        .reverse()
        .join("")}
    >
      {children}
    </div>
  </div>
);

export default Heavy;

export const OneTime = ({ duration = 1000, ...props }) => {
  const timeout = useRef();
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    timeout.current = setTimeout(() => setFinished(true), duration);

    return () => clearTimeout(timeout.current);
  });

  return finished ? props.children : <Heavy {...props} />;
};
