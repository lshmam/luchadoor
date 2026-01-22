"use client"

import { useRef, useEffect, useState } from "react"
import { Wrench, Settings, Search, Sparkles, HardHat } from "lucide-react"

const services = [
  {
    icon: HardHat,
    title: "Installation",
    description:
      "Professional installation of garage doors, gates, and access systems. We handle everything from residential to commercial projects.",
    image: "/images/service-installation.png",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description:
      "Fast and reliable repair services for springs, cables, panels, openers, and all mechanical components.",
    image: "/images/service-repairs.png",
    color: "from-red-500/20 to-red-600/20",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description:
      "Regular maintenance packages to keep your garage doors and gates running smoothly and extend their lifespan.",
    image: "/images/service-maintenance.png",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Search,
    title: "Inspections",
    description:
      "Comprehensive safety inspections to identify potential issues before they become costly problems.",
    image: "/images/service-inspections.png",
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    description:
      "Professional cleaning services to maintain the appearance and functionality of your doors and gates.",
    image: "/images/service-cleaning.png",
    color: "from-purple-500/20 to-purple-600/20",
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const cards = container.querySelectorAll(".service-card")

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const rect = cardElement.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2

        // Calculate how close the card is to the center of the viewport
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter)
        const maxDistance = window.innerHeight / 2

        // Scale based on distance from center
        const scale = Math.max(0.9, 1 - (distanceFromCenter / maxDistance) * 0.1)

        cardElement.style.transform = `scale(${scale})`

        // Update active index
        if (distanceFromCenter < 150) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Dark rounded container */}
        <div className="bg-zinc-950 rounded-3xl p-8 md:p-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white uppercase tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              From installation to emergency repairs, we&apos;ve got your garage doors and gates covered with
              championship-level service and expertise.
            </p>
          </div>

          {/* Stacking Cards Container */}
          <div ref={containerRef} className="space-y-24 max-w-5xl mx-auto pb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card sticky top-32 transition-all duration-300 ease-out"
                style={{ zIndex: index + 1 }}
              >
                {/* Card Content */}
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 hover:border-primary/30 transition-all duration-500 bg-zinc-900 shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900 md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:hidden" />

                      {/* Number badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <span className="text-xl font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-zinc-900">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <button className="self-start px-6 py-3 bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-wide rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Accent line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
