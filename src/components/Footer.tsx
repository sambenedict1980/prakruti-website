import Link from "next/link";
import { Leaf, Instagram, Mail, Heart, MessageCircle } from "lucide-react";

const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/get-involved", label: "Get Involved" },
];

export default function Footer() {
    return (
        <footer className="bg-forest text-cream/90">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream/15">
                                <Leaf className="h-5 w-5 text-cream" />
                            </div>
                            <span className="text-xl font-bold text-cream tracking-tight">
                                Prakruti
                            </span>
                        </div>
                        <p className="text-sm text-cream/60 leading-relaxed max-w-[260px]">
                            The official Nature &amp; Animal Welfare Club of NIT Trichy.
                            Nurturing Nature, Protecting Paws.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-cream/70 hover:text-terracotta transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-cream/70">
                                <Mail className="h-4 w-4 text-cream/50 shrink-0" />
                                <a
                                    href="mailto:prakruti.nitt@gmail.com"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    prakruti.nitt@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-cream/70">
                                <MessageCircle className="h-4 w-4 text-cream/50 shrink-0" />
                                <a
                                    href="https://chat.whatsapp.com/BAsMv6ju7KLAIVvzuDgNlN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    Join WhatsApp Group
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50 mb-4">
                            Follow Us
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/prakrutinitt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-opacity"
                            >
                                <Instagram className="h-5 w-5 text-white" />
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-cream/40">@prakrutinitt</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
                    <span>
                        &copy; {new Date().getFullYear()} Prakruti — NIT Trichy. All
                        rights reserved.
                    </span>
                    <span className="flex items-center gap-1">
                        Made with <Heart className="h-3 w-3 text-terracotta fill-terracotta" /> at NIT Trichy
                    </span>
                </div>
            </div>
        </footer>
    );
}
