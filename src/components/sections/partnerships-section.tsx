"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { resumeData } from "@/lib/data";

export function PartnershipsSection() {
  return (
    <section className="bg-soft-peach/30 py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimatedText
          text="Industries & Expertise"
          as="h2"
          className="mb-8 text-center text-4xl font-bold text-warm-brown"
        />

        <AnimatedText
          text="Specialized recruitment across multiple sectors"
          as="p"
          delay={0.2}
          className="mb-12 text-center text-muted-gold"
        />

        {/* Animated marquee badges */}
        <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-lg">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...resumeData.industries, ...resumeData.industries].map(
              (industry, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap rounded-full bg-soft-peach px-6 py-3 text-sm font-medium text-warm-brown"
                >
                  {industry}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="mb-2 text-4xl font-bold text-soft-coral">100+</div>
          <div className="text-muted-gold">Successful Placements</div>
        </motion.div>
      </div>
    </section>
  );
}
