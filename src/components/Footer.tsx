import { Facebook, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-dark py-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* ============================= */}
        {/* Bloque principal del footer */}
        {/* ============================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          
          {/* Nombre del estudio */}
          <div>
            <h3
              className="font-serif text-xl font-semibold mb-2"
              style={{ color: "white" }}
            >
              Estudio Jurídico <span className="text-gold">Salinas</span>
            </h3>
          </div>

          {/* Información de contacto */}
          <div className="space-y-2 text-sm">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100065512719021"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Facebook size={16} />
              Estudio Jurídico Salinas
            </a>

            {/* Teléfono */}
            <a
              href="tel:+5492995115029"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone size={16} />
              299 511 5029
            </a>

            {/* Email */}
            <a
              href="mailto:abogadasalinasg@gmail.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail size={16} />
              abogadasalinasg@gmail.com
            </a>

          </div>
        </div>

        {/* Línea dorada separadora */}
        <div className="gold-line w-full opacity-30 mb-6" />

        {/* Copyright */}
        <p className="text-xs opacity-60 text-center mb-2">
          © 2026 Estudio Jurídico Salinas — Todos los derechos reservados.
        </p>

        {/* Desarrollo del sitio */}
        <p className="text-xs opacity-50 text-center">
          Desarrollado por <span className="text-gold">Digitanea</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
