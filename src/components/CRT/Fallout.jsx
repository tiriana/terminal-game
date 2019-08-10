/* @see https://codepen.io/CosX/pen/jbQRdL */

import React from "react";
import "./Fallout.scss";

export default ({ children }) => (
  <div className="body">
    <div className="overlay" />
    <div className="wrapper">{children}</div>
  </div>
);
