import React, { useEffect, useState, useRef } from "react";
import GlitchEffect from "react-glitch-effect";

const Glitch = ({ children, ...props } = {}) => (
  <GlitchEffect style={{ display: "inline-block" }} {...props}>
    {children}
  </GlitchEffect>
);

export const RandomGlitch = ({ children, speed = 1 } = {}) => {
  const [disabled, setDisabled] = useState(true);
  const timeout = useRef();

  useEffect(() => {
    const delay = disabled ? 1 : (Math.random() * 5000 + 1000) / Math.max(Number.MIN_VALUE, speed);
    timeout.current = setTimeout(() => setDisabled(disabled => !disabled), delay);

    return () => clearTimeout(timeout.current);
  }, [disabled, speed]);

  return (
    <Glitch iterationCount={1} disabled={disabled}>
      {children}
    </Glitch>
  );
};

export const OneTime = ({ duration = 1000, ...props }) => {
  const timeout = useRef();
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    timeout.current = setTimeout(() => setFinished(true), duration);

    return () => clearTimeout(timeout.current);
  });

  return finished ? props.children : <Glitch iterationCount={1}>{props.children}</Glitch>;
};

// export const OneTime = ({ children } = {}) => <Glitch iterationCount={1}>{children}</Glitch>;
