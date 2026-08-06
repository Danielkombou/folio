"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const LINE_COUNT = 20;
const DURATIONS = [8.2, 9.7, 11.3, 8.9, 10.1, 11.8, 9.4, 8.5, 10.6, 11.2, 9.1, 10.8, 8.7, 11.5, 9.9, 10.3, 8.4, 11.1, 9.6, 10.7];

export default function AnimatedBackground() {
  const lines = useMemo(() => Array.from({ length: LINE_COUNT }, (_, i) => i), []);

  return (
    <div className="background-lines">
      {lines.map((i) => (
        <motion.div
          key={i}
          className="line"
          style={{
            left: `${(i + 1) * (100 / (LINE_COUNT + 1))}%`,
          }}
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: "100%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: DURATIONS[i],
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}