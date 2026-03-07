import draImg from "@/assets/dra-salinas-escritorio.png";
import { MessageCircle } from "lucide-react";

const credentials = [
  "Asesoramiento integral",
  "Estrategia legal",
  "Negociación y acuerdos",
  "Representación",
];

const LaDraSection = () => {
  return (
    <section id="la-dra" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={draImg}
              alt="Dra. Gianina Salinas"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Perfil profesional</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Soy Gianina Salinas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Abogada con enfoque estratégico y trato cercano. Especializada en asesoramiento preventivo, representación legal y gestión integral de casos. Mi prioridad es brindar claridad, contención y resultados concretos.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 mb-8">
              <div className="gold-line-vertical absolute left-0 top-0 bottom-0" />
              <p className="font-serif text-lg italic text-foreground leading-relaxed">
                "La justicia se construye con argumentos sólidos, y se defiende con convicción."
              </p>
            </blockquote>

            <a
              href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold gap-2"
            >
              <MessageCircle size={16} />
              Solicitar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaDraSection;
