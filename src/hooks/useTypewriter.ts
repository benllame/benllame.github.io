import { useEffect, useRef, useState } from "react";
import type { TypewriterLine } from "@/types";

export function useTypewriter(lines: TypewriterLine[], charDelay = 30) {
  const [visibleText, setVisibleText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";
    setVisibleText("");
    setIsComplete(false);

    const typeNext = () => {
      if (lineIndex >= lines.length) {
        setIsComplete(true);
        return;
      }

      const currentLine = lines[lineIndex];
      const fullLine = `${currentLine.prompt}\n${currentLine.output}\n`;

      if (charIndex < fullLine.length) {
        currentText += fullLine[charIndex];
        charIndex += 1;
        setVisibleText(currentText);
        timeoutRef.current = window.setTimeout(typeNext, charDelay);
        return;
      }

      lineIndex += 1;
      charIndex = 0;
      timeoutRef.current = window.setTimeout(typeNext, 220);
    };

    timeoutRef.current = window.setTimeout(typeNext, 300);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [lines, charDelay]);

  return { visibleText, isComplete };
}
