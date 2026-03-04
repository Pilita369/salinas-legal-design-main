import { UserCheck, Lock, ClipboardCheck } from "lucide-react";
import fachadaImg from "@/assets/fachada-estudio.webp";

const features = [
  { icon: UserCheck, text: "Atención personalizada" },
  { icon: Lock, text: "Confidencialidad" },
  { icon: ClipboardCheck, text: "Seguimiento real del caso" },
];

const FachadaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="border border-border rounded-lg overflow-hidden shadow-sm">
            <img
              src={fachadaImg}
              alt="Fachada del estudio jurídico"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Nuestro espacio</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Un espacio profesional. Una atención cercana.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Atención con cita previa, en un entorno reservado y profesional. Priorizamos la confidencialidad y la claridad en cada etapa del proceso.
            </p>

            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <f.icon size={16} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FachadaSection;
