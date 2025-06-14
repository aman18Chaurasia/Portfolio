
import React from "react";

interface TypewriterLoopProps {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
}

const TypewriterLoop: React.FC<TypewriterLoopProps> = ({
  text,
  speed = 70,
  pause = 1500,
  className = "",
}) => {
  const [displayed, setDisplayed] = React.useState("");
  const [typing, setTyping] = React.useState(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => setTyping(true), 350);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, text, speed, pause]);
  
  return (
    <span className={`${className} whitespace-nowrap`}>
      {displayed}
      <span className="border-r-2 border-purple-400 animate-pulse ml-1" />
    </span>
  );
};

export default TypewriterLoop;
