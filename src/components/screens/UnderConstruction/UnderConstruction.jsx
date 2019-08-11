import React from "react";
import { Jargon } from "components/Jargon/Jargon";
import Screen, { Background } from "../Screen/Screen";
import { NormalText, BigText } from "components/Text/Text";
import { EscHandler } from "components/Input/Keyboard/KeyboardEventHandler";

export default ({ title, history, ...rest } = {}) => (
  <EscHandler onKeyEvent={() => history.push("/")}>
    <Screen>
      <Background />
      <BigText>Screen {title} is not ready</BigText>
      <NormalText>Press [ESC] to return</NormalText>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
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
