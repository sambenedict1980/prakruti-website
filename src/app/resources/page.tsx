"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Phone, AlertTriangle, Dog, Bug, Trash2 } from "lucide-react";
import { resourceFAQs, emergencyContacts } from "@/data";

const categoryIcons: Record<string, React.ReactNode> = {
    "Wildlife Encounters (Snakes, Macaques)": <Bug className="h-5 w-5" />,
    "Campus Dogs": <Dog className="h-5 w-5" />,
    "Waste Management": <Trash2 className="h-5 w-5" />,
};

function Accordion({ items }: { items: typeof resourceFAQs }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Group by category
    const categories = Array.from(new Set(items.map((i) => i.category)));

    return (
        <div className="space-y-8">
            {categories.map((cat) => (
                <div key={cat}>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage/15 text-sage-dark">
                            {categoryIcons[cat] ?? <AlertTriangle className="h-5 w-5" />}
                        </div>
                        <h3 className="text-lg font-bold text-forest">{cat}</h3>
                    </div>
                    <div className="space-y-3">
                        {items
                            .filter((i) => i.category === cat)
                            .map((item, idx) => {
                                const globalIdx = items.indexOf(item);
                                const isOpen = openIndex === globalIdx;
                                return (
                                    <div
                                        key={idx}
                                        className="rounded-2xl bg-white shadow-sm border border-sage/10 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                                            className="flex items-center justify-between w-full text-left px-5 py-4 cursor-pointer"
                                        >
                                            <span className="font-medium text-forest text-sm md:text-base pr-4">
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`h-5 w-5 text-foreground/40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isOpen ? "auto" : 0,
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-4 text-sm text-foreground/60 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ResourcesPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative flex items-center justify-center h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/mdlwemdlwe.jpeg"
                        alt="Campus path with trees"
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
                        Resources &amp; Guidelines
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-cream/70 text-lg max-w-xl mx-auto"
                    >
                        Campus dos, don&apos;ts, and who to call
                    </motion.p>
                </div>
            </section>

            {/* ── Accordion ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Campus Guidelines
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Dos &amp; Don&apos;ts
                        </h2>
                        <p className="mt-3 text-foreground/60 max-w-lg">
                            Essential guidelines for coexisting with campus wildlife responsibly.
                        </p>
                    </motion.div>

                    <Accordion items={resourceFAQs} />
                </div>
            </section>

            {/* ── Emergency Contacts ── */}
            <section className="py-16 bg-cream-dark">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Emergency
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Emergency Contacts
                        </h2>
                    </motion.div>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-4">
                        {emergencyContacts.map((c) => (
                            <motion.div
                                key={c.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl bg-white p-5 shadow-sm space-y-2"
                            >
                                <h4 className="font-semibold text-forest">{c.name}</h4>
                                <p className="text-xs text-foreground/50">{c.role}</p>
                                <div className="flex items-center justify-between">
                                    <a
                                        href={`tel:${c.phone}`}
                                        className="flex items-center gap-1.5 text-sm text-terracotta font-medium hover:underline"
                                    >
                                        <Phone className="h-4 w-4" />
                                        {c.phone}
                                    </a>
                                    <span className="text-xs text-foreground/40 bg-sage/10 px-2 py-1 rounded-lg">
                                        {c.available}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop table */}
                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-sm bg-white">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-forest text-cream text-left">
                                    <th className="px-5 py-3 font-semibold">Name</th>
                                    <th className="px-5 py-3 font-semibold">Role</th>
                                    <th className="px-5 py-3 font-semibold">Phone</th>
                                    <th className="px-5 py-3 font-semibold">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emergencyContacts.map((c, i) => (
                                    <tr
                                        key={c.name}
                                        className={i % 2 === 0 ? "bg-white" : "bg-sage/5"}
                                    >
                                        <td className="px-5 py-3 font-medium text-forest">{c.name}</td>
                                        <td className="px-5 py-3 text-foreground/60">{c.role}</td>
                                        <td className="px-5 py-3">
                                            <a
                                                href={`tel:${c.phone}`}
                                                className="text-terracotta font-medium hover:underline"
                                            >
                                                {c.phone}
                                            </a>
                                        </td>
                                        <td className="px-5 py-3 text-foreground/60">{c.available}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
