import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactoSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente. Nos comunicaremos pronto.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Contacto</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Escribinos
          </h2>
          <div className="gold-line w-16 mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
              <textarea
                id="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button type="submit" className="btn-gold gap-2">
              <Send size={16} />
              Enviar
            </button>
          </form>

          {/* Contact cards */}
          <div className="space-y-4">
            <a
              href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-xs text-muted-foreground">299 511 5029</p>
              </div>
            </a>

            <a href="mailto:abogadasalinasg@gmail.com" className="card-premium flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">abogadasalinasg@gmail.com</p>
              </div>
            </a>

            <div className="card-premium flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Ubicación</p>
                <p className="text-xs text-muted-foreground">Neuquén, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
