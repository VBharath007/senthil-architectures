"use client";
import { Localized } from "@/providers/LanguageProvider";


import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS } from "@/data/site";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectHero({ project }: { project: any }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const dustOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const dustScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);

  const bwOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 0.8, 0]);
  const outlineOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const colorOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={heroRef} className="relative w-full h-[250vh] bg-ink-950">
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="structure-outline">
            <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" result="gray" />
            <feConvolveMatrix order="3 3" preserveAlpha="true" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" in="gray" result="edges" />
            <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" in="edges" result="invertedEdges" />
            <feComponentTransfer in="invertedEdges" result="sharpEdges">
              <feFuncR type="linear" slope="3" intercept="-0.2" />
              <feFuncG type="linear" slope="3" intercept="-0.2" />
              <feFuncB type="linear" slope="3" intercept="-0.2" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="sticky top-0 w-full h-screen flex flex-col justify-end overflow-hidden bg-ink-950">
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-full max-w-[1400px]">

            {/* Full Color Image */}
            <motion.div style={{ opacity: colorOpacity, scale }} className="absolute inset-0 z-10">
              <Image src={`/assets/projects/${project.slug}/${project.cover}`} alt={project.title} fill priority className="object-cover" sizes="(max-width: 1400px) 100vw, 1400px" />
            </motion.div>

            {/* Black and White Image */}
            <motion.div style={{ opacity: bwOpacity, scale }} className="absolute inset-0 z-20">
              <Image src={`/assets/projects/${project.slug}/${project.cover}`} alt={project.title} fill priority className="object-cover grayscale" sizes="(max-width: 1400px) 100vw, 1400px" />
            </motion.div>

            {/* Structure Outline Image */}
            <motion.div style={{ opacity: outlineOpacity, scale }} className="absolute inset-0 z-30 mix-blend-screen">
              <Image src={`/assets/projects/${project.slug}/${project.cover}`} alt={project.title} fill priority className="object-cover" style={{ filter: "url(#structure-outline)" }} sizes="(max-width: 1400px) 100vw, 1400px" />
            </motion.div>

            {/* Concrete Dust Overlay */}
            <motion.div style={{ opacity: dustOpacity, scale: dustScale }} className="absolute inset-0 z-40 mix-blend-screen pointer-events-none">
              <div className="w-full h-full opacity-60" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
              <div className="absolute inset-0 bg-ink-950/20" />
            </motion.div>

          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent pointer-events-none z-50" />
        </div>

        <Container className="relative z-50 pb-12">
          <motion.div style={{ y: textY }}>
            <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /><Localized>
              Back to Projects
            </Localized></Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="mb-2 font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                  <Localized>{project.title}</Localized>
                </h1>
                <p className="text-lg text-white/80 drop-shadow-md">
                  <Localized>{project.location}</Localized> • <Localized>{project.categories.join(", ")}</Localized>
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

export function ProjectClient({ params }: { params: { slug: string } }) {
  const projectIndex = PROJECTS.findIndex(p => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null && project.gallery) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  }, [lightboxIndex, project.gallery]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null && project.gallery) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  }, [lightboxIndex, project.gallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  const getLabel = (imgStr: string) => {
    if (imgStr === "built") return "Completed";
    if (imgStr === "design-render") return "Design Render";
    return null;
  };

  const hasGallery = project.gallery && project.gallery.length > 1;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-ink-950 pb-24">
        {/* HERO: Scroll Transition Effect */}
        <ProjectHero project={project} />

        <Container className="pt-16">
          {/* Content & Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div className="lg:col-span-2">
              {project.description && (
                <div className="prose prose-lg dark:prose-invert max-w-none text-ink-700/80 dark:text-white/70">
                  <p><Localized>{project.description}</Localized></p>
                </div>
              )}
              {!hasGallery && project.gallery && project.gallery.length === 1 && (
                <div className="mt-12 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-900/5">
                  <Image
                    src={`/assets/projects/${project.slug}/${project.gallery[0]}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              )}
            </div>

            {/* Facts strip */}
            {project.facts && Object.keys(project.facts).length > 0 && (
              <div className="rounded-2xl border border-ink-900/10 p-8 dark:border-white/10 bg-ink-900/[0.02] dark:bg-ink-900/40 h-fit">
                <h3 className="mb-6 text-lg font-medium text-ink-900 dark:text-white border-b border-ink-900/10 dark:border-white/10 pb-4"><Localized>
                  Project Details
                </Localized></h3>
                <dl className="space-y-4 text-sm">
                  {Object.entries(project.facts).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4 border-b border-ink-900/5 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                      <dt className="text-ink-500 dark:text-ink-400"><Localized>{key}</Localized></dt>
                      <dd className="font-medium text-ink-900 dark:text-white text-right"><Localized>{value as string}</Localized></dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Gallery */}
          {hasGallery && (
            <div className="mb-24">
              <h2 className="text-2xl font-medium text-ink-900 dark:text-white mb-8"><Localized>Gallery</Localized></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery!.map((img, idx) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: (idx % 2) * 0.1, duration: 0.6, ease: "easeOut" }}
                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl bg-ink-900/5 group"
                    onClick={() => openLightbox(idx)}
                  >
                    <Image
                      src={`/assets/projects/${project.slug}/${img}`}
                      alt={`${project.title} - ${img}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {getLabel(img) && (
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                        <Localized>{getLabel(img)}</Localized>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Next Project */}
          <div className="pt-16 border-t border-ink-900/10 dark:border-white/10">
            <p className="text-sm font-medium text-ink-500 dark:text-ink-400 mb-6 uppercase tracking-wider"><Localized>Next Project</Localized></p>
            <Link href={`/projects/${nextProject.slug}`} className="group block relative overflow-hidden rounded-3xl aspect-[21/9] md:aspect-[21/6]">
              <Image
                src={`/assets/projects/${nextProject.slug}/${nextProject.cover}`}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/40 group-hover:bg-ink-950/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl md:text-5xl font-medium text-white mb-2"><Localized>{nextProject.title}</Localized></h3>
                  <span className="inline-flex items-center gap-2 text-white/80 font-medium group-hover:text-white transition-colors"><Localized>
                    View Project </Localized><ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && project.gallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-4"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <div className="relative w-full max-w-6xl aspect-[16/9] px-16 pointer-events-none">
                <Image
                  src={`/assets/projects/${project.slug}/${project.gallery[lightboxIndex]}`}
                  alt={`${project.title} - Image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={90}
                />
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-50 p-4"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium">
                <Localized>{lightboxIndex + 1}</Localized> / <Localized>{project.gallery.length}</Localized>
                <Localized>{getLabel(project.gallery[lightboxIndex]) && ` • ${getLabel(project.gallery[lightboxIndex])}`}</Localized>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

