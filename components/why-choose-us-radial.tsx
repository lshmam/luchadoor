"use client"

import { useEffect, useRef } from "react"
import { Clock, Shield, Award, Wrench, Home, Zap } from "lucide-react"

const features = [
    {
        icon: Clock,
        title: "24/7 Emergency",
        description: "Round-the-clock availability for urgent repairs",
        stat: "24/7",
    },
    {
        icon: Award,
        title: "10+ Years",
        description: "Over a decade of expertise in Surrey, BC",
        stat: "10+",
    },
    {
        icon: Shield,
        title: "100% Satisfaction",
        description: "We stand behind every job guaranteed",
        stat: "100%",
    },
    {
        icon: Wrench,
        title: "Expert Technicians",
        description: "Skilled professionals on all brands",
        stat: "500+",
    },
    {
        icon: Home,
        title: "All Properties",
        description: "Residential to industrial, we handle it all",
        stat: "All",
    },
    {
        icon: Zap,
        title: "Fast Response",
        description: "Quick arrival times, same-day service",
        stat: "Fast",
    },
]

export function WhyChooseUsRadial() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const rect = container.getBoundingClientRect()
            const centerY = window.innerHeight / 2
            const elementCenter = rect.top + rect.height / 2
            const distance = Math.abs(centerY - elementCenter)
            const maxDistance = window.innerHeight

            const scrollProgress = Math.max(0, 1 - distance / maxDistance)
            container.style.setProperty("--scroll-progress", scrollProgress.toString())
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="py-16 md:py-24 bg-zinc-950 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                        <Shield className="w-4 h-4" />
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-6 text-white uppercase tracking-tight">
                        Championship-Level Service
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed px-4">
                        We bring the same dedication and intensity to every garage door project.
                    </p>
                </div>

                {/* Mobile Layout - Mascot + Grid */}
                <div className="md:hidden">
                    {/* Mascot */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-125" />
                            <img
                                src="/images/mascot.png"
                                alt="Luchadoor Mascot"
                                className="relative w-48 h-48 object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Features Grid - 2 columns on mobile */}
                    <div className="grid grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 hover:border-primary/50 transition-colors"
                                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-lg font-bold text-primary block">{feature.stat}</span>
                                <h3 className="text-xs font-bold text-white uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout - Radial */}
                <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-[4/3]">
                    {/* SVG Background Elements */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Animated pulse circles */}
                        <circle
                            cx="50"
                            cy="50"
                            r="12"
                            fill="none"
                            stroke="url(#gradient1)"
                            strokeWidth="0.3"
                            className="animate-pulse-slow"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="22"
                            fill="none"
                            stroke="url(#gradient1)"
                            strokeWidth="0.2"
                            className="animate-pulse-slower"
                            strokeDasharray="4 2"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="url(#gradient1)"
                            strokeWidth="0.15"
                            className="animate-pulse-slowest"
                            strokeDasharray="2 4"
                        />

                        {/* Connection lines to features */}
                        {features.map((_, index) => {
                            const angle = (index * 60 - 90) * (Math.PI / 180)
                            const innerRadius = 15
                            const outerRadius = 40
                            const x1 = 50 + Math.cos(angle) * innerRadius
                            const y1 = 50 + Math.sin(angle) * innerRadius
                            const x2 = 50 + Math.cos(angle) * outerRadius
                            const y2 = 50 + Math.sin(angle) * outerRadius

                            return (
                                <line
                                    key={index}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="url(#gradient1)"
                                    strokeWidth="0.3"
                                    className="opacity-50"
                                />
                            )
                        })}

                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Center Hub - Mascot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />

                            {/* Mascot Image */}
                            <img
                                src="/images/mascot.png"
                                alt="Luchadoor Mascot"
                                className="relative w-44 h-44 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Feature Cards - Positioned in a circle */}
                    {features.map((feature, index) => {
                        const positions = [
                            "top-[2%] left-1/2 -translate-x-1/2",
                            "top-[20%] right-[2%]",
                            "bottom-[20%] right-[2%]",
                            "bottom-[2%] left-1/2 -translate-x-1/2",
                            "bottom-[20%] left-[2%]",
                            "top-[20%] left-[2%]",
                        ]

                        return (
                            <div
                                key={index}
                                className={`absolute ${positions[index]} z-10 transition-all duration-500 hover:scale-110`}
                                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                            >
                                <div className="group relative">
                                    <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 w-40 lg:w-48 hover:border-primary/50 hover:bg-zinc-800/90 transition-all duration-300 shadow-xl">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                                            <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <span className="text-2xl font-bold text-primary block mb-1">
                                            {feature.stat}
                                        </span>
                                        <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-tight">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slow 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-pulse-slowest {
          animation: pulse-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
        </section>
    )
}
