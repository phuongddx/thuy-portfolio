import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  rest: {
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    boxShadow: "0 4px 6px rgba(139, 94, 60, 0.1)",
  },
  hover: {
    scale: 1.02,
    rotateY: 5,
    rotateX: -5,
    boxShadow: "0 25px 50px rgba(139, 94, 60, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const letterStagger: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
