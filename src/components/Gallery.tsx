import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images with descriptions in each language
  const galleryDescriptions: Record<string, { src: string; alt: Record<string, string> }[]> = {
    fr: [
      { src: "/images/img-1.jpg", alt: { fr: "Réception moderne", en: "Modern Reception", de: "Moderne Rezeption" } },
      { src: "/images/img-2.jpg", alt: { fr: "Salle de traitement", en: "Treatment Room", de: "Behandlungsraum" } },
      { src: "/images/img-3.jpg", alt: { fr: "Station de maquillage", en: "Makeup Station", de: "Make-up-Station" } },
      { src: "/images/img-4.jpg", alt: { fr: "Équipement laser", en: "Laser Equipment", de: "Lasergeräte" } },
    ],
    en: [
      { src: "/images/img-1.jpg", alt: { fr: "Réception moderne", en: "Modern Reception", de: "Moderne Rezeption" } },
      { src: "/images/img-2.jpg", alt: { fr: "Salle de traitement", en: "Treatment Room", de: "Behandlungsraum" } },
      { src: "/images/img-3.jpg", alt: { fr: "Station de maquillage", en: "Makeup Station", de: "Make-up-Station" } },
      { src: "/images/img-4.jpg", alt: { fr: "Équipement laser", en: "Laser Equipment", de: "Lasergeräte" } },
    ],
    de: [
      { src: "/images/img-1.jpg", alt: { fr: "Réception moderne", en: "Modern Reception", de: "Moderne Rezeption" } },
      { src: "/images/img-2.jpg", alt: { fr: "Salle de traitement", en: "Treatment Room", de: "Behandlungsraum" } },
      { src: "/images/img-3.jpg", alt: { fr: "Station de maquillage", en: "Makeup Station", de: "Make-up-Station" } },
      { src: "/images/img-4.jpg", alt: { fr: "Équipement laser", en: "Laser Equipment", de: "Lasergeräte" } },
    ],
  };

  const images = galleryDescriptions[lang];
  const hasMultiple = images.length > 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground mt-4">{t.gallery.description}</p>
        </motion.div>

        {hasMultiple ? (
          // Slider for multiple images
          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-medium"
            >
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].alt[lang]}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-lg font-medium text-white">{images[currentSlide].alt[lang]}</p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Slide Indicators */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-8" : "bg-muted w-2"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${
                    index === currentSlide ? "ring-2 ring-primary" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt[lang]}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          // Single image display
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-medium"
          >
            <img
              src={images[0].src}
              alt={images[0].alt[lang]}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-medium text-white">{images[0].alt[lang]}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
