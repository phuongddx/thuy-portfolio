"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  className?: string;
  stagger?: boolean;
}

export function AnimatedText({
  text,
  as = "p",
  delay = 0,
  className = "",
  stagger = false,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (stagger && !shouldReduceMotion) {
    const letters = text.split("");
    return (
      <Component className={className}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + i * 0.05,
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {text}
    </Component>
  );
}
