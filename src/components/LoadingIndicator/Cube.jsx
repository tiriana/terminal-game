import React from "react";
import styles from "./Cube.module.scss";

const spawn = (times, cb) => [...Array(times)].map((e, i) => cb(i));

export default () => (
  <div className={styles.grid}>
    {spawn(16, i => (
      <div key={`cube_${i}`} className={styles.cube}>
        <div className={styles.squisher}>
          {spawn(3, i => (
            <div key={`face_${i}`} className={styles.cube__face} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
