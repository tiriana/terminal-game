import React from "react";
import { ScreenCentered, Background } from "../Screen/Screen";
import { EnterHandler } from "components/Input/Keyboard/KeyboardEventHandler";
import { HugeText } from "components/Text/Text";
import { RandomGlitch } from "components/Glitch/Glitch";

export default ({ onExit, history }) => (
  <EnterHandler onKeyEvent={() => history.push("menu")}>
    <Background />
    <ScreenCentered>
      <HugeText>
        <RandomGlitch speed={0.3}>Press</RandomGlitch> <RandomGlitch speed={0.7}>[ENTER]</RandomGlitch>
      </HugeText>
    </ScreenCentered>
  </EnterHandler>
);
