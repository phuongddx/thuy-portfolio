"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { ProgressBar } from "@/components/ui/progress-bar";
import { resumeData } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="mx-auto max-w-3xl">
        <AnimatedText
          text="Skills & Expertise"
          as="h2"
          className="mb-12 text-center text-4xl font-bold text-warm-brown"
        />

        <div className="space-y-6">
          {resumeData.skills.map((skill, index) => (
            <ProgressBar
              key={skill.label}
              label={skill.label}
              value={skill.value}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
