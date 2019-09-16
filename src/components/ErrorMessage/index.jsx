import React from "react";
import styles from "./ErrorMessage.module.scss";
import { useAppContext } from "appContext";
import { DrawAttention } from "components/Animation";

export default () => {
  const { error } = useAppContext();

  console.log("error", error);

  return error ? (
    <div className={styles.wrapper}>
      <DrawAttention>
        <div className={styles.errorMessage}>{error}</div>
      </DrawAttention>
    </div>
  ) : null;
};
