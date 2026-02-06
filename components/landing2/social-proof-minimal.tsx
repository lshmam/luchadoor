"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        quote: "Luchadoor fixed our garage door the same day we called. Professional, fast, and reasonably priced. Highly recommend!",
        author: "Michael R.",
        location: "Surrey, BC",
    },
    {
        quote: "Excellent service from start to finish. The team was knowledgeable and got the job done right the first time.",
        author: "Sarah T.",
        location: "Delta, BC",
    },
]

export function SocialProofMinimal() {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                        What Our Clients Say
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                        Trusted Reviews
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm"
                        >
                            {/* Quote icon */}
                            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-semibold text-sm">
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium text-zinc-900">{testimonial.author}</p>
                                    <p className="text-sm text-zinc-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
