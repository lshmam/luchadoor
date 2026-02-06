"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const workItems = [
    {
        id: 1,
        title: "Rolling Steel Doors",
        subtitle: "Heavy-duty commercial and industrial roll-up doors for warehouses and storefronts",
        image: "/luchadoor_images/Luchadoor/image0000001.JPG",
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
        image: "/luchadoor_images/Luchadoor/image0000011.JPG",
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

    // Debounce scroll handler to avoid excessive layout reads
    useEffect(() => {
        const handleScroll = () => {
            let timeoutId: NodeJS.Timeout
            return () => {
                clearTimeout(timeoutId)
                timeoutId = setTimeout(checkScrollButtons, 100)
            }
        }

        const debouncedHandler = handleScroll()
        const element = scrollRef.current

        if (element) {
            element.addEventListener('scroll', debouncedHandler)
            // Initial check
            checkScrollButtons()
        }

        return () => {
            if (element) {
                element.removeEventListener('scroll', debouncedHandler)
            }
        }
    }, [])

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
        <section className="py-12 md:py-20 relative" id="our-work">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
                            Our <span className="text-primary">Work</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={200} width="100%">
                        <p className="text-zinc-600 max-w-2xl mx-auto text-lg font-medium">
                            From industrial warehouses to commercial storefronts, we install and service all types of doors and access systems
                        </p>
                    </Reveal>
                </div>

                {/* Carousel Navigation - Desktop */}
                {/* Carousel */}
                <Reveal delay={400} width="100%">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 touch-manipulation"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            touchAction: "manipulation",
                        }}
                    >
                        {workItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[340px] md:w-[500px] snap-center group cursor-pointer"
                            >
                                {/* Card */}
                                <div className="relative overflow-hidden rounded-2xl bg-white border border-white/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                                    {/* Image */}
                                    <div className="h-[300px] md:h-[350px] overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={350}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-2">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    {/* Hover Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Carousel Navigation - Desktop (Moved to Bottom) */}
                <div className="hidden md:flex justify-end gap-4 mt-4">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        aria-label="Previous"
                        className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 w-12 h-12 bg-white shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        aria-label="Next"
                        className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 w-12 h-12 bg-white shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden justify-center mt-4 gap-2">
                    {workItems.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-none bg-zinc-700"
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
