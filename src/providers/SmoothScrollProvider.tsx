"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
      const lenis = new Lenis({ duration: 0.85, smoothWheel: true, anchors: { offset: -100 } });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      return () => { gsap.ticker.remove(tick); lenis.destroy(); };
    });
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => { cancelAnimationFrame(frame); media.revert(); };
  }, [pathname]);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
