import React from "react";
import styles from "./Clock.module.scss";

export default () => (
  <figure>
    <div class={styles.c}></div>
    <div class={styles.c2}>
      {[...Array(36)].map((e, i) => (
        <i key={`icon_${i}`}></i>
      ))}
    </div>
    <div class={styles.c3}></div>
    <div class={styles.c4}></div>
    <div class={styles.c5}></div>
    <div class={styles.c6}></div>
  </figure>
);
