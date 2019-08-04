import React, { useState, useEffect, useCallback, useRef } from "react";
import { createGenerator } from "utils/jargon";
import { Typing } from "components/Typing/Typing";

export const Jargon = ({ maxLines = 30 }) => {
  const generator = useRef();
  const [commands, setCommands] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    generator.current && generator.current.destroy();
    const onCommand = newCmd => {
      setCommands(commands => [...commands, newCmd].slice(-maxLines));
      setTyping(true);
    };
    generator.current = createGenerator({
      onCommand,
      speed: 1.2,
    });

    generator.current.start();

    return () => generator.current.destroy();
  }, [maxLines]);

  useEffect(() => {
    if (generator.current) {
      if (typing) {
        generator.current.pause();
      } else {
        generator.current.resume();
      }
    }
  }, [typing]);

  return (
    <div>
      {commands.map(cmdTxt => (
        <div key={`command-${cmdTxt}`}>
          <Typing onTypingDone={() => setTyping(false)}>{cmdTxt}</Typing>
        </div>
      ))}
    </div>
  );
};
