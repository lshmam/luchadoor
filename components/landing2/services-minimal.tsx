"use client"

import { Wrench, Settings, HardHat, Search, Sparkles } from "lucide-react"

const services = [
    {
        icon: HardHat,
        title: "Installation",
        description: "Professional installation for residential and commercial properties.",
    },
    {
        icon: Wrench,
        title: "Repairs",
        description: "Fast, reliable repair services for all door types and components.",
    },
    {
        icon: Settings,
        title: "Maintenance",
        description: "Regular maintenance to keep your doors running smoothly.",
    },
    {
        icon: Search,
        title: "Inspections",
        description: "Comprehensive safety inspections to prevent costly issues.",
    },
]

export function ServicesMinimal() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section header */}
                <div className="max-w-2xl mb-16">
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                        What We Do
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                        Services
                    </h2>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
