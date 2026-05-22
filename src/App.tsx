/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, X as XIcon, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// Use the exact images from the reference site
const BaseUrl = "https://ferbaez.github.io/Ivan-Aguirre/";
const GALLERY_IMAGES = [
  { src: `${BaseUrl}image_opt%20(1).jpeg`, alt: "Editorial styling" },
  { src: `${BaseUrl}image_opt%20(2).jpeg`, alt: "Surreal photography" },
  { src: `${BaseUrl}image_opt%20(3).jpeg`, alt: "Conceptual art" },
  { src: `${BaseUrl}image_opt%20(4).jpeg`, alt: "Creative direction" },
  { src: `${BaseUrl}image_opt%20(5).jpeg`, alt: "Surrealist composition" },
  { src: `${BaseUrl}image_opt%20(6).jpeg`, alt: "Brand image" },
  { src: `${BaseUrl}image_opt%20(7).jpeg`, alt: "Fashion campaign" },
  { src: `${BaseUrl}image_opt.jpeg`, alt: "Photorealistic portrait" },
  { src: `${BaseUrl}ivan%20004_opt.jpeg`, alt: "Product visualization" },
  { src: `${BaseUrl}diana%20003_opt.jpeg`, alt: "Fashion portrait" },
  { src: `${BaseUrl}flesh-mafazine-2.jpg`, alt: "Visual transformation" },
  { src: `${BaseUrl}Ivan%20Aguirre%20Portafolios%2036_opt.jpeg`, alt: "Landscape composition" },
  { src: `${BaseUrl}INSTAGRAM%20%20MARIANA%20TREVIN%CC%83O3_opt.jpeg`, alt: "Conceptual art" },
  { src: `${BaseUrl}CleanShot%202026-05-18%20at%2021_opt.jpeg`, alt: "Brand image" },
  { src: `${BaseUrl}77461487238731_opt.jpeg`, alt: "Surrealist composition" },
  { src: `${BaseUrl}WhatsApp%20Image%202026-05-18%20at%2015_opt.jpeg`, alt: "Editorial fashion" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [images, setImages] = useState<{ src: string; alt: string }[]>(GALLERY_IMAGES);

  useEffect(() => {
    // Dynamic loading of user-uploaded images from backend
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setImages(
            data.images.map((imgUrl: string, idx: number) => ({
              src: imgUrl,
              alt: `Imagen de portafolio ${idx + 1}`,
            }))
          );
        }
      })
      .catch((err) => {
        console.error("Error al cargar las imágenes subidas:", err);
      });
  }, []);

  // Helper to ensure marquee has enough images to continuously loop without gaps
  const getMarqueeImages = () => {
    if (!images || images.length === 0) return [];
    let repeated = [...images];
    while (repeated.length < 12) {
      repeated = [...repeated, ...images];
    }
    return [...repeated, ...repeated];
  };

  useEffect(() => {
    document.title = "Antonio y Daniel - Fotógrafos";
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when lightbox or mobile menu is open
  useEffect(() => {
    if (lightboxIndex !== null || mobileMenuOpen || privacyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex, mobileMenuOpen, privacyModalOpen]);

  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-[#F27D26] selection:text-white">

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col z-50 relative">
            <span className="text-xl font-medium tracking-tight">Antonio y Daniel</span>
          </motion.div>

          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-white/60">
            <a href="#about" className="hover:text-[#F27D26] transition-colors">Visión</a>
            <a href="#gallery" className="hover:text-[#F27D26] transition-colors">Galería</a>
            <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contacto</a>
          </div>

          <button className="md:hidden text-white z-50 relative p-2 -mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {["#about:Visión", "#gallery:Galería", "#contact:Contacto"].map((item) => {
                const [href, label] = item.split(":");
                return (
                  <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-semibold text-white/80 hover:text-[#F27D26] transition-colors">
                    {label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <header id="about" className="relative h-[100svh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            className="flex h-full min-w-max"
          >
            {getMarqueeImages().map((img, i) => (
              <div key={i} className="h-full flex-shrink-0 border-r border-white/10 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="h-full w-auto opacity-60 grayscale-[10%] brightness-[0.85] transition-all duration-500 hover:opacity-95 hover:grayscale-0" 
                />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium tracking-tighter leading-[0.9] text-white">Antonio y Daniel</h2>
          </motion.div>
        </div>
      </header>

      {/* Selling Point Section */}
      <section className="py-24 md:py-44 px-6 bg-gradient-to-b from-black to-[#0a0a0a] border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#F27D26] font-bold">Dirección de Arte & Fashion</span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight leading-[0.9] text-balance">
              Una <span className="text-white/40 italic">dupla creativa</span> <br className="hidden md:block" /> redefiniendo la publicidad.
            </h1>
            <div className="space-y-6 text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
              <p className="text-justify">
                Como una mente maestra dividida en dos, Antonio y Daniel fusionan técnica impecable y audacia estética para transformar el fashion y la publicidad en manifiestos visuales.
              </p>
              <p className="text-justify">
                Diseñamos imágenes magnéticas que elevan el prestigio de las marcas: desde campañas de alto impacto y moda editorial, hasta una dirección de arte que dicta las nuevas vanguardias globales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-40 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end border-b border-white/10 pb-10 md:pb-16">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold">Galería Fotográfica</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-balance">
                Moda, luz y surrealismo.
              </h2>
            </div>
            <div className="space-y-5 text-white/60 font-light leading-relaxed text-justify">
              <p>
                Un portafolio selecto que refleja texturas, identidad y conceptualización artística tanto en publicidad de alto impacto como en arte editorial.
              </p>
              <p className="text-[#F27D26]/80 font-normal text-xs uppercase tracking-widest mt-4">
                Ver más detalles enviando un mensaje directo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 cursor-pointer shadow-lg"
                aria-label={`Ver imagen ${i + 1} en grande`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-[#F27D26]/75 group-hover:text-white/80 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center pt-8 md:pt-12">
            <a href="https://drive.google.com/file/d/1-iad7uMkWxg7i8CUDnT3mxnC2Qa2XeUZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-4 border border-white/20 bg-white/5 hover:bg-[#F27D26] hover:border-[#F27D26] px-10 py-5 rounded-full transition-all duration-500 overflow-hidden">
              <span className="relative z-10 text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-white">Portafolios</span>
              <ArrowRight size={18} className="relative z-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer z-10"
            >
              <XIcon size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F27D26] border border-white/15 text-white rounded-full p-3 transition-all cursor-pointer z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F27D26] border border-white/15 text-white rounded-full p-3 transition-all cursor-pointer z-10"
            >
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.25 }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-[#F27D26]/75 font-bold">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-40 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-16">
          <div className="space-y-4 md:space-y-6">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#F27D26] font-bold">Contacto</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-balance">Colaboremos.</h2>
            <p className="text-base sm:text-xl text-white/50 font-light max-w-2xl mx-auto text-justify">
              Para llevar la visión de tu campaña o editorial al siguiente nivel, escríbenos a continuación.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/baez@hitster.page"
            method="POST"
            className="flex flex-col gap-4 md:gap-6 w-full max-w-xl mx-auto text-left"
          >
            <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />
            <input type="hidden" name="_subject" value="Nuevo contacto desde el sitio web de Antonio y Daniel" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Nombre</label>
              <input type="text" name="name" id="name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white text-base focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all font-light placeholder:text-white/20" placeholder="Tu nombre" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Correo</label>
              <input type="email" name="email" id="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white text-base focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all font-light placeholder:text-white/20" placeholder="tu@correo.com" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Mensaje</label>
              <textarea name="message" id="message" required rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white text-base focus:outline-none focus:border-[#F27D26] focus:bg-white/10 transition-all resize-none font-light placeholder:text-white/20" placeholder="¿De qué trata tu proyecto?" />
            </div>

            <div className="mt-2 md:mt-4">
              <button type="submit" className="w-full bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-[#F27D26] hover:text-white transition-all shadow-xl">Enviar mensaje</button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 opacity-50 hover:opacity-100 transition-opacity duration-700">
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#F27D26]">Antonio y Daniel</span>
            <span className="text-xs text-white/60">© 2026 todos los derechos reservados Hitster Media</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold items-center">
            <button onClick={() => setPrivacyModalOpen(true)} className="hover:text-[#F27D26] transition-colors underline underline-offset-4 cursor-pointer">Aviso de Privacidad</button>
            <a href="#top" className="flex items-center gap-1.5 hover:text-[#F27D26] transition-colors">Volver arriba <ArrowUpRight size={12} /></a>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <AnimatePresence>
        {privacyModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md" onClick={() => setPrivacyModalOpen(false)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-[#111] border border-white/10 rounded-2xl p-5 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left text-white/70">
              <button onClick={() => setPrivacyModalOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 p-2 rounded-full cursor-pointer"><XIcon size={20} /></button>
              <h2 className="text-2xl font-medium text-white mb-1">Aviso de Privacidad</h2>
              <p className="text-xs text-[#F27D26] mb-6 font-mono">Última actualización: 23 de junio de 2025</p>
              
              <div className="space-y-6 text-sm text-neutral-300 font-light leading-relaxed text-justify">
                <p>
                  Tu privacidad es importante para nosotros. Este aviso explica qué datos recopilamos, para qué los usamos y cómo los protegemos cuando visitas nuestro sitio o contratas nuestros servicios.
                </p>

                <div>
                  <h4 className="font-semibold text-white mb-1">1. Responsable</h4>
                  <p>
                    Hitster Media, con domicilio en Av. Francisco I. Madero 104, Col. Céspedes, Pachuca de Soto, Hidalgo, C.P. 42090. Contacto: <a href="mailto:baez@hitster.page" className="text-[#F27D26] hover:underline">baez@hitster.page</a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">2. Datos que recopilamos</h4>
                  <p className="mb-2">
                    <strong className="text-white/90">Los que tú nos das:</strong> nombre, correo electrónico y el contenido de tus mensajes al contactarnos.
                  </p>
                  <p>
                    <strong className="text-white/90">Los que recopilamos automáticamente:</strong> dirección IP, navegador, sistema operativo y patrones de uso, a través de cookies y herramientas de análisis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">3. Para qué usamos tus datos</h4>
                  <p className="mb-2">
                    <strong className="text-white/90">Necesarios para el servicio:</strong> responder consultas, gestionar proyectos, garantizar la seguridad del sitio y cumplir obligaciones legales.
                  </p>
                  <p>
                    <strong className="text-white/90">Con tu consentimiento:</strong> análisis de uso, mejora de la plataforma y comunicaciones de marketing. Puedes oponerte escribiendo a <a href="mailto:baez@hitster.page" className="text-[#F27D26] hover:underline">baez@hitster.page</a>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">4. Compartir datos</h4>
                  <p>
                    No vendemos ni alquilamos tu información. Solo la compartimos con proveedores de servicios (hosting, analytics) bajo acuerdos de confidencialidad, o cuando la ley lo exige.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">5. Cookies</h4>
                  <p>
                    Usamos cookies para mejorar la experiencia. Puedes desactivarlas desde tu navegador, aunque algunas funciones del sitio podrían verse afectadas.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">6. Tus derechos ARCO</h4>
                  <p>
                    Puedes acceder, rectificar, cancelar u oponerte al uso de tus datos escribiendo a <a href="mailto:baez@hitster.page" className="text-[#F27D26] hover:underline">baez@hitster.page</a> con tu nombre completo, una copia de tu identificación y una descripción de tu solicitud. Respondemos en los plazos establecidos por la ley.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">7. Cambios a este aviso</h4>
                  <p>
                    Podemos actualizar este documento cuando sea necesario. Te notificaremos a través del sitio o por correo si los cambios son relevantes.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-right font-mono text-xs text-neutral-500">
                  Hitster Media
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

