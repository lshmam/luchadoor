"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const workItems = [
    {
        id: 1,
        title: "Rolling Steel Doors",
        subtitle: "Heavy-duty commercial and industrial roll-up doors for warehouses and storefronts",
        image: "/images/rolling-steel-door.png",
    },
    {
        id: 2,
        title: "Parking Gates",
        subtitle: "Automated barrier systems for parking facilities and access control",
        image: "/images/parking-gate.png",
    },
    {
        id: 3,
        title: "Emergency Steel Doors",
        subtitle: "Fire-rated outdoor emergency exit doors built for safety and security",
        image: "/images/emergency-steel-door.png",
    },
    {
        id: 4,
        title: "Aluminium Doors",
        subtitle: "Modern sliding and swing aluminium doors for commercial entrances",
        image: "/images/aluminium-doors.png",
    },
    {
        id: 5,
        title: "Dock Levelers",
        subtitle: "Hydraulic loading dock equipment for efficient warehouse operations",
        image: "/images/dock-leveler.png",
    },
]

export function OurWork() {
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
            const scrollAmount = 350
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
            setTimeout(checkScrollButtons, 300)
        }
    }

    return (
        <section className="py-12 md:py-20" id="our-work">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
                        Our Work
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From industrial warehouses to commercial storefronts, we install and service all types of doors and access systems
                    </p>
                </div>

                {/* Carousel Navigation - Desktop */}
                <div className="hidden md:flex justify-end gap-2 mb-6">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className="border-zinc-300 text-zinc-900 hover:bg-zinc-100 disabled:opacity-30"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className="border-zinc-300 text-zinc-900 hover:bg-zinc-100 disabled:opacity-30"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    onScroll={checkScrollButtons}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {workItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[240px] md:w-[350px] snap-center group cursor-pointer"
                        >
                            {/* Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full">
                                {/* Image */}
                                <div className="h-[180px] md:h-[200px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Hover Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden justify-center mt-4 gap-2">
                    {workItems.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-zinc-700"
                        />
                    ))}
                </div>

                {/* Mobile Swipe Hint */}
                <p className="text-center text-zinc-500 text-sm mt-4 md:hidden">
                    ← Swipe to explore →
                </p>
            </div>
        </section>
    )
}
