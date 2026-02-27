"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover } from "@/lib/animations";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionCard({ children, className = "", delay = 0 }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      whileHover={shouldReduceMotion ? undefined : "hover"}
      variants={cardHover}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
