"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { coreTeam, facultyAdvisors } from "@/data";

function ProfileCard({ name, role, image }: { name: string; role: string; image: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center"
        >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-semibold text-forest text-base">{name}</h3>
            <p className="text-sm text-foreground/50 mt-0.5">{role}</p>
        </motion.div>
    );
}

export default function AboutPage() {
    return (
        <>
            {/* ── Hero Banner ── */}
            <section className="relative flex items-center justify-center h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/Screenshot-2026-02-23-172734.png"
                        alt="Campus greenery"
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
                        About Prakruti
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-cream/70 text-lg max-w-xl mx-auto"
                    >
                        Where two legacies became one mission
                    </motion.p>
                </div>
            </section>

            {/* ── History ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Our Story
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            The Birth of Prakruti
                        </h2>

                        <div className="mt-8 space-y-5 text-foreground/70 leading-relaxed">
                            <p>
                                For years, two passionate communities thrived independently at NIT Trichy.{" "}
                                <strong className="text-forest">Incredible&nbsp;NITT</strong> rallied students around
                                environmental conservation — organizing plantation drives, eco-awareness campaigns,
                                and campus clean-up events. Meanwhile, the{" "}
                                <strong className="text-forest">Animal&nbsp;Welfare&nbsp;Club</strong> dedicated itself
                                to the well-being of campus animals, coordinating vaccination drives, feeding
                                schedules, and emergency rescues.
                            </p>
                            <p>
                                By 2024, it became clear that these missions were two sides of the same coin. Nature
                                and animals share the same ecosystem, and protecting one means championing the other.
                                With the blessings of the institute, the two clubs merged to form{" "}
                                <strong className="text-terracotta">Prakruti</strong> — a Sanskrit word meaning
                                &quot;Nature&quot; — the singular, unified force for environmental stewardship and
                                animal welfare at NIT Trichy.
                            </p>
                            <p>
                                Today, Prakruti boasts <strong className="text-forest">150+ active volunteers</strong>,
                                partnerships with local veterinary hospitals and wildlife professionals, and an
                                ever-growing community of students, faculty, and alumni committed to building a
                                greener, kinder campus.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="py-16 bg-cream-dark">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-2xl md:text-3xl font-bold text-forest mb-12"
                    >
                        Key Milestones
                    </motion.h2>
                    <div className="relative border-l-2 border-sage/30 pl-8 space-y-10">
                        {[
                            { year: "2018", text: "Incredible NITT founded — first campus plantation drive with 50 saplings." },
                            { year: "2019", text: "Animal Welfare Club established — first anti-rabies vaccination camp." },
                            { year: "2022", text: "Both clubs cross 100 active volunteers each." },
                            { year: "2024", text: "Official merger into Prakruti — one unified club for nature and animal welfare." },
                            { year: "2025", text: "500+ saplings milestone, 200+ animals vaccinated, interactive campus map launched." },
                        ].map((m, i) => (
                            <motion.div
                                key={m.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[2.55rem] top-1 h-5 w-5 rounded-full bg-terracotta border-4 border-cream-dark" />
                                <p className="text-xs font-bold text-terracotta uppercase tracking-wider">{m.year}</p>
                                <p className="mt-1 text-foreground/70">{m.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Core Team ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Meet the Team
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Core Committee
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                        {coreTeam.map((m) => (
                            <ProfileCard key={m.name} {...m} />
                        ))}
                    </div>

                    {/* Faculty Advisors */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16 mb-10"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-forest">Faculty Advisors</h3>
                    </motion.div>
                    <div className="flex justify-center gap-10 flex-wrap">
                        {facultyAdvisors.map((m) => (
                            <ProfileCard key={m.name} {...m} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
