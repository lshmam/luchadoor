"use client"

import { Wrench, Settings, Search, Sparkles, HardHat } from "lucide-react"

const services = [
  {
    icon: HardHat,
    title: "Installation",
    description:
      "Professional installation of garage doors, gates, and access systems. We handle everything from residential to commercial projects.",
    image: "/images/service-installation.png",
    color: "bg-green-500",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description:
      "Fast and reliable repair services for springs, cables, panels, openers, and all mechanical components.",
    image: "/images/service-repairs.png",
    color: "bg-red-500",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description:
      "Regular maintenance packages to keep your garage doors and gates running smoothly and extend their lifespan.",
    image: "/images/service-maintenance.png",
    color: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Inspections",
    description:
      "Comprehensive safety inspections to identify potential issues before they become costly problems.",
    image: "/images/service-inspections.png",
    color: "bg-yellow-500",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description:
      "Professional cleaning services to maintain the appearance and functionality of your doors and gates.",
    image: "/images/service-cleaning.png",
    color: "bg-purple-500",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-zinc-950 relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            From installation to emergency repairs, we&apos;ve got your garage doors and gates covered with
            championship-level service and expertise.
          </p>
        </div>

        {/* Simple Sticky Stack Implementation */}
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="sticky top-24 mb-12 last:mb-0"
              style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
            >
              <div className="max-w-5xl mx-auto h-[500px] bg-zinc-900 border border-zinc-800 shadow-2xl relative flex flex-col md:flex-row group overflow-hidden">
                {/* Image Side */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden order-1 md:order-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Number badge */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-zinc-950 flex items-center justify-center border-r border-b border-zinc-800">
                    <span className="text-xl font-bold text-white font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-zinc-900 border-l border-zinc-800 order-2 md:order-none">
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <button className="self-start px-8 py-4 bg-zinc-950 border border-zinc-700 text-white font-bold uppercase tracking-wide hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
