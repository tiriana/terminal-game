import React, { useRef, useCallback, useState, useEffect } from "react";
import styles from "./Countdown.module.scss";
import { HugeText } from "components/Text/Text";

export default ({ seconds = 3, onFinished = () => {} } = {}) => {
  const timer = useRef();
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [finished, setFinished] = useState(false);

  const tick = useCallback(() => {
    setSecondsLeft(secondsLeft => secondsLeft - 1);
  }, []);

  useEffect(() => {
    if (secondsLeft < 0) {
      setFinished(true);
    }
  }, [onFinished, secondsLeft]);

  useEffect(() => {
    if (finished) {
      onFinished();
      clearInterval(timer.current);
    }
  }, [finished, onFinished]);

  useEffect(() => {
    timer.current = setInterval(tick, 1000);

    return () => clearInterval(timer.current);
  }, [tick]);

  return (
    <div className={styles.countdown}>
      <HugeText
        style={{
          animationIterationCount: seconds + 1,
        }}
        className={styles.number}
      >
        {finished ? null : secondsLeft >= 0 ? secondsLeft : null}
      </HugeText>
    </div>
  );
};
