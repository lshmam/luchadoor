import { useRef, useState } from "react"
import { Wrench, Settings, Search, Sparkles, HardHat, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

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

export function Services2() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
            setTimeout(checkScrollButtons, 300)
        }
    }

    return (
        <section id="services" className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4 rounded-full">
                            What We Do
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-zinc-900 uppercase tracking-tight">
                            Our <span className="text-primary">Services</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={200} width="100%">
                        <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium">
                            From installation to emergency repairs, we&apos;ve got your garage doors and gates covered with
                            championship-level service and expertise.
                        </p>
                    </Reveal>
                </div>

                {/* Carousel Implementation */}
                <Reveal delay={400} width="100%">
                    <div
                        ref={scrollRef}
                        onScroll={checkScrollButtons}
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 -mx-4 px-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-white border border-white/50 shadow-xl rounded-2xl relative flex flex-col group overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Image Side */}
                                <div className="relative w-full h-72 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                    {/* Number badge */}
                                    <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-md flex items-center justify-center rounded-xl shadow-lg">
                                        <span className="text-2xl font-bold text-zinc-900 font-mono">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Icon Badge */}
                                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full p-8 md:p-10 flex flex-col bg-white flex-grow">
                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 uppercase tracking-wide mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <a href="tel:6049775156" className="self-start mt-auto inline-flex items-center text-primary font-bold uppercase tracking-wide hover:underline decoration-2 underline-offset-4 pointer-events-none">
                                        Call Now <ChevronRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>

                                <div className="h-2 bg-zinc-100 w-full">
                                    <div className={`h-full ${service.color} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Bottom Navigation Buttons (Desktop) */}
                <div className="hidden md:flex justify-end gap-4 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 w-12 h-12 bg-white shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 w-12 h-12 bg-white shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>

                {/* Mobile Swipe Indicators */}
                <div className="flex md:hidden justify-center mt-6 gap-2">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-none bg-zinc-700"
                        />
                    ))}
                </div>
                {/* Mobile Swipe Hint */}
                <p className="text-center text-zinc-500 text-xs mt-4 md:hidden">
                    ← Swipe to explore →
                </p>
            </div>
        </section>
    )
}
