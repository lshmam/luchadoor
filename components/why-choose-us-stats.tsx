"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Shield, Award, Wrench, Home, Zap } from "lucide-react"

const stats = [
    { value: 24, suffix: "/7", label: "Emergency Service" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Satisfaction Rate" },
]

const features = [
    {
        icon: Clock,
        title: "24/7 Emergency Service",
        description: "Round-the-clock availability for urgent repairs. We're always ready when you need us most.",
    },
    {
        icon: Award,
        title: "Expert Technicians",
        description: "Skilled professionals with extensive training on all garage door brands and models.",
    },
    {
        icon: Home,
        title: "Residential & Commercial",
        description: "From home garages to industrial loading docks, we handle properties of all sizes.",
    },
    {
        icon: Zap,
        title: "Fast Response Time",
        description: "Quick arrival times and efficient service to minimize your downtime.",
    },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const duration = 2000
                    const steps = 60
                    const increment = target / steps
                    let current = 0

                    const timer = setInterval(() => {
                        current += increment
                        if (current >= target) {
                            setCount(target)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(current))
                        }
                    }, duration / steps)

                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [target, hasAnimated])

    return (
        <span ref={ref} className="text-4xl md:text-6xl font-bold text-white">
            {count}
            <span className="text-primary">{suffix}</span>
        </span>
    )
}

export function WhyChooseUsStats() {
    return (
        <section className="py-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Dark rounded container */}
                <div className="bg-zinc-950 rounded-3xl p-8 md:p-12">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                            <Shield className="w-4 h-4" />
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-6 text-white uppercase tracking-tight">
                            Championship-Level Service
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            We bring the same dedication and intensity to every garage door project.
                        </p>
                    </div>

                    {/* Stats Counter Bar */}
                    <div className="relative mb-16 md:mb-24">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-xl" />

                        <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center relative"
                                    >
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                        <p className="text-gray-400 text-sm md:text-base mt-2 uppercase tracking-wider font-medium">
                                            {stat.label}
                                        </p>

                                        {/* Divider line - hidden on last item and mobile */}
                                        {index < stats.length - 1 && (
                                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-zinc-700" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature List with Mascot */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Mascot */}
                        <div className="relative flex justify-center order-2 lg:order-1">
                            {/* Glow effects */}
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
                            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[80px] translate-x-10" />

                            {/* Mascot Image */}
                            <div className="relative">
                                <img
                                    src="/images/mascot.png"
                                    alt="Luchadoor Mascot"
                                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                                />

                                {/* Floating badge */}
                                <div className="absolute -top-4 -right-4 md:top-0 md:right-0 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg animate-bounce">
                                    #1 In Surrey
                                </div>
                            </div>
                        </div>

                        {/* Right: Feature List */}
                        <div className="space-y-6 order-1 lg:order-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex gap-5 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 hover:bg-zinc-900 transition-all duration-300"
                                    style={{ animation: `fadeInRight 0.5s ease-out ${index * 0.1}s both` }}
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    )
}

