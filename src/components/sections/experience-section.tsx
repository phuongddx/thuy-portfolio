"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { MotionCard } from "@/components/ui/motion-card";
import { resumeData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-soft-peach/30 py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedText
          text="Work Experience"
          as="h2"
          className="mb-12 text-center text-4xl font-bold text-warm-brown"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {resumeData.experience.map((exp, index) => (
            <MotionCard key={exp.company} delay={index * 0.2} className="h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-warm-brown">{exp.company}</h3>
                <p className="text-sm text-soft-coral">{exp.period}</p>
              </div>

              <h4 className="mb-3 font-semibold text-muted-gold">{exp.position}</h4>

              <p className="mb-4 text-sm leading-relaxed text-warm-brown/70">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start text-xs text-warm-brown/60"
                  >
                    <span className="mr-2 text-soft-coral">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
