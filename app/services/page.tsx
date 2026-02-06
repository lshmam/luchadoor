"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Shield, Clock, Award, Wrench, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
    {
        title: "Installation",
        description: "Professional installation of commercial and industrial doors. From rolling steel doors to high-speed solutions, we handle projects of all sizes with precision and expertise.",
        image: "/luchadoor_images/Luchadoor/image0000001.JPG",
        features: ["Rolling Steel Doors", "Sectional Doors", "High-Speed Doors", "Fire-Rated Doors"]
    },
    {
        title: "Emergency Repairs",
        description: "24/7 emergency repair services to get your business back up and running. We understand downtime costs money, so we respond fast.",
        image: "/luchadoor_images/Luchadoor/image0000011.JPG",
        features: ["24/7 Availability", "Same-Day Service", "All Door Types", "Spring Replacement"]
    },
    {
        title: "Maintenance",
        description: "Regular maintenance keeps your doors operating safely and extends their lifespan. Our preventive programs save you money in the long run.",
        image: "/luchadoor_images/Luchadoor/image0000071.JPG",
        features: ["Scheduled Inspections", "Lubrication Service", "Safety Testing", "Parts Replacement"]
    },
    {
        title: "Commercial Solutions",
        description: "Complete access solutions for warehouses, loading docks, and commercial facilities. We design and install systems that improve your operations.",
        image: "/luchadoor_images/Luchadoor/image0000051.JPG",
        features: ["Dock Levelers", "Loading Equipment", "Access Control", "Security Gates"]
    }
]

const galleryImages = [
    "/luchadoor_images/Luchadoor/image0000001(1).JPG",
    "/luchadoor_images/Luchadoor/image0000001(2).JPG",
    "/luchadoor_images/Luchadoor/image0000011(1).JPG",
    "/luchadoor_images/Luchadoor/image0000011(2).JPG",
    "/luchadoor_images/Luchadoor/image0000021(1).JPG",
    "/luchadoor_images/Luchadoor/image0000021(2).JPG",
    "/luchadoor_images/Luchadoor/image0000031(1).JPG",
    "/luchadoor_images/Luchadoor/image0000031(2).JPG",
    "/luchadoor_images/Luchadoor/image0000041(1).JPG",
    "/luchadoor_images/Luchadoor/image0000041(2).JPG",
    "/luchadoor_images/Luchadoor/image0000071(1).JPG",
    "/luchadoor_images/Luchadoor/image0000081(1).JPG",
]

const reasons = [
    { icon: Clock, title: "Fast Response", description: "24/7 emergency service with same-day availability" },
    { icon: Award, title: "10+ Years Experience", description: "Trusted expertise in commercial door systems" },
    { icon: Shield, title: "Licensed & Insured", description: "Full coverage for your peace of mind" },
    { icon: Wrench, title: "All Brands", description: "We service and install all major brands" },
]

export default function ServicesPage() {
    return (
        <>
            <main className="min-h-screen bg-white">
                <Header />

                {/* Hero Section - Split Layout */}
                <section className="pt-24 pb-16 bg-zinc-950 relative overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text */}
                            <Reveal width="100%">
                                <div>
                                    <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider mb-6">
                                        Professional Services
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">
                                        Door Solutions That Work For Your Business
                                    </h1>
                                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                        From installation to emergency repairs, we provide championship-level service for commercial and industrial doors across Surrey and the Lower Mainland.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="tel:6049775156">
                                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-8 h-14">
                                                Get Free Quote
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </a>
                                        <a href="tel:6049775156" className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors font-bold uppercase px-6 h-14 border-2 border-white/30 hover:border-primary rounded-md">
                                            <Phone className="w-5 h-5" />
                                            604-977-5156
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
                                            src="/luchadoor_images/Luchadoor/image0000011.JPG"
                                            alt="Emergency door"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000071.JPG"
                                            alt="Maintenance"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                                        <img
                                            src="/luchadoor_images/Luchadoor/image0000051.JPG"
                                            alt="Commercial solutions"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-zinc-50">
                    <div className="container mx-auto px-6 md:px-12">
                        <Reveal width="100%">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-6">
                                    What We <span className="text-primary">Offer</span>
                                </h2>
                                <p className="text-zinc-600 text-lg">
                                    Complete door solutions for commercial and industrial properties. Every service backed by our commitment to quality.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-16">
                            {services.map((service, index) => (
                                <Reveal key={index} delay={index * 100} width="100%">
                                    <div
                                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                                    >
                                        {/* Image */}
                                        <div className="w-full lg:w-1/2">
                                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl group">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full lg:w-1/2">
                                            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <ul className="grid grid-cols-2 gap-3 mb-8">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-zinc-700">
                                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                        <span className="font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <a href="tel:6049775156">
                                                <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-6">
                                                    Request Service
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                                Why Choose Luchadoor
                            </h2>
                            <p className="text-white/80 text-lg">
                                We're not just another door company. We're your partners in keeping your business running smoothly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <reason.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-2">{reason.title}</h3>
                                    <p className="text-white/70">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="py-20 bg-zinc-950">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                                Our Work in Action
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                See examples of our installations and repairs across commercial and industrial properties.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative overflow-hidden rounded-xl group cursor-pointer ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
                                Ready to Get Started?
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-6">
                                Book Your Free Consultation Today
                            </h2>
                            <p className="text-zinc-600 text-xl mb-8 max-w-2xl mx-auto">
                                Whether you need a new installation, emergency repair, or regular maintenance, our team is ready to help. Call now for a free estimate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:6049775156">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-10 h-14 text-lg">
                                        <Phone className="mr-2 w-5 h-5" />
                                        Call 604-977-5156
                                    </Button>
                                </a>
                            </div>

                            {/* Trust Stats */}
                            <div className="flex flex-wrap justify-center gap-12 mt-12 pt-12 border-t border-zinc-200">
                                <div className="text-center">
                                    <span className="text-4xl font-bold text-primary block">50+</span>
                                    <span className="text-sm text-zinc-500 uppercase tracking-wide">Happy Customers</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold text-primary block">10+</span>
                                    <span className="text-sm text-zinc-500 uppercase tracking-wide">Years Experience</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold text-primary block">24/7</span>
                                    <span className="text-sm text-zinc-500 uppercase tracking-wide">Emergency Service</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold text-primary block">100%</span>
                                    <span className="text-sm text-zinc-500 uppercase tracking-wide">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
