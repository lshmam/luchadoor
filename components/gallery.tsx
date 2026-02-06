const galleryImages = [
  {
    src: "/luchadoor_images/Luchadoor/image0000001.JPG",
    alt: "Commercial rolling steel door installation",
  },
  {
    src: "/luchadoor_images/Luchadoor/image0000011.JPG",
    alt: "Navy blue emergency steel door with panic bar",
  },
  {
    src: "/luchadoor_images/Luchadoor/image0000021.JPG",
    alt: "Fire-rated steel door installation",
  },
  {
    src: "/luchadoor_images/Luchadoor/image0000031.JPG",
    alt: "Industrial steel door with window",
  },
  {
    src: "/luchadoor_images/Luchadoor/image0000071.JPG",
    alt: "Professional door installation work in progress",
  },
  {
    src: "/luchadoor_images/Luchadoor/image0000051.JPG",
    alt: "Workshop and door installation area",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground uppercase">Project Gallery</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Check out some of our recent installations and repairs. Every project is completed with precision and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold uppercase tracking-wide text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
