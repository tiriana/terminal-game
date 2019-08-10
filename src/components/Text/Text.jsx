import React from "react";
import styles from "./Text.module.scss";
import pickHTMLProps from "utils/pickHTMLProps";
import classnames from "utils/classnames";

const Text = ({ children, className, ...rest } = {}) => (
  <div className={classnames([className, styles.text])} {...pickHTMLProps(rest)}>
    {children}
  </div>
);

export default Text;

const createComponent = _className => ({ className, ...rest } = {}) => (
  <Text {...rest} className={classnames([className, _className])} />
);

export const HugeText = createComponent(styles.hugeText);
export const BigText = createComponent(styles.bigText);
export const NormalText = Text;
export const SmallText = createComponent(styles.smallText);
