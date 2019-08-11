import React from "react";
import pickHTMLProps from "utils/pickHTMLProps";
import classnames from "utils/classnames";
import styles from "./Screen.module.scss";
import Grid from "components/Grid/Grid";

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

export const Background = () => (
  <div
    className={styles.background}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <Grid />
  </div>
);
