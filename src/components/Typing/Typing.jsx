import React from "react";
import Typist from "react-typist";

export const Typing = ({ children, onTypingDone = () => {} } = {}) => (
  <Typist avgTypingDelay={5} cursor={{ show: false }} onTypingDone={onTypingDone}>
    {children}
  </Typist>
);
