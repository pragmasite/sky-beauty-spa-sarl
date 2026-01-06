import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2 className="font-serif text-2xl font-bold mb-2">SKY BEAUTY</h2>
              <p className="text-white/70 text-sm">{t.footer.tagline}</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{t.footer.description}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">{t.footer.navigation}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+41763403671" className="text-white/70 hover:text-white transition-colors">
                  +41 76 340 36 71
                </a>
              </li>
              <li>
                <a href="mailto:skybeautyyspaa@outlook.fr" className="text-white/70 hover:text-white transition-colors">
                  skybeautyyspaa@outlook.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/skybeautyy.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">{t.footer.copyright}</p>
            <div className="flex items-center gap-2 text-white/60 text-sm mt-4 md:mt-0">
              Made with
              <Heart className="h-4 w-4 text-accent fill-accent" />
              for beauty & wellness
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
