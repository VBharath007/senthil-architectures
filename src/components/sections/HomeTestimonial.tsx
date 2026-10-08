"use client";
import { Localized } from "@/providers/LanguageProvider";


import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export function HomeTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ink-50 dark:bg-ink-900/30 rounded-l-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Header */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="mb-4 inline-block text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00E599] font-bold"><Localized>
                CLIENT STORIES
              </Localized></span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.18] text-ink-950 dark:text-white mb-6">
                <Localized>Words of Trust.</Localized>
              </h2>
              <p className="text-sm sm:text-base text-ink-700/80 dark:text-white/60 leading-relaxed"><Localized>
                Hear from the people who have experienced our design-build process and the spaces we've created together.
              </Localized></p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex gap-3">
              <button onClick={prev} className="w-12 h-12 flex items-center justify-center rounded-full border border-ink-200 dark:border-white/10 text-ink-900 dark:text-white hover:bg-[#00E599] hover:border-[#00E599] hover:text-ink-950 transition-colors duration-300">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-12 h-12 flex items-center justify-center rounded-full border border-ink-200 dark:border-white/10 text-ink-900 dark:text-white hover:bg-[#00E599] hover:border-[#00E599] hover:text-ink-950 transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </Reveal>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-8">
            <div className="relative">
              <Quote className="absolute -top-10 -left-6 sm:-left-10 w-20 h-20 sm:w-24 sm:h-24 text-ink-100 dark:text-white/5 -z-10 rotate-180" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-ink-50 dark:bg-[#030605] border border-ink-900/5 dark:border-white/5 rounded-[2rem] p-6 sm:p-12 shadow-xl"
                >
                  <div className="flex items-center gap-1.5 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E599]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-serif italic leading-relaxed text-ink-900 dark:text-white mb-8 sm:mb-10">
                    "<Localized>{testimonial.quote}</Localized>"
                  </p>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0 bg-gradient-to-br from-[#00c6ff] to-[#0072ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,198,255,0.4)]">
                      <span className="text-white font-bold text-xl sm:text-2xl">
                        {testimonial.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-ink-950 dark:text-white leading-tight">
                        <Localized>{testimonial.author}</Localized>
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-700/80 dark:text-white/70 mt-0.5">
                        <Localized>{testimonial.role}</Localized>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
