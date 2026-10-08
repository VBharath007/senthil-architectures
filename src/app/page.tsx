import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { WorkDrawings } from "@/components/sections/WorkDrawings";
import { Awards } from "@/components/sections/Awards";
import { HomeTestimonial } from "@/components/sections/HomeTestimonial";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContinuousPaintReveal } from "@/components/ui/ContinuousPaintReveal";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#f8faf9] text-ink-900">
      {/* Premium Background Grid - Optimized for performance */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" style={{ transform: 'translateZ(0)' }} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          <ContinuousPaintReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <Awards />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <HomeAbout />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <Process />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <HomeTestimonial />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <Services />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <WorkDrawings />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <Projects />
            </ScrollReveal>

            <Footer />
          </ContinuousPaintReveal>
        </main>
      </div>
    </div>
  );
}
