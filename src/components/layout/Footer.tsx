
import { Localized } from "@/providers/LanguageProvider";
import Link from "next/link";
import { Container } from "./Container";
import { NAV_LINKS, COMPANY } from "@/data/site";
import { MapPin, Phone, Mail, Landmark, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-ink-900/10 py-16 dark:border-white/10 overflow-hidden text-ink-900 dark:text-white">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/footer img.png"
          alt="Footer Background"
          fill
          className="object-cover object-[center_80%] opacity-[0.4] dark:opacity-[0.3] pointer-events-none"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-ink-950/80 pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 pb-12 border-b border-ink-900/10 dark:border-white/10">

          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block mb-1 group w-max">
              <img
                src="/images/logo.png"
                alt="Senthil Associates Logo"
                className="h-16 w-auto transition-all duration-500 group-hover:scale-105 dark:brightness-[1.3] dark:contrast-[1.1] dark:drop-shadow-[0_1px_3px_rgba(0,229,153,0.15)]"
              />
            </Link>
            <p className="text-base leading-relaxed text-ink-700/90 dark:text-white/80 w-full pr-4">
              <Localized>{COMPANY.name}</Localized><Localized> — Delivering conceptually strong, performative architectural solutions rooted in nature and designed for the future.
            </Localized></p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/architecture.interiordesign.consultancy" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center hover:-translate-y-1 transition-transform">
                <img src="/assets/facebook.svg" alt="Facebook" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.instagram.com/senthil_associates?stkn=NXNwaDhvNWxqZTAx" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center hover:-translate-y-1 transition-transform">
                <img src="/assets/instagram.svg" alt="Instagram" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:flex lg:flex-col lg:items-center">
            <div className="w-full lg:w-48">
              <h4 className="text-sm font-bold tracking-widest uppercase text-ink-900 dark:text-white mb-5"><Localized>
                Navigation
              </Localized></h4>
              <ul className="space-y-1.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-ink-700/80 hover:text-brand-600 dark:text-white/70 dark:hover:text-brand-400 transition-colors inline-block py-1 hover:translate-x-1 transform duration-300"
                    >
                      <Localized>{link.label}</Localized>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Studio Contact & Map */}
          <div className="lg:pl-6 flex flex-col">
            <h4 className="text-sm font-bold tracking-widest uppercase text-ink-900 dark:text-white mb-5"><Localized>
              GET IN TOUCH
            </Localized></h4>
            <div className="space-y-3 text-base font-medium text-ink-700/80 dark:text-white/70 mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-500 mt-0.5" />
                <span className="leading-relaxed"><Localized>{COMPANY.address}</Localized></span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <Localized>{COMPANY.phone}</Localized>
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <Localized>{COMPANY.email}</Localized>
                </a>
              </p>
            </div>

            {/* Map iframe */}
            <div className="w-full h-36 rounded-xl overflow-hidden border border-ink-900/10 dark:border-white/10 shadow-sm relative group mt-auto">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="transition-transform duration-700 group-hover:scale-105"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-ink-700/60 dark:text-white/50 tracking-wide">
          <p>© <Localized>{new Date().getFullYear()}</Localized> <Localized>{COMPANY.name}</Localized><Localized>. All rights reserved.</Localized></p>
        </div>
      </Container>
    </footer>
  );
}
