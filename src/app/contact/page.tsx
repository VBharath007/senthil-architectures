"use client";
import { Localized } from "@/providers/LanguageProvider";


import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FadeIn } from "@/components/motion/FadeIn";
import { SplitText } from "@/components/motion/SplitText";
import { MapPin, Phone, Mail, Facebook, User, Landmark, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ContactPage() {
  const address = "RH-273, Anandha Nilayam, Abdul Kalam 1st Street, Ellis Nagar, Madurai.";
  const phone = "+91-98421-6430";
  const email = "Senthilassociates@yahoo.com";

  return (
    <>
      <Navbar />
      <main className="min-h-screen relative bg-[#f8faf9] text-ink-900 overflow-hidden">
        {/* Premium Background Grid */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" style={{ transform: 'translateZ(0)' }} />
        <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <div className="max-w-3xl">
                <span className="mb-6 inline-block text-sm font-medium tracking-widest text-brand-500 uppercase"><Localized>
                  ● CONTACT US
                </Localized></span>
                <h1 className="font-sans text-5xl sm:text-6xl font-medium leading-[1.05] tracking-tight text-ink-900 dark:text-white mb-6">
                  <SplitText text="Let's build architecture that" />
                  <br />
                  <span className="italic font-light text-nature-500"><Localized>
                    stands the test of time.
                  </Localized></span>
                </h1>
                <Reveal delay={0.2}>
                  <p className="text-lg text-ink-700/80 dark:text-white/70 max-w-xl"><Localized>
                    Reach out to us to discuss your vision. Our team is ready to prepare a tailored design roadmap for your project.
                  </Localized></p>
                </Reveal>
              </div>

              {/* Right Column: Image */}
              <FadeIn delay={0.3} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-ink-900/10 dark:border-white/10 mt-8 lg:mt-0">
                <Image
                  src="/assets/contact.png"
                  alt="Architecture Design"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-ink-950/5 pointer-events-none" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* CONTACT DETAILS & FORM */}
        <section className="py-12">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            

                {/* Card 1: Address */}
                <FadeIn delay={0.1}>
                  <div className="liquid-glass-card rounded-3xl group flex h-full flex-col p-6 cursor-default">
                    <div className="liquid-sheen-sweep" />
                    <div className="liquid-glass-bevel" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-4 border-b border-ink-900/10 dark:border-white/10">
                        <span className="font-mono text-xs font-bold tracking-widest text-nature-700 dark:text-nature-400"><Localized>
                          01 / LOCATION
                        </Localized></span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/80 dark:bg-white/10 text-nature-700 dark:text-nature-300 border border-nature-500/25 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-nature-500 group-hover:text-white group-hover:border-nature-500">
                          <MapPin className="h-4 w-4" strokeWidth={1.85} />
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-normal tracking-tight text-ink-950 mt-4 transition-colors group-hover:text-nature-700 dark:text-white dark:group-hover:text-nature-400"><Localized>
                        Address
                      </Localized></h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700/80 dark:text-white/65">
                        <Localized>{address}</Localized>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Card 2: Phone */}
                <FadeIn delay={0.2}>
                  <div className="liquid-glass-card rounded-3xl group flex h-full flex-col p-6 cursor-default">
                    <div className="liquid-sheen-sweep" />
                    <div className="liquid-glass-bevel" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-4 border-b border-ink-900/10 dark:border-white/10">
                        <span className="font-mono text-xs font-bold tracking-widest text-nature-700 dark:text-nature-400"><Localized>
                          02 / PHONE
                        </Localized></span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/80 dark:bg-white/10 text-nature-700 dark:text-nature-300 border border-nature-500/25 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-nature-500 group-hover:text-white group-hover:border-nature-500">
                          <Phone className="h-4 w-4" strokeWidth={1.85} />
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-normal tracking-tight text-ink-950 mt-4 transition-colors group-hover:text-nature-700 dark:text-white dark:group-hover:text-nature-400"><Localized>
                        Direct Line
                      </Localized></h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700/80 dark:text-white/65">
                        <a href={`tel:${phone}`} className="hover:text-nature-600 transition-colors">
                          <Localized>{phone}</Localized>
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Card 3: Email */}
                <FadeIn delay={0.3}>
                  <div className="liquid-glass-card rounded-3xl group flex h-full flex-col p-6 cursor-default">
                    <div className="liquid-sheen-sweep" />
                    <div className="liquid-glass-bevel" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-4 border-b border-ink-900/10 dark:border-white/10">
                        <span className="font-mono text-xs font-bold tracking-widest text-nature-700 dark:text-nature-400"><Localized>
                          03 / EMAIL
                        </Localized></span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/80 dark:bg-white/10 text-nature-700 dark:text-nature-300 border border-nature-500/25 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-nature-500 group-hover:text-white group-hover:border-nature-500">
                          <Mail className="h-4 w-4" strokeWidth={1.85} />
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-normal tracking-tight text-ink-950 mt-4 transition-colors group-hover:text-nature-700 dark:text-white dark:group-hover:text-nature-400"><Localized>
                        Studio Email
                      </Localized></h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700/80 dark:text-white/65">
                        <a href={`mailto:${email}`} className="hover:text-nature-600 transition-colors break-all">
                          <Localized>{email}</Localized>
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Card 4: Social */}
                <FadeIn delay={0.4}>
                  <div className="liquid-glass-card rounded-3xl group flex h-full flex-col p-6 cursor-default">
                    <div className="liquid-sheen-sweep" />
                    <div className="liquid-glass-bevel" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-4 border-b border-ink-900/10 dark:border-white/10">
                        <span className="font-mono text-xs font-bold tracking-widest text-nature-700 dark:text-nature-400"><Localized>
                          04 / SOCIAL
                        </Localized></span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/80 dark:bg-white/10 text-nature-700 dark:text-nature-300 border border-nature-500/25 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-nature-500 group-hover:text-white group-hover:border-nature-500">
                          <Facebook className="h-4 w-4" strokeWidth={1.85} />
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-normal tracking-tight text-ink-950 mt-4 transition-colors group-hover:text-nature-700 dark:text-white dark:group-hover:text-nature-400"><Localized>
                        Facebook
                      </Localized></h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700/80 dark:text-white/65">
                        <a href="https://www.facebook.com/search/top?q=Senthil%20Associates" target="_blank" rel="noopener noreferrer" className="hover:text-nature-600 transition-colors"><Localized>
                          Senthil Associates
                        </Localized></a>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Card 5: Principal Contact */}
                <FadeIn delay={0.5} className="sm:col-span-2">
                  <div className="liquid-glass-card rounded-3xl group flex h-full flex-col p-6 cursor-default">
                    <div className="liquid-sheen-sweep" />
                    <div className="liquid-glass-bevel" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 pb-2 border-b border-ink-900/10 dark:border-white/10 mb-3">
                          <span className="font-mono text-xs font-bold tracking-widest text-nature-700 dark:text-nature-400"><Localized>
                            05 / LEADERSHIP
                          </Localized></span>
                        </div>
                        <h3 className="font-serif text-lg font-normal tracking-tight text-ink-950 transition-colors group-hover:text-nature-700 dark:text-white dark:group-hover:text-nature-400"><Localized>
                          Ar. Senthil
                        </Localized></h3>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink-700/80 dark:text-white/65"><Localized>
                          Principal Architect & Founder
                        </Localized></p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/80 dark:bg-white/10 text-nature-700 dark:text-nature-300 border border-nature-500/25 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-nature-500 group-hover:text-white group-hover:border-nature-500">
                        <User className="h-4 w-4" strokeWidth={1.85} />
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Contact Form */}
              <FadeIn delay={0.2} className="bg-ink-50 dark:bg-ink-900/40 rounded-3xl p-8 sm:p-10 border border-ink-900/5 dark:border-white/5">
                <h3 className="text-2xl font-medium text-ink-950 dark:text-white mb-6"><Localized>
                  Send us a message
                </Localized></h3>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Backend wiring needed for this form.');
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-900 dark:text-white/80 mb-1.5"><Localized>Name</Localized></label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-ink-900 dark:text-white transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink-900 dark:text-white/80 mb-1.5"><Localized>Email</Localized></label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-ink-900 dark:text-white transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink-900 dark:text-white/80 mb-1.5"><Localized>Phone</Localized></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-ink-900 dark:text-white transition-all"
                        placeholder="Your number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-ink-900 dark:text-white/80 mb-1.5"><Localized>Project Type</Localized></label>
                    <select 
                      id="projectType" 
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-ink-900 dark:text-white transition-all"
                    >
                      <option value="Architecture Design"><Localized>Architecture Design</Localized></option>
                      <option value="Interior Design"><Localized>Interior Design</Localized></option>
                      <option value="Design + Build"><Localized>Design + Build</Localized></option>
                      <option value="Turnkey Consultation"><Localized>Turnkey Consultation</Localized></option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-900 dark:text-white/80 mb-1.5"><Localized>Message</Localized></label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-ink-900 dark:text-white transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-white dark:focus:ring-offset-ink-950 shadow-lg shadow-brand-500/25"
                  ><Localized>
                    Send Message
                  </Localized></button>
                </form>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* MAP EMBED */}
        <section className="py-12 pb-24">
          <Container>
            <FadeIn>
              <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-ink-900/10 dark:border-white/10 shadow-sm relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
                {/* Fallback overlay in case API key is missing */}
                <div className="absolute inset-0 bg-ink-100 dark:bg-ink-900 flex flex-col items-center justify-center p-6 text-center z-[-1]">
                   {/* This is behind the iframe. If iframe fails due to missing key, maybe we should just use a free embed URL. Wait, google maps embed /v1 requires API key. Let's use the free standard maps URL structure. */}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
