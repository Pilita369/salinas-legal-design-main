import { ArrowDown, MessageCircle } from "lucide-react";
import heroImg from "@/assets/estatuajusticia.webp";

const HeroSection = () => {
  return (
    // Sección principal del hero
    // min-h-screen asegura que ocupe toda la altura de la pantalla
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      
      {/* ============================= */}
      {/* Imagen de fondo (Hero image) */}
      {/* ============================= */}
      {/* Se posiciona absoluta para ocupar toda la sección */}
      <img
        src={heroImg}
        alt="Estatua de la justicia"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* ===================================== */}
      {/* Capa oscura para mejorar lectura texto */}
      {/* ===================================== */}
      {/* Esto baja el brillo de la imagen para que el texto blanco se lea mejor */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ================================================= */}
      {/* Difuminado inferior suave hacia el fondo blanco */}
      {/* ================================================= */}
      {/* Este degradado evita el corte brusco entre la imagen
          y la siguiente sección de la página */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/15 to-white pointer-events-none"></div>

      {/* ================================= */}
      {/* Contenido principal del hero */}
      {/* ================================= */}
      {/* Se posiciona centrado horizontalmente y un poco hacia abajo */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center z-10 px-6">
        
        {/* Título principal */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
          Estudio Jurídico <span className="text-gold">Salinas</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl mx-auto">
          Compromiso, confidencialidad y excelencia profesional en cada caso.
        </p>

        {/* ================= */}
        {/* Botones de acción */}
        {/* ================= */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          
          {/* Botón servicios */}
          <a href="#area-juridica" className="btn-gold">
            Ver servicios
          </a>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </a>

        </div>
      </div>

      {/* ================================= */}
      {/* Indicador visual de scroll */}
      {/* ================================= */}
      {/* Flecha animada que invita a bajar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown size={20} className="text-white/60" />
      </div>

    </section>
  );
};

export default HeroSection;