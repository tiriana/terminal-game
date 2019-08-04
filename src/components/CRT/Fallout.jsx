/* @see https://codepen.io/CosX/pen/jbQRdL */

import React from "react";
import "./Fallout.scss";

export default ({ children }) => (
  <>
    <div className="overlay" />
    <div>{children}</div>
  </>
);
