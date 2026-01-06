import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 76 340 36 71",
      href: "tel:+41763403671",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "skybeautyyspaa@outlook.fr",
      href: "mailto:skybeautyyspaa@outlook.fr",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Route de Ferney 220, 1218 Le Grand-Saconnex",
      href: "https://maps.google.com/?q=46.238757,6.123759",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl bg-white p-6 shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                    {info.href.startsWith("http") && (
                      <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </motion.a>
              );
            })}

            {/* Parking Information */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/5 p-6 border border-primary/20"
            >
              <h3 className="font-semibold text-foreground mb-2">Parking</h3>
              <p className="text-sm text-muted-foreground">{t.contact.parking}</p>
            </motion.div>

            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
              <a href="tel:+41763403671">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-[400px]"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.0098849584463!2d6.12375761111111!3d46.238757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sRoute%20de%20Ferney%20220%2C%201218%20Le%20Grand-Saconnex!5e0!3m2!1sen!2sch!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
