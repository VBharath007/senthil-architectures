"use client";
import { Localized } from "@/providers/LanguageProvider";


import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/layout/Container";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { PROCESS, PROJECTS, STATS } from "@/data/site";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

const PAGE_SERVICES = [
  { icon: "Compass", title: "Architectural Design & Planning", description: "Concept design, master planning, and structural approvals." },
  { icon: "Sofa", title: "Interior Design & Styling", description: "Space planning, material selection, and custom interiors." },
  { icon: "Building2", title: "Design + Build (Turnkey Execution)", description: "End-to-end delivery from initial concept to final handover." },
  { icon: "DraftingCompass", title: "Project Supervision & Drawings", description: "Regular site supervision, working drawings, and detailing." }
];

const FAQS = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on scale and complexity. A standard residential design-build project typically takes 8-12 months from concept to final handover, while commercial or larger projects may take longer." },
  { q: "Do you handle approvals and permits?", a: "Yes, our team assists with all necessary municipal approvals and structural planning required to get your project moving efficiently." },
  { q: "What areas do you serve?", a: "We are based in Madurai and take on projects across Tamil Nadu, bringing our 19+ years of expertise to a wide variety of locations." },
  { q: "Do you offer interior-only projects?", a: "Absolutely. We provide bespoke interior design and styling services independent of our architectural and build services." }
];

export default function ServicesPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const splashMaskSize = useTransform(heroScrollYProgress, [0, 0.5, 1], ["0%, 100% 100%", "300%, 100% 100%", "300%, 100% 100%"]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-ink-950">

        {/* Services Hero */}
        <section id="services-hero" ref={containerRef} className="relative w-full h-[200vh] bg-[#020504]">
          <div className="sticky top-0 w-full min-h-[100svh] pt-32 pb-24 flex items-center justify-center overflow-hidden">
          
          {/* Scroll-driven Paint Splash Grayscale Overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none z-[60]"
            style={{
              backgroundColor: "black",
              mixBlendMode: "color",
              WebkitMaskImage: "url('/splash.svg'), linear-gradient(black, black)",
              maskImage: "url('/splash.svg'), linear-gradient(black, black)",
              WebkitMaskPosition: "center, center",
              maskPosition: "center, center",
              WebkitMaskRepeat: "no-repeat, no-repeat",
              maskRepeat: "no-repeat, no-repeat",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              WebkitMaskSize: splashMaskSize as any,
              maskSize: splashMaskSize as any,
              transform: "translateZ(0)"
            }}
          />

          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,229,153,0.03)_0%,transparent_50%)] pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.05] tracking-tight text-white max-w-2xl mb-6"><Localized>
                  From Your Idea to
                  </Localized><br />
                  <span className="italic font-light text-[#00E599] block mt-2"><Localized>
                    Your Dream Space.
                  </Localized></span>
                </h1>
                
                <Reveal delay={0.2}>
                  <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-white/70 max-w-xl font-light mb-10"><Localized>
                    We bring precision, creativity, and efficient execution to every stage of building, transforming concepts into timeless, performative landmarks.
                  </Localized></p>
                </Reveal>
                
                <Reveal delay={0.3} className="flex flex-wrap items-center gap-4">
                  <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00E599] text-black hover:bg-[#00c985] font-semibold text-[15px] rounded-full transition-colors"><Localized>
                    Explore Our Story </Localized><ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white hover:bg-white/10 font-medium text-[15px] rounded-full transition-colors"><Localized>
                    View Projects </Localized><ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>

              {/* Right Side Video */}
              <Reveal delay={0.4} className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                <video
                  src="/assets/service%20page.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </Reveal>
            </div>
          </Container>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="py-24 bg-ink-900/[0.02] dark:bg-ink-900/40">
          <Container>
            <div className="mb-16">
              <span className="mb-4 inline-block text-sm font-medium tracking-widest text-brand-500 uppercase"><Localized>
                 OUR SERVICES
              </Localized></span>
              <h2 className="text-4xl sm:text-5xl font-medium text-ink-900 dark:text-white max-w-2xl"><Localized>
                Expertise across the spectrum.
              </Localized></h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PAGE_SERVICES.map((service, i) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  index={i + 1}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Pinned Process Timeline */}
        <section className="py-32 bg-ink-50 dark:bg-[#030605] relative overflow-hidden transition-colors duration-500" ref={timelineRef}>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#00E599]/5 blur-[120px] pointer-events-none" />

          <Container>
            <Reveal className="text-center">
              <span className="mb-4 inline-block text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00E599] font-bold"><Localized>
                METHODOLOGY
              </Localized></span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-ink-950 dark:text-white mb-6"><Localized>
                Our </Localized><span className="italic font-light text-ink-700 dark:text-white/60"><Localized>Process.</Localized></span>
              </h2>
              <p className="text-sm sm:text-base text-ink-700/80 dark:text-white/60 max-w-2xl mx-auto leading-relaxed mb-24 transition-colors"><Localized>
                A seamless journey from initial concept to the final handover, ensuring quality at every step.
              </Localized></p>
            </Reveal>

            <div className="relative max-w-5xl mx-auto pb-24">

              {/* === ENHANCED PROGRESS INDICATOR === */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-ink-900/10 dark:bg-white/5 z-0 transition-colors" />

              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] z-10 pointer-events-none">
                {/* The main filled progress line */}
                <motion.div
                  className="absolute top-0 w-full"
                  style={{
                    height: progressHeight,
                    background: `linear-gradient(to bottom, #00E599, #059669)`,
                    boxShadow: `0 0 15px rgba(0,229,153,0.5), 0 0 25px rgba(5,150,105,0.3)`,
                  }}
                />

                {/* The traveling glow "comet" */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ top: progressHeight }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#00E599]"
                    style={{
                      boxShadow: `0 0 15px 4px rgba(0, 229, 153, 0.6), 0 0 25px 8px rgba(5, 150, 105, 0.4)`
                    }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              {/* TIMELINE ITEMS */}
              <div className="relative z-20 flex flex-col gap-12 md:gap-24">
                {PROCESS.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={step.step} className={`flex flex-col md:flex-row items-center relative group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                      {/* Empty space for alternating layout */}
                      <div className="hidden md:block md:w-1/2" />

                      {/* Center Node / Dot */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 z-30">
                        <div className="w-4 h-4 rounded-full border-2 border-[#00E599] bg-ink-50 dark:bg-[#030605] flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-[#00E599] group-hover:shadow-[0_0_15px_rgba(0,229,153,0.5)]" />
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                      >
                        <div className="bg-white dark:bg-ink-900/40 backdrop-blur-sm border border-ink-900/5 dark:border-white/5 rounded-2xl p-8 hover:border-[#00E599]/30 transition-colors duration-500 hover:bg-ink-50 dark:hover:bg-white/[0.04] shadow-sm dark:shadow-xl group-hover:-translate-y-1 transform">
                          <span className="inline-block text-[#00E599] font-mono font-bold text-[11px] sm:text-xs tracking-widest mb-4 bg-[#00E599]/10 px-3 py-1.5 rounded-md"><Localized>
                            STEP </Localized><Localized>{step.step}</Localized>
                          </span>
                          <h3 className="text-2xl font-serif font-normal text-ink-950 dark:text-white mb-3 transition-colors"><Localized>{step.title}</Localized></h3>
                          <p className="text-sm sm:text-base text-ink-700/90 dark:text-white/60 leading-relaxed transition-colors"><Localized>{step.description}</Localized></p>
                        </div>
                      </motion.div>

                    </div>
                  );
                })}
              </div>

            </div>
          </Container>
        </section>

        {/* Why Choose Us Strip */}
        <section className="py-16 sm:py-24 bg-ink-100 dark:bg-ink-900 text-ink-950 dark:text-white transition-colors duration-500">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {STATS.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.1}>
                  <div className="flex flex-col border-l border-ink-900/20 dark:border-white/20 pl-3 sm:pl-6 h-full justify-center transition-colors">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-500 mb-1 sm:mb-2"><Localized>{stat.value}</Localized></span>
                    <span className="text-[10px] sm:text-sm text-ink-700 dark:text-white/70 uppercase tracking-wider sm:tracking-widest leading-relaxed transition-colors break-words"><Localized>{stat.label}</Localized></span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Visual Project References tied to Services */}
        <section className="py-24 bg-ink-900/[0.02] dark:bg-ink-900/40">
          <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12 sm:mb-16">
              <Reveal>
                <span className="mb-3 inline-block text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00E599] font-bold"><Localized>
                  PORTFOLIO HIGHLIGHTS
                </Localized></span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-ink-950 dark:text-white"><Localized>
                  Services in </Localized><span className="italic font-light text-ink-700 dark:text-white/60"><Localized>Action.</Localized></span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-ink-700/80 dark:text-white/60 max-w-md"><Localized>
                  Explore how our architectural expertise and creative vision shape real-world environments.
                </Localized></p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/projects" className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-medium pb-2 border-b border-brand-500/30 hover:border-brand-500 transition-colors"><Localized>
                  View All Projects </Localized><ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <div className="w-full">
              <ProjectCarousel projects={PROJECTS.filter(p => p.cover === 'built' || p.categories.includes('Architecture Design')).slice(0, 6).map((project, idx) => ({
                id: String(idx),
                name: project.title,
                category: project.categories[0],
                image: `/assets/projects/${project.slug}/${project.cover}`,
                slug: project.slug,
              }))} />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-ink-50 dark:bg-[#030605] relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="mb-4 inline-block text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#00E599] font-bold"><Localized>
                    FAQ
                  </Localized></span>
                  <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-ink-950 dark:text-white mb-6"><Localized>
                    Common </Localized><br />
                    <span className="italic font-light text-ink-700 dark:text-white/60"><Localized>Inquiries.</Localized></span>
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-700/80 dark:text-white/60 max-w-md"><Localized>
                    Clear answers to help you understand our design-build process and how we can bring your architectural vision to life.
                  </Localized></p>
                </Reveal>
              </div>
              
              <div className="lg:col-span-7 flex flex-col gap-4">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <Reveal key={idx} delay={idx * 0.1}>
                      <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white dark:bg-ink-900/60 border-brand-500/30 shadow-lg dark:shadow-brand-500/5' : 'bg-white/50 dark:bg-white/[0.02] border-ink-900/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.04]'}`}>
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="flex w-full items-center justify-between p-6 sm:p-8 text-left group"
                        >
                          <span className={`text-base sm:text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-brand-600 dark:text-[#00E599]' : 'text-ink-900 dark:text-white group-hover:text-brand-500'}`}>
                            <Localized>{faq.q}</Localized>
                          </span>
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-[#00E599] text-ink-950 rotate-45' : 'bg-ink-900/5 dark:bg-white/10 text-ink-900 dark:text-white group-hover:bg-[#00E599] group-hover:text-ink-950'}`}>
                            <Plus className="h-4 w-4" />
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 sm:px-8 pb-8">
                                <div className="h-px w-full bg-ink-900/5 dark:bg-white/5 mb-6" />
                                <p className="text-sm sm:text-base leading-relaxed text-ink-700/90 dark:text-white/70">
                                  <Localized>{faq.a}</Localized>
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
