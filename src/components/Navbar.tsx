import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Visión", href: "#biografia" },
    { label: "Galería", href: "#trabajos" },
    { label: "Contacto", href: "#contacto" }
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-neutral-950/85 backdrop-blur-md py-4 border-b border-neutral-900" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRANDING LOGO */}
        <a href="#" className="flex items-center gap-3.5 group select-none">
          <div className="relative w-8 h-8 rounded-full border border-neutral-400 group-hover:border-white transition-all flex items-center justify-center bg-transparent">
            {/* Camera logo style */}
            <Camera className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" />
          </div>
          <span 
            className="text-white text-base md:text-lg font-bold tracking-[0.25em] uppercase transition-colors group-hover:text-neutral-300 font-sans"
          >
            A&amp;D
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase font-semibold">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-neutral-300 hover:text-[#F27D26] transition-colors relative group py-2"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F27D26] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-[#F27D26] text-white font-bold tracking-widest text-[10px] hover:bg-[#d96716] transition-all duration-350 rounded-none shadow-md"
          >
            CONTRATAR DUPLA
          </a>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-1"
          aria-label="Abrir menú"
          id="btn-mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-900 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-sm font-mono tracking-widest uppercase">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-300 hover:text-[#F27D26] py-2 border-b border-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#F27D26] text-white font-bold tracking-widest text-xs hover:bg-[#d96716] transition-colors"
              >
                CONTRATAR DUPLA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
