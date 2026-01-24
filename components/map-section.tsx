"use client"

import { MapPin } from "lucide-react"

export function MapSection() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-none text-sm font-bold uppercase tracking-widest mb-4">
                        <MapPin className="w-4 h-4" />
                        Service Area
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white uppercase tracking-tight">
                        Serving Surrey & Beyond
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Based in the heart of Surrey, we provide rapid response garage door services to the entire Greater Vancouver area.
                    </p>
                </div>

                {/* Map Container */}
                <div className="w-full h-[400px] md:h-[500px] bg-zinc-900 border border-zinc-800 relative z-10 group overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=10324%20Whalley%20Blvd,%20Surrey,%20BC,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />

                    {/* Location Overlay */}
                    <div className="absolute bottom-6 left-6 bg-zinc-950/90 backdrop-blur-sm p-6 border border-zinc-800 max-w-xs hidden md:block">
                        <h3 className="text-white font-bold uppercase tracking-wide mb-2">Luchadoor Headquarters</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            10324 Whalley Blvd<br />
                            Surrey, BC, Canada
                        </p>
                        <a
                            href="https://maps.google.com/maps?q=10324%20Whalley%20Blvd,%20Surrey,%20BC,%20Canada"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-xs font-bold uppercase tracking-wider hover:underline"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
