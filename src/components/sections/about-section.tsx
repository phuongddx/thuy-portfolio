"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Award, Building2 } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { resumeData } from "@/lib/data";

const iconMap = {
  "Years Experience": Briefcase,
  "Successful Placements": Award,
  Industries: Building2,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedText
          text="About Me"
          as="h2"
          className="mb-12 text-center text-4xl font-bold text-warm-brown"
        />

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-soft-peach shadow-xl">
              <User className="h-32 w-32 text-muted-gold" />
            </div>
          </motion.div>

          {/* Bio and stats */}
          <div>
            <AnimatedText
              text={resumeData.bio}
              as="p"
              className="mb-8 text-lg leading-relaxed text-warm-brown/80"
            />

            <div className="grid grid-cols-3 gap-4">
              {resumeData.stats.map((stat, index) => {
                const Icon = iconMap[stat.label as keyof typeof iconMap] || Award;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl bg-white p-4 text-center shadow-md"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-soft-coral" />
                    <div className="text-2xl font-bold text-warm-brown">{stat.value}</div>
                    <div className="text-xs text-muted-gold">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
