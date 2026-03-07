// ✅ Importamos la imagen de la fachada
import fachadaImg from "@/assets/fachada-estudio.webp";

const UbicacionSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ============================= */}
        {/* TÍTULO DE LA SECCIÓN */}
        {/* ============================= */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Dónde estamos
          </h2>

          <p className="text-muted-foreground mt-3">
            Estudio Jurídico Salinas — Neuquén, Argentina
          </p>
        </div>

        {/* ============================= */}
        {/* IMAGEN DE LA FACHADA */}
        {/* Debajo del título */}
        {/* ============================= */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="rounded-xl overflow-hidden shadow-lg border bg-white">
            <img
              src={fachadaImg}
              alt="Fachada del Estudio Jurídico Salinas"
              className="w-full h-[260px] md:h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ============================= */}
        {/* BLOQUE DE INFORMACIÓN + MAPA */}
        {/* ============================= */}
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
          {/* ============================= */}
          {/* INFORMACIÓN DEL ESTUDIO */}
          {/* ============================= */}
          <div className="rounded-xl border bg-white shadow-lg p-8 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Estudio Jurídico Salinas
            </h3>

            <p className="text-muted-foreground mb-3">
              Neuquén, Argentina
            </p>

            <p className="text-muted-foreground mb-6">
              Atención personalizada, con compromiso, confidencialidad y excelencia profesional.
            </p>

            <div className="space-y-3 text-sm">
              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit btn-gold"
              >
                Consultar por WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:abogadasalinasg@gmail.com"
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                abogadasalinasg@gmail.com
              </a>

              {/* Teléfono */}
              <a
                href="tel:+5492995115029"
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                299 511 5029
              </a>
            </div>
          </div>

          {/* ============================= */}
          {/* MAPA */}
          {/* ============================= */}
          <div className="rounded-xl overflow-hidden shadow-lg border bg-white">
            <iframe
              src="https://www.google.com/maps?q=Neuquen%20Argentina&output=embed"
              width="100%"
              height="100%"
              className="w-full h-[280px] md:h-full min-h-[280px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa ubicación estudio jurídico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicacionSection;