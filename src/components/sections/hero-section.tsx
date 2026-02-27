"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { FloatingElement } from "@/components/ui/floating-element";
import { resumeData } from "@/lib/data";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Floating decorative elements */}
      <FloatingElement duration={4} distance={15} className="absolute left-10 top-1/4 text-4xl opacity-20">
        💼
      </FloatingElement>
      <FloatingElement duration={5} distance={20} className="absolute right-16 top-1/3 text-3xl opacity-20">
        ✨
      </FloatingElement>
      <FloatingElement duration={3.5} distance={12} className="absolute bottom-1/4 left-1/4 text-3xl opacity-20">
        🎯
      </FloatingElement>

      <div className="relative z-10 text-center">
        <AnimatedText
          text={resumeData.name}
          as="h1"
          stagger
          className="mb-4 text-5xl font-bold tracking-tight text-warm-brown md:text-7xl"
        />

        <AnimatedText
          text={resumeData.title}
          as="h2"
          delay={0.5}
          className="mb-8 text-xl font-light text-muted-gold md:text-2xl"
        />

        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-soft-coral px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-deep-burgundy"
        >
          Let&apos;s Connect
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-muted-gold" />
      </motion.div>
    </section>
  );
}
