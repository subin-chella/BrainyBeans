import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '📚', size: 'text-4xl', delay: 0, duration: 8, opacity: 0.3 },
    { emoji: '🧸', size: 'text-3xl', delay: 2, duration: 10, opacity: 0.25 },
    { emoji: '🎨', size: 'text-2xl', delay: 4, duration: 12, opacity: 0.2 },
    { emoji: '🧩', size: 'text-3xl', delay: 6, duration: 9, opacity: 0.3 },
    { emoji: '✏️', size: 'text-2xl', delay: 1, duration: 11, opacity: 0.25 },
    { emoji: '🎯', size: 'text-2xl', delay: 3, duration: 7, opacity: 0.2 },
    { emoji: '🌟', size: 'text-xl', delay: 5, duration: 13, opacity: 0.3 },
    { emoji: '🎪', size: 'text-3xl', delay: 7, duration: 8, opacity: 0.25 },
    { emoji: '🚂', size: 'text-2xl', delay: 8, duration: 14, opacity: 0.2 },
    { emoji: '🎈', size: 'text-xl', delay: 9, duration: 10, opacity: 0.3 },
    { emoji: '🦋', size: 'text-2xl', delay: 10, duration: 15, opacity: 0.25 },
    { emoji: '🌈', size: 'text-3xl', delay: 11, duration: 9, opacity: 0.3 },
    { emoji: '🎵', size: 'text-xl', delay: 12, duration: 11, opacity: 0.2 },
    { emoji: '🏰', size: 'text-2xl', delay: 13, duration: 12, opacity: 0.25 },
    { emoji: '🦄', size: 'text-3xl', delay: 14, duration: 16, opacity: 0.3 },
  ];

  // Static positioned elements for corners and sides
  const staticElements = [
    { emoji: '📖', position: 'top-10 left-10', size: 'text-5xl', opacity: 0.15 },
    { emoji: '🎭', position: 'top-20 right-16', size: 'text-4xl', opacity: 0.2 },
    { emoji: '🎪', position: 'bottom-32 left-16', size: 'text-4xl', opacity: 0.15 },
    { emoji: '🌟', position: 'bottom-20 right-10', size: 'text-3xl', opacity: 0.25 },
    { emoji: '🎨', position: 'top-1/3 left-5', size: 'text-3xl', opacity: 0.1 },
    { emoji: '🧩', position: 'top-2/3 right-8', size: 'text-3xl', opacity: 0.15 },
  ];

  return (
    <>
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {elements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size}`}
            style={{ 
              opacity: element.opacity,
              left: `${Math.random() * 100}%`,
            }}
            initial={{
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              rotate: 0,
            }}
            animate={{
              y: -100,
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              rotate: 360,
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
              rotate: {
                duration: element.duration * 2,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Static Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {staticElements.map((element, index) => (
          <motion.div
            key={`static-${index}`}
            className={`absolute ${element.position} ${element.size}`}
            style={{ opacity: element.opacity }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Subtle Particle Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-primary-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            initial={{
              y: typeof window !== 'undefined' ? window.innerHeight : 1000,
            }}
            animate={{
              y: -50,
              x: [0, 30, -30, 0],
            }}
            transition={{
              duration: 20 + index * 2,
              delay: index * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Corner Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Left Corner */}
        <motion.div
          className="absolute top-5 left-5 text-6xl opacity-10"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📚
        </motion.div>

        {/* Top Right Corner */}
        <motion.div
          className="absolute top-8 right-8 text-5xl opacity-15"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🧸
        </motion.div>

        {/* Bottom Left Corner */}
        <motion.div
          className="absolute bottom-10 left-8 text-4xl opacity-20"
          animate={{
            x: [0, 10, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          🎨
        </motion.div>

        {/* Bottom Right Corner */}
        <motion.div
          className="absolute bottom-6 right-6 text-5xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌟
        </motion.div>
      </div>
    </>
  );
};