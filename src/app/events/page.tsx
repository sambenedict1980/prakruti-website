"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { events } from "@/data";

export default function EventsPage() {
    const [tab, setTab] = useState<"upcoming" | "previous">("upcoming");
    const filtered = events.filter((e) => e.type === tab);

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative flex items-center justify-center h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/Screenshot-2026-02-23-172723.png"
                        alt="Event at campus"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/70 to-forest/90" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-cream"
                    >
                        Events
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-cream/70 text-lg max-w-xl mx-auto"
                    >
                        What&apos;s happening and what we&apos;ve accomplished
                    </motion.p>
                </div>
            </section>

            {/* ── Tabs + Events ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-2xl bg-cream-dark p-1.5 shadow-inner">
                            {(["upcoming", "previous"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${tab === t ? "text-cream" : "text-foreground/60 hover:text-forest"
                                        }`}
                                >
                                    {tab === t && (
                                        <motion.div
                                            layoutId="events-tab-bg"
                                            className="absolute inset-0 rounded-xl bg-forest"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 capitalize">{t} Events</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {filtered.length === 0 ? (
                                <p className="col-span-full text-center text-foreground/50 py-12">
                                    No events to show in this category yet.
                                </p>
                            ) : (
                                filtered.map((ev, i) => (
                                    <motion.article
                                        key={ev.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                                    >
                                        <div className="relative aspect-[3/2] overflow-hidden">
                                            <Image
                                                src={ev.image}
                                                alt={ev.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span
                                                    className={`text-xs font-semibold px-3 py-1 rounded-full ${ev.type === "upcoming"
                                                        ? "bg-terracotta text-cream"
                                                        : "bg-forest text-cream"
                                                        }`}
                                                >
                                                    {ev.type === "upcoming" ? "Upcoming" : "Past Event"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-xs text-foreground/40 font-medium mb-2">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {new Date(ev.date).toLocaleDateString("en-IN", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    {ev.location}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-forest leading-snug mb-2">
                                                {ev.title}
                                            </h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                                {ev.description}
                                            </p>
                                        </div>
                                    </motion.article>
                                ))
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}
