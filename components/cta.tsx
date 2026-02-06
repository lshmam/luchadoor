import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Cta() {
    return (
        <section className="relative py-24 overflow-hidden bg-primary">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="py-12 md:py-16 px-8 md:px-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <Reveal width="100%">
                            <span className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-md">
                                <Shield className="w-4 h-4" />
                                Get Started Today
                            </span>

                            {/* Headline */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 drop-shadow-sm">
                                Ready to Upgrade Your Garage Door?
                            </h2>
                        </Reveal>

                        {/* Description */}
                        <Reveal delay={200} width="100%">
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                                Get a free estimate today and discover why Surrey homeowners trust Luchadoor for all their garage door and gate needs.
                            </p>
                        </Reveal>

                        {/* CTA Buttons */}
                        <Reveal delay={400} width="100%">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="tel:6049775156">
                                    <Button
                                        size="lg"
                                        className="bg-white hover:bg-zinc-50 text-zinc-900 font-bold uppercase tracking-wide text-lg px-8 h-14 shadow-xl touch-manipulation"
                                        style={{ touchAction: "manipulation" }}
                                    >
                                        Get Free Estimate
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </a>
                                <a
                                    href="tel:6049775156"
                                    className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors font-bold uppercase tracking-wide border-2 border-white/30 hover:border-white px-8 h-14 rounded-md touch-manipulation"
                                    style={{ touchAction: "manipulation" }}
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>604-977-5156</span>
                                </a>
                            </div>
                        </Reveal>

                        {/* Trust Indicators */}
                        <Reveal delay={600} width="100%">
                            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-white block">50+</span>
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
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
