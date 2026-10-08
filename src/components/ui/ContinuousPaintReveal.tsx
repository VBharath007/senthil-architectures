"use client";

import React, { useEffect, useRef } from "react";

interface ContinuousPaintRevealProps {
  children: React.ReactNode;
}

/**
 * ContinuousPaintReveal:
 * Implements the full-website scroll-driven Black-and-White to Color engine.
 * - Entire website starts 100% in Black and White theme.
 * - As the user scrolls down ("scrol panna panna"): elements and sections smoothly transition
 *   into full vibrant color ("color full yakanum").
 * - When the user scrolls back up: elements return to architectural Black & White.
 * - Hovering any element/card instantly illuminates it in full color.
 */
export function ContinuousPaintReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    // Target sections and all visual media within the container
    const getTargets = () => {
      const sections = Array.from(
        container.querySelectorAll<HTMLElement>("section, footer, .paint-section")
      );
      const media = Array.from(
        container.querySelectorAll<HTMLElement>(
          "img, video, canvas, .liquid-glass-card, [class*='aspect-'], .project-card, [id='drawings'] .group"
        )
      );
      return Array.from(new Set([...sections, ...media]));
    };

    const targets = getTargets();

    // Initialize all targets in 100% Black and White
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      if (window.scrollY < 40) {
        el.classList.add("bw-active");
      } else {
        const inView = rect.top < vh * 0.55 && rect.bottom > 80;
        if (inView) {
          el.classList.remove("bw-active");
        } else {
          el.classList.add("bw-active");
        }
      }
    });

    const updateColorState = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY >= lastScrollY;
      const vh = window.innerHeight;

      // When at the very top, force entire site to 100% black and white
      if (currentScrollY < 35) {
        targets.forEach((el) => {
          el.classList.add("bw-active");
        });
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (isScrollingDown) {
          // Scrolling down: as element enters the viewport, transform to full color
          if (rect.top < vh * 0.55 && rect.bottom > 60) {
            el.classList.remove("bw-active");
          }
        } else {
          // Scrolling up: as element exits or user scrolls towards top, return to black and white
          if (rect.top > vh * 0.65 || rect.bottom < 40) {
            el.classList.add("bw-active");
          } else {
            el.classList.remove("bw-active");
          }
        }
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateColorState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateColorState();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="paint-content relative">
      <style jsx global>{`
        /* Initial Black and White theme baseline for entire website */
        .paint-content section,
        .paint-content footer,
        .paint-content img,
        .paint-content video,
        .paint-content canvas,
        .paint-content .liquid-glass-card,
        .paint-content .project-card {
          transition: filter 2s cubic-bezier(0.2, 0.8, 0.2, 1);
          filter: grayscale(0%);
        }

        .paint-content .bw-active {
          filter: grayscale(100%) !important;
        }

        /* Hover always reveals 100% full vibrant color */
        .paint-content section:hover,
        .paint-content img:hover,
        .paint-content .liquid-glass-card:hover,
        .paint-content [class*="aspect-"]:hover,
        .paint-content a:hover img {
          filter: grayscale(0%) !important;
        }

        /* Smooth color transitions */
        .paint-content [class*="text-[#00E599]"],
        .paint-content [class*="text-nature-400"],
        .paint-content [class*="text-nature-500"],
        .paint-content [class*="text-brand-600"] {
          transition: color 2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .paint-content [class*="bg-[#00E599]"],
        .paint-content [class*="bg-nature-500"] {
          transition: background-color 2s cubic-bezier(0.2, 0.8, 0.2, 1), color 2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* High-contrast crisp B&W text replacements */
        .paint-content .bw-active [class*="text-[#00E599]"],
        .paint-content .bw-active [class*="text-nature-400"],
        .paint-content .bw-active [class*="text-nature-500"],
        .paint-content .bw-active [class*="text-brand-600"],
        .paint-content .bw-active[class*="text-[#00E599]"] {
          color: white !important;
        }

        .paint-content .bw-active [class*="bg-[#00E599]"],
        .paint-content .bw-active [class*="bg-nature-500"],
        .paint-content .bw-active[class*="bg-[#00E599]"] {
          background-color: white !important;
          color: #020504 !important;
        }
        
        .paint-content .bw-active [class*="border-[#00E599]"],
        .paint-content .bw-active [class*="border-nature-500"] {
          border-color: rgba(255, 255, 255, 0.3) !important;
          transition: border-color 2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
      {children}
    </div>
  );
}
