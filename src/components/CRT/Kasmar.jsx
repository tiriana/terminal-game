/* @see https://codepen.io/Daniel_Kasmar/pen/MMjmKG */
/* @see http://aleclownes.com/2017/02/01/crt-display.html */

import React from "react";
import "./Kasmar.scss";

export default ({ children }) => (
  <div className="body">
    <div className="wrapper crt">{children}</div>
  </div>
);
