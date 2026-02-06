"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function HeroMinimal() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Small tagline */}
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
                        Surrey's Trusted Garage Door Experts
                    </p>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
                        Garage Doors
                        <br />
                        <span className="text-primary">Done Right.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-zinc-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Professional installation, repair, and maintenance for residential and commercial properties.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="tel:6049775156">
                            <Button
                                size="lg"
                                className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-medium text-lg rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                Call Now
                            </Button>
                        </a>
                        <a href="#services">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="h-14 px-10 text-zinc-700 hover:text-primary font-medium text-lg rounded-full transition-colors"
                            >
                                View Services
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 pt-12 border-t border-zinc-200">
                        <p className="text-sm text-zinc-400 uppercase tracking-widest mb-6">Trusted by homeowners across Surrey</p>
                        <div className="flex flex-wrap justify-center gap-12 text-center">
                            <div>
                                <span className="text-3xl font-bold text-zinc-900">10+</span>
                                <p className="text-sm text-zinc-500 mt-1">Years Experience</p>
                            </div>
                            <div>
                                <span className="text-3xl font-bold text-zinc-900">50+</span>
                                <p className="text-sm text-zinc-500 mt-1">Happy Customers</p>
                            </div>
                            <div>
                                <span className="text-3xl font-bold text-zinc-900">24/7</span>
                                <p className="text-sm text-zinc-500 mt-1">Emergency Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
