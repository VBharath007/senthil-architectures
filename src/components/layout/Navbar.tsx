"use client";
import { Localized } from "@/providers/LanguageProvider";


import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/providers/LanguageProvider";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if(e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-900/10 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-ink-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 sm:h-20 lg:h-24 items-center justify-between gap-2 lg:gap-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink min-w-0 group">
          <img
            src="/images/logo.png"
            alt="Senthil Associates Logo"
            className={`h-10 sm:h-16 lg:h-20 w-auto object-contain shrink-0 dark:brightness-[1.3] dark:contrast-[1.1] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 ${
              scrolled ? "grayscale-0" : "grayscale"
            }`}
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-sm sm:text-base lg:text-lg font-bold text-ink-950 dark:text-white leading-tight"><Localized>SENTHIL ASSOCIATES</Localized></span>
            <span className="hidden sm:block text-[10px] sm:text-xs text-ink-950/70 dark:text-white/70 font-semibold tracking-wide"><Localized>ARCHITECTURE | CONSTRUCTION | INTERIOR DESIGN</Localized></span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 xl:gap-6 lg:flex shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-brand-500 font-medium dark:text-brand-500"
                    : "text-ink-700/80 hover:text-nature-700 dark:text-white/75 dark:hover:text-nature-400"
                }`}
              >
                <Localized>{link.label}</Localized>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <LanguageToggle />
          <Button href="/contact" variant="red" className="text-xs shadow-sm"><Localized>
            Contact Us
          </Localized></Button>
        </div>

        <div className="mobile-language lg:hidden mr-2"><LanguageToggle /></div>
        <button
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center rounded-full border border-ink-900/15 p-2 text-ink-900 dark:border-white/15 dark:text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-900/10 bg-white/95 backdrop-blur-lg dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
          >
            <Container className="flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`text-base ${
                      isActive
                        ? "text-brand-500 font-medium dark:text-brand-500"
                        : "text-ink-800 dark:text-white/85"
                    }`}
                  >
                    <Localized>{link.label}</Localized>
                  </Link>
                );
              })}
              <div className="flex items-center justify-end pt-2">
                <LanguageToggle />
          <Button href="/contact" variant="red" className="text-xs"><Localized>
                  Contact Us
                </Localized></Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
