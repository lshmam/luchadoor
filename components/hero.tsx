"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/garage-hero-3.jpg"
          alt="Garage Door Hero Background"
          className="w-full h-full object-cover object-right"
        />
        {/* Professional Dark Overlay - Navy Tint */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent to-50%" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          <Reveal width="100%">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight text-white mb-6 drop-shadow-md">
              Professional <br />
              Garage Door Service <br />
              <span className="text-primary-foreground/90">When You Need It.</span>
            </h1>
          </Reveal>

          <Reveal delay={100} width="100%">
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
              Expert installation, repair, and maintenance for residential and commercial properties in Surrey, BC.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={200} width="100%">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6049775156">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-md shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Call Us Now
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg rounded-md backdrop-blur-sm transition-all"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
