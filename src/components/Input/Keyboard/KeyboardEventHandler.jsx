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

export const KEY_ARROW_UP = "ArrowUp";
export const KEY_ARROW_DOWN = "ArrowDown";
export const KEY_ENTER = "Enter";
export const KEY_ESC = "Escape";

export default KeyboardEventHandler;

export const EnterHandler = props => <KeyboardEventHandler {...props} handleKeys={[KEY_ENTER]} />;

export const EscHandler = props => <KeyboardEventHandler {...props} handleKeys={[KEY_ESC]} />;
