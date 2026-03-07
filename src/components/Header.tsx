import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

/*
  ✅ Links del menú.
  Cada href debe coincidir con el id real de la sección.
*/
const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Área Jurídica", href: "#area-juridica" },
  { label: "La Dra.", href: "#la-dra" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  // ✅ Cambia estilo del header al hacer scroll
  const [scrolled, setScrolled] = useState(false);

  // ✅ Controla si el menú mobile está abierto
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
    ✅ Hace scroll suave a la sección correspondiente
    y además cierra el menú mobile.
  */
  const handleNav = (href: string) => {
    setMobileOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header-scrolled" : "glass-header"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* ============================= */}
        {/* IZQUIERDA: Logo + nombre */}
        {/* ============================= */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#inicio");
          }}
          className="flex items-center gap-3 min-w-0"
          aria-label="Ir al inicio"
        >
          {/* 
            ✅ El logo debe existir en:
            public/logo.png
          */}
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo Estudio Jurídico Salinas"
            className="h-9 w-9 object-contain shrink-0"
            loading="eager"
          />

          {/* ✅ Nombre del estudio al lado del logo */}
          <span className="hidden md:block font-serif text-base font-semibold text-white tracking-tight whitespace-nowrap">
            Estudio Jurídico <span className="text-gold">Salinas</span>
          </span>
        </a>

        {/* ============================= */}
        {/* DERECHA: navegación desktop */}
        {/* ============================= */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200"
              type="button"
            >
              {item.label}
            </button>
          ))}

          {/* ✅ Botón a WhatsApp */}
          <a
            href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs px-4 py-2 gap-2 inline-flex items-center"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </nav>

        {/* ============================= */}
        {/* Botón menú mobile */}
        {/* ============================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menú"
          type="button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ============================= */}
      {/* Menú mobile desplegable */}
      {/* ============================= */}
      {mobileOpen && (
        <div className="md:hidden glass-header-scrolled border-t border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-gold py-2"
              type="button"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/5492995115029?text=Hola%2C%20quisiera%20realizar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs px-4 py-2 gap-2 w-full inline-flex items-center justify-center"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;