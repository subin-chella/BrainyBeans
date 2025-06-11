import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '📚', size: 'text-2xl', delay: 0, duration: 8 },
    { emoji: '🧸', size: 'text-xl', delay: 2, duration: 10 },
    { emoji: '🎨', size: 'text-lg', delay: 4, duration: 12 },
    { emoji: '🧩', size: 'text-xl', delay: 6, duration: 9 },
    { emoji: '✏️', size: 'text-lg', delay: 1, duration: 11 },
    { emoji: '🎯', size: 'text-lg', delay: 3, duration: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-10`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};