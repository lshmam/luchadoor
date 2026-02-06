"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function FooterMinimal() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-16 bg-zinc-900 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="/images/mascot.png"
                                alt="Luchadoor Mascot"
                                className="w-12 h-12 rounded-full"
                            />
                            <span className="text-2xl font-bold">Luchadoor</span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed">
                            Professional garage door services in Surrey, BC. Installation, repair, and maintenance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-work" className="text-zinc-400 hover:text-white transition-colors">
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:6049775156"
                                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    604-977-5156
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@luchadoor.com"
                                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    info@luchadoor.com
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-3 text-zinc-400">
                                    <MapPin className="w-5 h-5" />
                                    Surrey, BC
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                    © {currentYear} Luchadoor. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
