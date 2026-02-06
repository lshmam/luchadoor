"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Image as ImageIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
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
        <span ref={ref} className="text-inherit">
            {count}
            {suffix}
        </span>
    )
}

export function WhyChooseUsStats() {
    return (
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
                    <div className="max-w-xl">
                        <Reveal width="100%">
                            <div className="text-sm font-medium text-slate-400 mb-4">Results</div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                                Numbers that speak for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">themselves</span>
                            </h2>
                        </Reveal>
                    </div>
                    <div className="max-w-md lg:mt-10">
                        <Reveal delay={100} width="100%">
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                We've earned trust through consistent work and satisfied customers. These figures show what we deliver every single day.
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                                    Learn
                                </button>
                                <button className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group">
                                    Explore
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Column 1: Large Stat */}
                    <Reveal width="100%" className="lg:h-full">
                        <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between min-h-[400px]">
                            <div className="text-6xl md:text-7xl font-bold text-white">
                                <AnimatedCounter target={2500} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Doors installed and repaired</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Homes and businesses across the region rely on our work
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Column 2: Stat */}
                    <div className="flex flex-col gap-6">
                        <Reveal delay={100} width="100%" className="flex-1">
                            <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between min-h-[400px]">
                                <div className="text-6xl md:text-7xl font-bold text-white">
                                    <AnimatedCounter target={15} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Years serving the community</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Experience built on honest work and real relationships
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Column 3: Stat */}
                    <div className="flex flex-col gap-6">
                        <Reveal delay={200} width="100%" className="flex-1">
                            <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between min-h-[400px]">
                                <div className="text-6xl md:text-7xl font-bold text-white">
                                    <AnimatedCounter target={98} suffix="%" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Customer satisfaction rating</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        People come back because we do the job right
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
        </section>
    )
}

