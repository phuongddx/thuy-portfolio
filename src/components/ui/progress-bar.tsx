"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
  delay?: number;
  className?: string;
}

export function ProgressBar({
  label,
  value,
  delay = 0,
  className = "",
}: ProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-warm-brown">{label}</span>
        <span className="text-muted-gold">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-soft-peach">
        <motion.div
          className="h-full rounded-full bg-soft-coral"
          initial={{ width: 0 }}
          whileInView={{ width: shouldReduceMotion ? `${value}%` : `${value}%` }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : delay,
            duration: shouldReduceMotion ? 0 : 1,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
