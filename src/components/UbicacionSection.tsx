import { MapPin, MessageCircle, Mail } from "lucide-react";

const UbicacionSection = () => {
  return (
    <section id="ubicacion" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Ubicación</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Dónde estamos
          </h2>
          <div className="gold-line w-16 mb-6" />
          <p className="text-muted-foreground">Neuquén, Argentina</p>
        </div>

        {/* Map placeholder */}
        <div className="rounded-lg overflow-hidden border border-border shadow-sm mb-8 aspect-[16/7]">
          <iframe
            title="Ubicación del Estudio Jurídico Salinas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49938.84064628!2d-68.07!3d-38.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33b3b3b3b3b%3A0x1234567890!2sNeuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1700000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://maps.google.com/?q=Neuquen+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold gap-2"
          >
            <MapPin size={16} />
            Abrir en Google Maps
          </a>
          <a
            href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold gap-2"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </a>
          <a
            href="mailto:abogadasalinasg@gmail.com"
            className="btn-gold gap-2"
          >
            <Mail size={16} />
            Enviar email
          </a>
        </div>
      </div>
    </section>
  );
};

export default UbicacionSection;
