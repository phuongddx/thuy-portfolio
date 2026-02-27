"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
import { resumeData } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedText
          text="Let's Connect!"
          as="h2"
          className="mb-12 text-4xl font-bold text-warm-brown md:text-5xl"
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <motion.a
            href={`tel:${resumeData.contact.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <Phone className="h-8 w-8 text-soft-coral" />
            <span className="text-warm-brown">{resumeData.contact.phone}</span>
          </motion.a>

          <motion.a
            href={`mailto:${resumeData.contact.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <Mail className="h-8 w-8 text-soft-coral" />
            <span className="text-warm-brown">{resumeData.contact.email}</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-md"
          >
            <MapPin className="h-8 w-8 text-soft-coral" />
            <span className="text-warm-brown">{resumeData.contact.location}</span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <motion.a
            href={`mailto:${resumeData.contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-soft-coral px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-deep-burgundy"
          >
            Email Me
          </motion.a>

          <motion.a
            href={`https://${resumeData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-muted-gold transition-colors hover:text-soft-coral"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn Profile</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
