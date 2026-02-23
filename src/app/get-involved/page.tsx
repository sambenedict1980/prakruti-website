"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, TreeDeciduous, Send, CheckCircle, AlertCircle } from "lucide-react";

const WEB3FORMS_KEY = "54283314-f6c8-4bbd-b961-a7df91b5b7f4";

const intentOptions = [
    { value: "", label: "Select intent…" },
    { value: "volunteer", label: "Volunteer" },
    { value: "collaboration", label: "Club Collaboration" },
    { value: "report", label: "Report Issue" },
];

export default function GetInvolvedPage() {
    const [form, setForm] = useState({ name: "", email: "", intent: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
        if (!form.intent) e.intent = "Please select an intent";
        if (!form.subject.trim()) e.subject = "Subject is required";
        if (!form.message.trim()) e.message = "Message is required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", intent: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputClasses = (field: string) =>
        `w-full rounded-xl border ${errors[field] ? "border-red-400" : "border-sage/20"
        } bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-sage/40 transition`;

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative flex items-center justify-center h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cutepuppy.jpeg"
                        alt="Volunteers working together"
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
                        Get Involved
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-cream/70 text-lg max-w-xl mx-auto"
                    >
                        Every hand makes a difference
                    </motion.p>
                </div>
            </section>

            {/* ── Virtual Adoption / Sponsorship ── */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Sponsor &amp; Adopt
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Make a Lasting Impact
                        </h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Sponsor a Dog */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white p-8 shadow-lg border border-sage/10 flex flex-col"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta mb-4">
                                <Heart className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-forest mb-2">
                                Sponsor a Campus Dog
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                Help cover veterinary bills, vaccinations, and nutritional supplements for our campus
                                companions. As a sponsor, you&apos;ll receive periodic health updates and photos of
                                your sponsored pet. Alumni and current students alike can participate — your support
                                directly saves lives.
                            </p>
                            <div className="mt-6 text-sm text-sage-dark font-medium">
                                ₹500 / month covers one dog&apos;s complete care
                            </div>
                        </motion.div>

                        {/* Adopt a Tree */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="rounded-2xl bg-white p-8 shadow-lg border border-sage/10 flex flex-col"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark mb-4">
                                <TreeDeciduous className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-forest mb-2">
                                Adopt a Tree
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                Plant and name your very own tree on the NIT Trichy campus. Each adopted tree
                                receives a QR-coded name tag linking to its growth diary. Perfect for graduating
                                batches wanting to leave a living legacy, or for anyone who wants to offset their
                                carbon footprint.
                            </p>
                            <div className="mt-6 text-sm text-sage-dark font-medium">
                                ₹300 one-time for a sapling + 2 years of care
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Contact Form ── */}
            <section className="py-16 bg-cream-dark">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                            Reach Out
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">
                            Collaborate with Us
                        </h2>
                        <p className="mt-3 text-foreground/60 max-w-md mx-auto">
                            Whether you want to volunteer, propose a collaboration, or report an issue — we&apos;d
                            love to hear from you.
                        </p>
                    </motion.div>

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-2xl bg-white p-10 shadow-lg text-center space-y-4"
                        >
                            <CheckCircle className="h-12 w-12 text-sage mx-auto" />
                            <h3 className="text-xl font-bold text-forest">Message Sent!</h3>
                            <p className="text-sm text-foreground/60">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-sm text-terracotta font-semibold hover:underline cursor-pointer"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl bg-white p-6 md:p-8 shadow-lg space-y-5"
                        >
                            {status === "error" && (
                                <div className="flex items-center gap-2 rounded-xl bg-red-50 text-red-600 text-sm p-3">
                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold text-foreground/50 mb-1.5">Name</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className={inputClasses("name")}
                                        placeholder="Your name"
                                    />
                                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-foreground/50 mb-1.5">Email</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className={inputClasses("email")}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-foreground/50 mb-1.5">Intent</label>
                                <select
                                    value={form.intent}
                                    onChange={(e) => setForm({ ...form, intent: e.target.value })}
                                    className={inputClasses("intent")}
                                >
                                    {intentOptions.map((o) => (
                                        <option key={o.value} value={o.value}>
                                            {o.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.intent && <p className="text-xs text-red-500 mt-1">{errors.intent}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-foreground/50 mb-1.5">Subject</label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className={inputClasses("subject")}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-foreground/50 mb-1.5">Message</label>
                                <textarea
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className={inputClasses("message") + " resize-none"}
                                    placeholder="Tell us more…"
                                />
                                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex items-center justify-center gap-2 w-full rounded-xl bg-forest hover:bg-forest-dark text-cream font-semibold py-3.5 transition-colors disabled:opacity-60 cursor-pointer"
                            >
                                {status === "sending" ? (
                                    "Sending…"
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
