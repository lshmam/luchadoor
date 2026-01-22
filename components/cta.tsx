import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield } from "lucide-react"

export function Cta() {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                {/* Dark rounded container */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-3xl relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 py-16 md:py-24 px-8 md:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                <Shield className="w-4 h-4" />
                                Get Started Today
                            </span>

                            {/* Headline */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6">
                                Ready to Upgrade Your{" "}
                                <span className="text-primary">Garage Door</span>?
                            </h2>

                            {/* Description */}
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Get a free estimate today and discover why Surrey homeowners trust Luchadoor for all their garage door and gate needs.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold uppercase tracking-wide text-lg px-8 h-14"
                                >
                                    Get Free Estimate
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <a
                                    href="tel:6049775156"
                                    className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors font-bold uppercase tracking-wide"
                                >
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span>604-977-5156</span>
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-white block">500+</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wide">Happy Customers</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-white block">10+</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wide">Years Experience</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-white block">24/7</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wide">Emergency Service</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-white block">100%</span>
                                    <span className="text-sm text-white/60 uppercase tracking-wide">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
