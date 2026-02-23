"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TreePine,
  Heart,
  Users,
  Stethoscope,
} from "lucide-react";
import { galleryImages, newsItems } from "@/data";

/* ── Animated Counter ── */
function Counter({ target, label, icon }: { target: number; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 p-8"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
        {icon}
      </div>
      <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tabular-nums drop-shadow-lg">
        {count}+
      </span>
      <span className="text-base md:text-lg text-white/80 font-semibold text-center">{label}</span>
    </motion.div>
  );
}

/* ── Gallery Carousel ── */
function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % galleryImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length), []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  // show 3 on desktop, 1 on mobile
  const getVisibleImages = () => {
    const images = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + galleryImages.length) % galleryImages.length;
      images.push({ ...galleryImages[idx], displayIndex: i });
    }
    return images;
  };

  return (
    <div className="relative">
      {/* Desktop: 3-image carousel */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {getVisibleImages().map((img) => (
          <motion.div
            key={img.id}
            layout
            className="relative aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(img.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            {/* Caption overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === img.id ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4"
            >
              <p className="text-sm text-white font-medium">{img.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: single image carousel */}
      <div className="md:hidden relative aspect-[3/2] rounded-2xl overflow-hidden">
        <Image
          src={galleryImages[current].src}
          alt={galleryImages[current].alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
          <p className="text-sm text-white font-medium">{galleryImages[current].caption}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-forest/10 hover:bg-forest hover:text-cream transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${i === current ? "w-6 bg-terracotta" : "w-2 bg-forest/20"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-forest/10 hover:bg-forest hover:text-cream transition-colors cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ── Hero slides ── */
const heroSlides = [
  { src: "/images/prakruti-hero.png", alt: "Prakruti — Nurturing Nature, Protecting Paws" },
  { src: "/images/birb.jpeg", alt: "Campus wildlife — bird near water bowl" },
  { src: "/images/cutepuppy.jpeg", alt: "Adorable campus puppy" },
  { src: "/images/WhatsApp-Image-2026-02-23-at-5.20.08-PM.jpeg", alt: "Prakruti team celebration" },
  { src: "/images/feedingpuppies.jpeg", alt: "Daily feeding rounds" },
];

/* ── Hero Carousel ── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-forest/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Prakruti: Nurturing Nature,{" "}
          <span className="text-sage-light">Protecting Paws</span> at NIT
          Trichy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          The official Nature and Animal Welfare Club.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector(".sos-glow")?.closest("button")?.click()}
            className="flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 shadow-lg transition-colors cursor-pointer"
          >
            <AlertTriangle className="h-5 w-5" />
            Report Emergency
          </button>
          <Link
            href="/get-involved"
            className="flex items-center gap-2 rounded-xl bg-sage hover:bg-sage-dark text-white font-semibold px-6 py-3 shadow-lg transition-colors"
          >
            Join the Movement
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${i === current ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}

/* ── Home Page ── */
export default function Home() {
  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Instagram Banner ── */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-4">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-3">
          <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          <a
            href="https://www.instagram.com/prakrutinitt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-sm md:text-base hover:underline"
          >
            Follow @prakrutinitt on Instagram for updates, rescues & campus wildlife stories!
          </a>
        </div>
      </section>

      {/* ── Club Spotlight Gallery ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
              Our Story in Pictures
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
              Club Spotlight
            </h2>
            <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
              From plantation drives to animal rescues — glimpses of Prakruti in action.
            </p>
          </motion.div>

          <GalleryCarousel />
        </div>
      </section>

      {/* ── Impact Tracker ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-forest via-forest-dark to-[#1a3329] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-sage-light uppercase tracking-widest">
              Making a Difference
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              Our Impact
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              Every number tells a story of compassion, action, and change.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-cream">
            <Counter target={500} label="Saplings Planted" icon={<TreePine className="h-7 w-7" />} />
            <Counter target={200} label="Animals Vaccinated / Rescued" icon={<Heart className="h-7 w-7" />} />
            <Counter target={150} label="Animals Treated" icon={<Stethoscope className="h-7 w-7" />} />
            <Counter target={150} label="Active Volunteers" icon={<Users className="h-7 w-7" />} />
          </div>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
              Stay Updated
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
              Latest News
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-forest text-cream">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <time className="text-xs text-foreground/40 font-medium">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-forest leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
