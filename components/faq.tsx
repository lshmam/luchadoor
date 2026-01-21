"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqData = [
    {
        id: 1,
        question: "How quickly can you respond to emergency calls?",
        answer: "We offer 24/7 emergency service and typically respond within 1-2 hours for urgent situations in Surrey and surrounding areas. Our team understands that a malfunctioning garage door can be a security risk, so we prioritize emergency calls.",
    },
    {
        id: 2,
        question: "Do you provide free estimates?",
        answer: "Yes! We provide free, no-obligation estimates for all garage door installations and repairs. Our technician will assess your needs and provide transparent pricing before any work begins.",
    },
    {
        id: 3,
        question: "What types of garage doors do you install?",
        answer: "We install all types of garage doors including sectional, roll-up, side-hinged, and tilt-up doors. We work with steel, aluminum, wood, and fiberglass materials, and can help you choose the best option for your home or business.",
    },
    {
        id: 4,
        question: "Are your technicians licensed and insured?",
        answer: "Absolutely. All our technicians are fully licensed, insured, and undergo regular training to stay current with the latest garage door technologies and safety standards. Your peace of mind is our priority.",
    },
    {
        id: 5,
        question: "Do you offer maintenance plans?",
        answer: "Yes, we offer comprehensive maintenance plans that include regular inspections, lubrication, safety checks, and minor adjustments. Regular maintenance extends the life of your garage door and prevents costly repairs.",
    },
    {
        id: 6,
        question: "What areas do you serve?",
        answer: "We primarily serve Surrey, BC and the surrounding areas including Langley, Delta, White Rock, and Vancouver. Contact us to confirm service availability in your specific location.",
    },
]

export function Faq() {
    const [openId, setOpenId] = useState<number | null>(1)

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground uppercase">
                        Commonly <span className="text-primary">Asked</span> Questions
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Find answers to frequently asked questions about our garage door and gate services. Can&apos;t find what you&apos;re looking for? Contact us directly!
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "rounded-2xl bg-card border-2 overflow-hidden transition-all duration-300",
                                openId === item.id ? "border-primary/20 shadow-lg" : "border-transparent"
                            )}
                        >
                            <button
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-bold text-card-foreground pr-4">
                                    {item.question}
                                </span>
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300",
                                        openId === item.id && "bg-primary rotate-180"
                                    )}
                                >
                                    <ChevronDown
                                        className={cn(
                                            "w-5 h-5 text-primary transition-colors",
                                            openId === item.id && "text-primary-foreground"
                                        )}
                                    />
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openId === item.id ? "max-h-96" : "max-h-0"
                                )}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
