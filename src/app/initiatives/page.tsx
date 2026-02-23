"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, PawPrint, Droplets, Syringe, Tag, ShieldAlert } from "lucide-react";
import { mapMarkers } from "@/data";

// Dynamic import for Leaflet (SSR not supported)
const MapSection = dynamic(() => import("@/components/MapSection"), { ssr: false });

const floraContent = [
    {
        icon: <TreePine className="h-6 w-6" />,
        title: "Sapling Plantation Drives",
        description:
            "We organize seasonal plantation drives during the monsoon and winter. Over 500 saplings of native species — Neem, Peepal, Gulmohar, and Banyan — have been planted across campus since 2018.",
        image: "/images/birb.jpeg",
    },
    {
        icon: <Droplets className="h-6 w-6" />,
        title: "Campus Watering Schedules",
        description:
            "Volunteer teams maintain daily watering routes for newly planted saplings. We use a shift system to ensure every sapling gets adequate care during the crucial first two years.",
        image: "/images/feedingpuppies.jpeg",
    },
];

const faunaContent = [
    {
        icon: <Syringe className="h-6 w-6" />,
        title: "Anti-Rabies Vaccination Drives",
        description:
            "In partnership with the Trichy District Veterinary Hospital, we conduct biannual vaccination camps. Over 200 campus dogs have been vaccinated to date.",
        image: "/images/cutepuppy.jpeg",
    },
    {
        icon: <Tag className="h-6 w-6" />,
        title: "Reflective Collar Tagging",
        description:
            "Every vaccinated campus dog receives a reflective collar to ensure visibility at night. This protects both the animals and passing vehicles.",
        image: "/images/treatingpuppies.jpeg",
    },
    {
        icon: <ShieldAlert className="h-6 w-6" />,
        title: "Emergency Rescues",
        description:
            "Our 24/7 SOS line connects distressed callers to trained volunteers. From snake rescues to injured dog extractions, we handle 10+ emergencies per month.",
        image: "/images/helpingpuppies.jpeg",
    },
];

export default function InitiativesPage() {
    const [tab, setTab] = useState<"flora" | "fauna">("flora");
    const content = tab === "flora" ? floraContent : faunaContent;

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative flex items-center justify-center h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/catty.jpeg"
                        alt="Green canopy"
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
                        Our Initiatives
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-cream/70 text-lg max-w-xl mx-auto"
                    >
                        Protecting flora and fauna, one drive at a time
                    </motion.p>
                </div>
            </section>

            {/* ── Tabs ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    {/* Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-2xl bg-cream-dark p-1.5 shadow-inner">
                            {(["flora", "fauna"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${tab === t ? "text-cream" : "text-foreground/60 hover:text-forest"
                                        }`}
                                >
                                    {tab === t && (
                                        <motion.div
                                            layoutId="tab-bg"
                                            className="absolute inset-0 rounded-xl bg-forest"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {t === "flora" ? <TreePine className="h-4 w-4" /> : <PawPrint className="h-4 w-4" />}
                                        {t === "flora" ? "Flora" : "Fauna"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            {content.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        } gap-8 items-center`}
                                >
                                    <div className="w-full md:w-1/2">
                                        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 768px) 50vw, 100vw"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-forest">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground/60 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── Interactive Map ── */}
            <section className="py-16 bg-cream-dark">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Campus Map
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Our Footprint on Campus
                        </h2>
                        <p className="mt-3 text-foreground/60 max-w-lg mx-auto">
                            Feeding routes, plantation sites, and more — all mapped out.
                        </p>
                    </motion.div>

                    {/* Legend */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="h-3 w-3 rounded-full bg-orange-500" />
                            Feeding Route
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="h-3 w-3 rounded-full bg-green-600" />
                            Plantation Site
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
                        <MapSection markers={mapMarkers} />
                    </div>
                </div>
            </section>
        </>
    );
}
