"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const projectCategories = [
    {
        title: "Rolling Steel Doors",
        description: "Heavy-duty commercial and industrial roll-up doors for warehouses, storefronts, and distribution centers.",
        images: [
            "/luchadoor_images/Luchadoor/image0000001.JPG",
            "/luchadoor_images/Luchadoor/image0000001(2).JPG",
            "/luchadoor_images/Luchadoor/image0000051(1).JPG",

        ]
    },
    {
        title: "Emergency & Fire Doors",
        description: "Fire-rated steel doors with panic hardware for commercial buildings, meeting all safety codes and regulations.",
        images: [
            "/luchadoor_images/Luchadoor/image0000011.JPG",
            "/luchadoor_images/Luchadoor/image0000031.JPG",
            "/luchadoor_images/Luchadoor/image0000041.JPG",
        ]
    },
    {
        title: "Loading Docks & Industrial",
        description: "Complete loading dock solutions including levelers, seals, and high-speed industrial doors for warehouses and distribution centers.",
        images: [
            "/luchadoor_images/Luchadoor/image0000051.JPG",
            "/luchadoor_images/Luchadoor/image0000001(1).JPG",
            "/luchadoor_images/Luchadoor/image0000001(1).JPG",

        ]
    }
]

const fullGallery = [
    "/luchadoor_images/Luchadoor/image0000001(4).JPG",
    "/luchadoor_images/Luchadoor/image0000001(5).JPG",
    "/luchadoor_images/Luchadoor/image0000001(6).JPG",
    "/luchadoor_images/Luchadoor/image0000011(3).JPG",
    "/luchadoor_images/Luchadoor/image0000011(4).JPG",
    "/luchadoor_images/Luchadoor/image0000021(2).JPG",
    "/luchadoor_images/Luchadoor/image0000021(3).JPG",
    "/luchadoor_images/Luchadoor/image0000031(2).JPG",
    "/luchadoor_images/Luchadoor/image0000031(3).JPG",
    "/luchadoor_images/Luchadoor/image0000041(2).JPG",
    "/luchadoor_images/Luchadoor/image0000041(3).JPG",
    "/luchadoor_images/Luchadoor/image0000051(1).JPG",
    "/luchadoor_images/Luchadoor/image0000051(2).JPG",
    "/luchadoor_images/Luchadoor/image0000061(1).JPG",
    "/luchadoor_images/Luchadoor/image0000061(2).JPG",
]

const teamImages = [
    "/luchadoor_images/Luchadoor/image0000071.JPG",
    "/luchadoor_images/Luchadoor/image0000071(1).JPG",
    "/luchadoor_images/Luchadoor/image0000081.JPG",
    "/luchadoor_images/Luchadoor/image0000081(1).JPG",
    "/luchadoor_images/Luchadoor/image0000091.JPG",
    "/luchadoor_images/Luchadoor/image0000091(1).JPG",
]

export default function OurWorkPage() {
    return (
        <>
            <main className="min-h-screen bg-white">
                <Header />

                {/* Hero Section - Image Grid */}
                <section className="pt-24 pb-16 bg-zinc-950 relative overflow-hidden">
                    {/* Left Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent to-30% z-10 pointer-events-none" />
                    <div className="container mx-auto px-6 md:px-12 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <Reveal width="100%">
                                <div>
                                    <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider mb-6">
                                        Our Portfolio
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">
                                        See Our Work in Action
                                    </h1>
                                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                        From industrial warehouses to commercial storefronts, we've installed and serviced hundreds of doors across the Lower Mainland. Our work speaks for itself.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="tel:6049775156">
                                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-8 h-14">
                                                Get Your Free Quote
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000001.JPG"
                                            alt="Rolling steel door"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="aspect-square overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000031.JPG"
                                            alt="Commercial door"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000011.JPG"
                                            alt="Emergency door"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000071.JPG"
                                            alt="Technician at work"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 bg-primary">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <span className="text-4xl md:text-5xl font-bold text-white block">50+</span>
                                <span className="text-white/70 uppercase tracking-wide text-sm">Happy Customers</span>
                            </div>
                            <div>
                                <span className="text-4xl md:text-5xl font-bold text-white block">200+</span>
                                <span className="text-white/70 uppercase tracking-wide text-sm">Doors Installed</span>
                            </div>
                            <div>
                                <span className="text-4xl md:text-5xl font-bold text-white block">10+</span>
                                <span className="text-white/70 uppercase tracking-wide text-sm">Years Experience</span>
                            </div>
                            <div>
                                <span className="text-4xl md:text-5xl font-bold text-white block">24/7</span>
                                <span className="text-white/70 uppercase tracking-wide text-sm">Emergency Service</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Categories */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-12">
                        <Reveal width="100%">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-6">
                                    Project <span className="text-primary">Categories</span>
                                </h2>
                                <p className="text-zinc-600 text-lg">
                                    We specialize in commercial and industrial door solutions. Explore our work by category.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-24">
                            {projectCategories.map((category, index) => (
                                <Reveal key={index} delay={index * 100} width="100%">
                                    <div className="group">
                                        <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                                            <div className="lg:w-1/3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
                                                    {category.title}
                                                </h3>
                                                <p className="text-zinc-600 leading-relaxed mb-6">
                                                    {category.description}
                                                </p>
                                                <a href="tel:6049775156">
                                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase">
                                                        Get Quote
                                                        <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </a>
                                            </div>
                                            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {category.images.map((image, i) => (
                                                    <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group/img cursor-pointer">
                                                        <img
                                                            src={image}
                                                            alt={`${category.title} ${i + 1}`}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team at Work */}
                <section className="py-20 bg-zinc-100">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
                                    Our Process
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 uppercase tracking-tight mb-6">
                                    Professional Team, Quality Results
                                </h2>
                                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                                    Our experienced technicians take pride in every installation. We use professional equipment and follow industry best practices to ensure your door system works perfectly for years to come.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-zinc-700 font-medium">Licensed and fully insured professionals</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-zinc-700 font-medium">Industry-leading equipment and tools</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-zinc-700 font-medium">Thorough cleanup after every job</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-zinc-700 font-medium">Follow-up to ensure satisfaction</span>
                                    </li>
                                </ul>
                                <a href="tel:6049775156">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase">
                                        <Phone className="mr-2 w-5 h-5" />
                                        Call Us Today
                                    </Button>
                                </a>
                            </div>

                            {/* Team Images Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {teamImages.slice(0, 4).map((image, i) => (
                                    <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Team at work ${i + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Gallery */}
                <section className="py-20 bg-zinc-950">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                                More From Our Portfolio
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Browse through additional examples of our installation and repair work.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {fullGallery.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                                Whether it's a new installation, repair, or maintenance, we're ready to deliver the same quality you see in our portfolio. Get your free estimate today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:6049775156">
                                    <Button size="lg" className="bg-white hover:bg-zinc-100 text-primary font-bold uppercase px-10 h-14 text-lg">
                                        <Phone className="mr-2 w-5 h-5" />
                                        Call 604-977-5156
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main >
        </>
    )
}
