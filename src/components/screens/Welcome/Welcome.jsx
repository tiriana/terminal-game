import React from "react";
import { ScreenCentered } from "../Screen/Screen";
import { EnterHandler } from "components/Input/Keyboard/KeyboardEventHandler";
import { HugeText } from "components/Text/Text";

export default ({ onExit, history }) => (
  <EnterHandler onKeyEvent={() => history.push("menu")}>
    <ScreenCentered>
      <HugeText>Press [ENTER]</HugeText>
    </ScreenCentered>
  </EnterHandler>
);
