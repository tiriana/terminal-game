import React from "react";
import Screen from "../Screen/Screen";
import styles from "./Welcome.module.scss";
import { EnterHandler } from "components/Input/Keyboard/KeyboardEventHandler";

export default ({ onExit, history }) => (
  <EnterHandler onKeyEvent={() => history.push("menu")}>
    <Screen className={styles.welcome}>
      <h1>Press [ENTER]</h1>
    </Screen>
  </EnterHandler>
);
