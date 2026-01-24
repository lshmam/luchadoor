import { CheckCircle } from "lucide-react"

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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
              <img
                src="/images/ivan-garage.jpeg"
                alt="Beautiful garage door installation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:-right-8 bg-primary text-primary-foreground p-6 rounded-none shadow-xl min-w-[200px]">
              <div className="text-center">
                <span className="text-xl font-bold block">Ivan Soto</span>
                <span className="text-sm uppercase tracking-wide opacity-90">Owner and CEO</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-zinc-900 uppercase">
                Fighting for Your Home&apos;s Security
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                At Luchadoor, we bring championship-level dedication to every garage door and gate project. Based in
                Surrey, BC, our team of skilled technicians combines years of experience with a passion for quality
                workmanship.
              </p>
            </div>

            <p className="text-zinc-600 leading-relaxed">
              Whether you need a new garage door installation, emergency repairs, or routine maintenance, we approach
              every job with the same intensity and commitment to excellence. Your satisfaction is our victory!
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-zinc-900">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
