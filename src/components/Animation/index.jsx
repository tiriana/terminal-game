import React from "react";
import { Animated } from "react-animated-css";
import "./Animation.css";

export default Animated;

export const DrawAttention = ({ children }) => (
  <Animated animationIn="headShake" animationOut="fadeOut" animationInDuration={800} animationOutDuration={1000}>
    {children}
  </Animated>
);
