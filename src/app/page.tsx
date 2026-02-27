import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PartnershipsSection } from "@/components/sections/partnerships-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PartnershipsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
