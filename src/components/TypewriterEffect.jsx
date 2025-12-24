import { useState, useEffect } from "react";

export const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setShowCursor(true);
    let i = 0;
    let rafId;
    let lastTime = 0;
    const typingSpeed = 50; // ms per character

    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const elapsed = currentTime - lastTime;

      if (elapsed >= typingSpeed) {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          lastTime = currentTime;
        } else {
          // Typing complete, hide cursor after a delay
          setTimeout(() => setShowCursor(false), 1000);
          return;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [text]);

  return (
    <span aria-live="polite">
      {displayText}
      {showCursor && <span style={{ opacity: 0.7 }}>|</span>}
    </span>
  );
};
