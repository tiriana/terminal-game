import React from "react";
import styles from "./LoadingIndicator.module.scss";
import { Jargon } from "components/Jargon/Jargon";
import Cube from "./Cube";
import { useAppContext } from "appContext";

export default () => {
  const { loading } = useAppContext();

  return loading ? (
    <div className={styles.loadingIndicator}>
      <Cube />
    </div>
  ) : null;
};
