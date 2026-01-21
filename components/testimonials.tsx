"use client"

import { Star, Quote } from "lucide-react"

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
        <div className="flex-shrink-0 w-[350px] md:w-[400px] mx-3">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 h-full hover:border-primary/30 transition-colors duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-10 h-10 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 text-sm">
                    &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{testimonial.avatar}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    // Double the testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
        <section className="py-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Dark rounded container */}
                <div className="bg-zinc-950 rounded-3xl py-12 overflow-hidden">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 px-4 md:px-8">
                        <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                            <Star className="w-4 h-4" />
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white uppercase tracking-tight">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Luchadoor.
                        </p>
                    </div>

                    {/* Infinite Scrolling Marquee */}
                    <div className="relative">
                        {/* Gradient Fade Left */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />

                        {/* Gradient Fade Right */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                        {/* Marquee Container */}
                        <div className="flex animate-marquee">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

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
