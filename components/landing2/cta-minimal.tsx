"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CtaMinimal() {
    return (
        <section className="py-24 bg-primary">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Ready to Get Started?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                        Contact us today for a free estimate on your garage door project.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="tel:6049775156">
                            <Button
                                size="lg"
                                className="h-14 px-10 bg-white hover:bg-zinc-50 text-primary font-medium text-lg rounded-full shadow-lg transition-all"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                604-977-5156
                            </Button>
                        </a>
                        <a href="#services">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="h-14 px-10 text-white hover:text-white hover:bg-white/10 font-medium text-lg rounded-full border border-white/30 transition-colors"
                            >
                                Learn More
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
