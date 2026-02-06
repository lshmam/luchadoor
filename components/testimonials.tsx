"use client"

import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const testimonials = [
    {
        id: 1,
        name: "Michael Chen",
        position: "Homeowner, Surrey",
        quote: "Luchadoor replaced our old garage door in just one day. The team was professional, punctual, and the new door looks amazing. Highly recommend!",
        rating: 5,
        avatar: "MC",
    },
    {
        id: 2,
        name: "Sarah Thompson",
        position: "Property Manager",
        quote: "We use Luchadoor for all our strata buildings. Their emergency service is unmatched - they've helped us out of tight spots multiple times.",
        rating: 5,
        avatar: "ST",
    },
    {
        id: 3,
        name: "David Rodriguez",
        position: "Business Owner",
        quote: "Our warehouse loading dock needed urgent repairs. Luchadoor responded within the hour and had everything working perfectly. True champions!",
        rating: 5,
        avatar: "DR",
    },
    {
        id: 4,
        name: "Jennifer Park",
        position: "Homeowner, Langley",
        quote: "The gate installation exceeded our expectations. Great attention to detail and they cleaned up everything when they finished. 5 stars!",
        rating: 5,
        avatar: "JP",
    },
    {
        id: 5,
        name: "Robert Williams",
        position: "Facility Manager",
        quote: "Consistent quality service for our commercial property. The maintenance plan keeps our doors running smoothly year-round.",
        rating: 5,
        avatar: "RW",
    },
    {
        id: 6,
        name: "Lisa Martinez",
        position: "Homeowner, Vancouver",
        quote: "Called for an emergency spring repair on a Sunday. They arrived fast, fixed it quickly, and the price was fair. Can't ask for more!",
        rating: 5,
        avatar: "LM",
    },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[400px] mx-3">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-zinc-100 p-8 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-600 leading-relaxed mb-8 text-base font-medium italic">
                    &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-zinc-900 text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{testimonial.position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    // Double the testimonials for seamless infinite scroll on desktop
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
            setTimeout(checkScrollButtons, 300)
        }
    }

    return (
        <section className="py-12 md:py-24 overflow-hidden relative">
            {/* Cream/Light container */}
            <div className="py-12 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 px-4 md:px-8">
                        <Reveal width="100%">
                            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                                <Star className="w-4 h-4" />
                                Testimonials
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-zinc-900 uppercase tracking-tight">
                                What Our <span className="text-primary">Clients Say</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={200} width="100%">
                            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                                Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Luchadoor.
                            </p>
                        </Reveal>
                    </div>

                    {/* Mobile: Swipeable Carousel */}
                    <Reveal delay={400} width="100%">
                        <div className="md:hidden">
                            {/* Swipeable Cards */}
                            <div
                                ref={scrollRef}
                                onScroll={checkScrollButtons}
                                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4"
                                style={{
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="flex-shrink-0 w-[280px] snap-center"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl bg-white border border-zinc-100 p-5 h-full shadow-md">
                                            {/* Rating */}
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className="text-zinc-600 leading-relaxed mb-4 text-xs line-clamp-4">
                                                &quot;{testimonial.quote}&quot;
                                            </blockquote>

                                            {/* Author */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold text-[10px]">{testimonial.avatar}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-zinc-900 text-xs">{testimonial.name}</h4>
                                                    <p className="text-[10px] text-zinc-500">{testimonial.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons (Bottom) */}
                            <div className="flex justify-center gap-4 mt-6 px-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => scroll("left")}
                                    disabled={!canScrollLeft}
                                    className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white disabled:opacity-30 h-10 w-10 bg-white shadow-sm"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => scroll("right")}
                                    disabled={!canScrollRight}
                                    className="rounded-full border-zinc-200 text-zinc-700 hover:bg-primary hover:text-white disabled:opacity-30 h-10 w-10 bg-white shadow-sm"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Swipe hint */}
                            <p className="text-center text-zinc-400 text-xs mt-2">
                                ← Swipe to see more →
                            </p>
                        </div>
                    </Reveal>

                </div>
            </div>

            {/* Desktop: Infinite Scrolling Marquee - Full Width */}
            <Reveal delay={400} width="100%">
                <div className="hidden md:block relative w-full">
                    {/* Gradient Fade Left */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent z-10 pointer-events-none" />

                    {/* Gradient Fade Right */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[var(--background)] via-[var(--background)]/80 to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div className="flex animate-marquee">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </Reveal>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
