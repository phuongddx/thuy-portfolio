"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FloatingElement({
  children,
  duration = 3,
  distance = 10,
  className = "",
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
