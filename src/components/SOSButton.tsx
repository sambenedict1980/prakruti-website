"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_GROUP = "https://chat.whatsapp.com/BAsMv6ju7KLAIVvzuDgNlN";

export default function SOSButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating button */}
            <button
                aria-label="Emergency SOS"
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg sos-glow hover:scale-110 transition-transform cursor-pointer"
            >
                <AlertTriangle className="h-6 w-6" />
            </button>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-2xl bg-cream p-6 shadow-2xl"
                        >
                            <button
                                aria-label="Close"
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-sage/10 text-foreground/60 transition-colors cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-terracotta/10">
                                    <AlertTriangle className="h-8 w-8 text-terracotta" />
                                </div>

                                <h2 className="text-xl font-bold text-forest">
                                    Emergency Animal Rescue
                                </h2>

                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    If you have found an injured, trapped, or distressed animal on
                                    campus, please reach out immediately. Our volunteers are
                                    available 24/7.
                                </p>

                                <div className="w-full flex flex-col gap-3 mt-2">
                                    <a
                                        href={WHATSAPP_GROUP}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 transition-colors"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        WhatsApp Group SOS
                                    </a>
                                    <a
                                        href="mailto:prakruti.nitt@gmail.com"
                                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-forest text-forest font-semibold py-3 px-4 hover:bg-forest hover:text-cream transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Email Prakruti
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
