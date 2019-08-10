import React from "react";
import pickHTMLProps from "utils/pickHTMLProps";
import classnames from "utils/classnames";
import styles from "./Screen.module.scss";

const Screen = ({ children, className, ...rest } = {}) => (
  <div className={classnames([className, styles.screen])} {...pickHTMLProps(rest)}>
    {children}
  </div>
);

export default Screen;

const createComponent = _className => ({ className, ...rest } = {}) => (
  <Screen {...rest} className={classnames([className, _className])} />
);

export const ScreenCentered = createComponent(styles.centered);
