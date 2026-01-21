import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Garage Door Installation Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white uppercase tracking-wide">Licensed & Insured</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white uppercase tracking-tight">
              <span className="text-balance">Your Champion for</span>{" "}
              <span className="text-primary block mt-2">Garage Doors</span>{" "}
              <span className="text-secondary">& Gates</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Professional installation, repair, and maintenance services in Surrey, BC. We fight for your home&apos;s
              security and curb appeal with championship-level service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide text-lg px-8 h-14"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wide text-lg px-8 h-14 bg-transparent"
              >
                Our Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <span className="text-xl font-bold text-white">24/7</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Emergency</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <Award className="w-6 h-6 text-primary mb-2" />
                <span className="text-xl font-bold text-white">10+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Years Exp.</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <span className="text-xl font-bold text-white">100%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition (Mascot & Logo) */}
          <div className="relative h-full min-h-[500px] flex items-end justify-center lg:justify-end pointer-events-none">
            {/* Logo - Floating Top/Right relative to column */}
            <div className="absolute top-0 right-0 lg:-right-4 z-30 w-40 h-40 animate-in fade-in zoom-in duration-700 delay-300">
              <img
                src="/images/logo.png"
                alt="Luchadoor Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Mascot - Standing tall */}
            <div className="relative w-full max-w-[500px] z-20">
              <img
                src="/images/mascot.png"
                alt="Luchadoor Mascot"
                className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-10 fade-in duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
