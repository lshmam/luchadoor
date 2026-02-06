import { CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const features = [
  "Licensed and fully insured professionals",
  "10+ years of industry experience",
  "Same-day service available",
  "Competitive pricing with free estimates",
  "Quality parts and materials",
  "Satisfaction guaranteed on every job",
]

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 relative z-10">
            <Reveal width="100%">
              <div className="inline-block">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest text-sm mb-6">
                  <Shield className="w-4 h-4" />
                  About Luchadoor
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight uppercase">
                Masters of the <span className="text-primary">Craft</span>
              </h2>
            </Reveal>

            <Reveal delay={200} width="100%">
              <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                Luchadoor isn't just a garage door company—we're a team of dedicated professionals fighting for the safety, security, and style of your home.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed mt-4">
                Based in Surrey, BC, we've built our reputation on championship-level service, knockout quality, and uncompromised integrity. When you choose us, you're choosing a partner who won't tap out until the job is done right.
              </p>
            </Reveal>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <Reveal key={index} delay={300 + index * 100} width="100%">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-white shadow-sm hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <CheckCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      {/* Feature text from array */}
                      <p className="text-base font-medium text-zinc-700">{feature}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={600} width="100%">
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="tel:6049775156">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8 shadow-lg shadow-primary/20 rounded-full">
                    Call Us Today
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image Side */}
          <Reveal delay={400} width="100%">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/ivan-garage.jpeg"
                  alt="Luchadoor professional at work"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl border border-zinc-100 max-w-xs animate-float">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Project Success</p>
                      <p className="text-2xl font-black text-zinc-900">100%</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 leading-snug">
                    Our commitment to excellence ensures every installation meets the highest industry standards.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </Reveal>
        </div>

        {/* Mascot Section - Bottom of About */}
        <Reveal delay={700} width="100%">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16 pt-12 ">
            <img
              src="/images/mascot.png"
              alt="Luchadoor Mascot"
              className="w-72 h-72 md:w-96 md:h-96 object-contain"
            />
            <div className="text-center md:text-left max-w-md">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800">
                100% Satisfaction guaranteed when you pick
              </p>
              <img
                src="/images/luchadoor-logo-nobg.png"
                alt="Luchadoor Logo"
                className="h-24 md:h-32 lg:h-40 w-auto object-contain mt-4 mx-auto md:mx-0"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
