import { useRef, useState } from "react"
import { Wrench, Settings, Search, Sparkles, HardHat, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <section id="services" className="bg-zinc-950 relative py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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

                {/* Carousel Implementation */}
                <div
                    ref={scrollRef}
                    onScroll={checkScrollButtons}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-zinc-900 border border-zinc-800 shadow-2xl relative flex flex-col group overflow-hidden"
                        >
                            {/* Image Side */}
                            <div className="relative w-full h-64 overflow-hidden">
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
                            <div className="w-full p-8 md:p-10 flex flex-col bg-zinc-900 border-t border-zinc-800 flex-grow">
                                {/* Title */}
                                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <a href="tel:6049775156" className="self-start mt-auto px-8 py-4 bg-zinc-950 border border-zinc-700 text-white font-bold uppercase tracking-wide hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                                    Call Now
                                </a>
                            </div>

                            {/* Accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    ))}
                </div>

                {/* Bottom Navigation Buttons (Desktop) */}
                <div className="hidden md:flex justify-end gap-4 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className="rounded-none border-zinc-700 text-white hover:bg-zinc-800 hover:text-white disabled:opacity-30 w-12 h-12 bg-zinc-900"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className="rounded-none border-zinc-700 text-white hover:bg-zinc-800 hover:text-white disabled:opacity-30 w-12 h-12 bg-zinc-900"
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
