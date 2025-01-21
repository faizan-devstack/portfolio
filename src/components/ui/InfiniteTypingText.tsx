'use client'

import React, { useEffect, useState } from 'react';

interface InfiniteTypingTextProps {
  text: string;
  typingSpeed: number;  // Speed of typing (slower)
  deletingSpeed: number;  // Speed of deleting (faster)
  delayTime: number;  // Time to wait before deleting starts
}

const InfiniteTypingText: React.FC<InfiniteTypingTextProps> = ({ text, typingSpeed, deletingSpeed, delayTime }) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        // Deleting text quickly
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        // Typing text slowly
        setTypedText((prev) => {
          const newText = text.slice(0, prev.length + 1);
          if (newText === text) {
            setIsTypingCompleted(true);
          }
          return newText;
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [text, typingSpeed, deletingSpeed, isDeleting]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTypingCompleted) {
      // Wait for a little break after typing is completed
      timeout = setTimeout(() => {
        setIsDeleting(true); // Start deleting text
      }, delayTime);
    }

    return () => clearTimeout(timeout); // Cleanup timeout on re-render
  }, [isTypingCompleted, delayTime]);

  useEffect(() => {
    if (typedText === '') {
      // Once the text is deleted completely, reset and start the typing process again
      setIsDeleting(false);
      setIsTypingCompleted(false);
    }
  }, [typedText]);

  return <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9D0000] text-center">{typedText}</p>;
};

export default InfiniteTypingText;
