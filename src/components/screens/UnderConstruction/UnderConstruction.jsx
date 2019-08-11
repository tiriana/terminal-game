import React from "react";
import { Jargon } from "components/Jargon/Jargon";
import Screen, { Background } from "../Screen/Screen";
import { NormalText, BigText, HugeText } from "components/Text/Text";
import { EscHandler } from "components/Input/Keyboard/KeyboardEventHandler";

export default ({ title, history, ...rest } = {}) => (
  <EscHandler onKeyEvent={() => history.push("/")}>
    <Background />
    <Screen>
      <BigText>Screen {title} is not ready</BigText>
      <HugeText>Press [ESC] to return</HugeText>
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
