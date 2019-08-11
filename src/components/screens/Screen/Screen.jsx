import React from "react";
import pickHTMLProps from "utils/pickHTMLProps";
import classnames from "utils/classnames";
import styles from "./Screen.module.scss";
import Grid from "components/Grid/Grid";
import { OneTime as Glitch } from "components/Glitch/Glitch";

const Screen = ({ children, className, ...rest } = {}) => (
  <Glitch duration={200}>
    <div className={classnames([className, styles.screen])} {...pickHTMLProps(rest)}>
      {children}
    </div>
  </Glitch>
);

export default Screen;

const createComponent = _className => ({ className, ...rest } = {}) => (
  <Screen {...rest} className={classnames([className, _className])} />
);

export const ScreenCentered = createComponent(styles.centered);

export const Background = () => (
  <div className={styles.background}>
    <Grid />
  </div>
);
