import React, { useEffect } from "react";

const KeyboardEventHandler = ({ children, onKeyEvent, handleKeys } = {}) => {
  useEffect(() => {
    const handle = event => {
      console.log("Caught key: ", event.key);
      if ((handleKeys && handleKeys.includes(event.key)) || !handleKeys) {
        onKeyEvent(event.key, event);
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [handleKeys, onKeyEvent]);

  return children;
};

export default KeyboardEventHandler;

export const EnterHandler = props => <KeyboardEventHandler {...props} handleKeys={["Enter"]} />;

export const EscHandler = props => <KeyboardEventHandler {...props} handleKeys={["Escape"]} />;
