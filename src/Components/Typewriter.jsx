import React, { useState, useEffect } from "react";

const Typewriter = ({
  words,
  speed = 100,
  repeat = true,
  pauseDuration = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (index < currentWord.length && !isDeleting) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (index === currentWord.length && !isDeleting) {
      // Pause before deleting and moving to the next word
      setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && index > 0) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, index - 1));
        setIndex(index - 1);
      }, speed / 2);
      return () => clearTimeout(timeoutId);
    } else if (isDeleting && index === 0) {
      // Move to the next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Cycle through words
    }
  }, [index, wordIndex, isDeleting, words, speed, repeat, pauseDuration]);

  return (
    <span>
      {displayedText}
      <span className="text-white animate-blink font-bold">|</span>{" "}
      {/* Cursor */}
    </span>
  );
};

export default Typewriter;
