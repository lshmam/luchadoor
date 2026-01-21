import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Award, Wrench, Home, Zap } from "lucide-react"

const features = [
    {
        icon: Clock,
        title: "24/7 Emergency Service",
        description: "Round-the-clock availability for urgent repairs. We're always ready when you need us most.",
        stat: "24/7",
        statLabel: "Available",
    },
    {
        icon: Award,
        title: "10+ Years Experience",
        description: "Over a decade of expertise in garage door installation and repair across Surrey, BC.",
        stat: "10+",
        statLabel: "Years",
    },
    {
        icon: Shield,
        title: "100% Satisfaction",
        description: "We stand behind every job with our satisfaction guarantee. Your trust is our priority.",
        stat: "100%",
        statLabel: "Guaranteed",
    },
    {
        icon: Wrench,
        title: "Expert Technicians",
        description: "Skilled professionals with extensive training on all garage door brands and models.",
        stat: "500+",
        statLabel: "Projects",
    },
    {
        icon: Home,
        title: "Residential & Commercial",
        description: "From home garages to industrial loading docks, we handle properties of all sizes.",
        stat: "All",
        statLabel: "Properties",
    },
    {
        icon: Zap,
        title: "Fast Response Time",
        description: "Quick arrival times and efficient service to minimize your downtime.",
        stat: "Same",
        statLabel: "Day Service",
    },
]

export function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                        <Shield className="w-4 h-4" />
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground uppercase">
                        Championship-Level Service
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We bring the same dedication and intensity to every garage door project. Here&apos;s why Surrey homeowners trust Luchadoor.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-card hover:bg-gradient-to-br hover:from-card hover:to-primary/5 transition-all duration-500"
                        >
                            <CardContent className="p-8">
                                {/* Stat Badge */}
                                <div className="absolute top-4 right-4 text-right">
                                    <span className="text-2xl font-bold text-primary block">{feature.stat}</span>
                                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{feature.statLabel}</span>
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold uppercase tracking-wide text-card-foreground mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
