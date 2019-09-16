import React, { useState, useEffect, useCallback, useRef } from "react";
import { createGenerator } from "utils/jargon";
import { Typing } from "components/Typing/Typing";

export const Jargon = ({ maxLines = 30, speed = 1, typingEffect = true }) => {
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
      speed: 1.2 * speed,
    });

    generator.current.start();

    return () => generator.current.destroy();
  }, [maxLines, speed]);

  useEffect(() => {
    if (generator.current) {
      if (typing && typingEffect) {
        generator.current.pause();
      } else {
        generator.current.resume();
      }
    }
  }, [typing, typingEffect]);

  return (
    <div>
      {commands.map(cmdTxt => (
        <div key={`command-${cmdTxt}`}>
          {typingEffect ? <Typing onTypingDone={() => setTyping(false)}>{cmdTxt}</Typing> : cmdTxt}
        </div>
      ))}
    </div>
  );
};
