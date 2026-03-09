import { Scale, Shield, Handshake, Target, FileText, Search } from "lucide-react";
import trabajandoImg from "@/assets/trabajando.png";

const services = [
  {
    icon: Scale,
    title: "Asesoramiento legal integral",
    desc: "Análisis completo de cada situación para brindar la mejor estrategia.",
  },
  {
    icon: Shield,
    title: "Defensa y representación",
    desc: "Representación sólida y comprometida en todas las instancias.",
  },
  {
    icon: Handshake,
    title: "Negociación y acuerdos",
    desc: "Resolución eficaz de conflictos priorizando los intereses del cliente.",
  },
  {
    icon: Target,
    title: "Estrategia jurídica",
    desc: "Planificación legal orientada a resultados concretos.",
  },
  {
    icon: FileText,
    title: "Contratos",
    desc: "Redacción, revisión y asesoramiento en materia contractual.",
  },
  {
    icon: Search,
    title: "Consultas preventivas",
    desc: "Anticipación de riesgos legales para proteger sus derechos.",
  },
];

const AreaJuridicaSection = () => {
  return (
    <section id="area-juridica" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">
            Servicios
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Qué hacemos
          </h2>

          <div className="gold-line w-16 mb-6" />

          <p className="text-muted-foreground leading-relaxed">
            Soluciones legales claras, estratégicas y personalizadas.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-stretch">

          {/* Servicios */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-premium">
                <s.icon
                  size={28}
                  className="text-gold mb-4"
                  strokeWidth={1.5}
                />

                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Imagen */}
          <div className="flex">
            <div className="w-full h-full border border-border rounded-xl overflow-hidden shadow-lg">

              <img
                src={trabajandoImg}
                alt="Trabajo legal profesional"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AreaJuridicaSection;