import React from "react";
import { Jargon } from "components/Jargon/Jargon";
import Screen from "../Screen/Screen";
import { EscHandler } from "components/Input/Keyboard/KeyboardEventHandler";

export default ({ title, history } = {}) => (
  <EscHandler onKeyEvent={() => history.push("/")}>
    <Screen>
      <h1>Screen {title} is not ready</h1>
      <h2>Press [ESC] to return</h2>
      <div
        style={{
          position: "relative",
          left: "20px",
          opacity: 0.5,
        }}
      >
        <Jargon maxLines={10} />{" "}
      </div>
    </Screen>
  </EscHandler>
);
