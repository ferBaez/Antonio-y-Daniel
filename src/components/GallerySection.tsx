import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Sparkles, Expand } from "lucide-react";
import { Photo } from "../types";
import { GALLERY_PHOTOS, EXTRA_GALLERY_PHOTOS } from "../data";

export default function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Always show all 20 gallery photos as the full complete portfolio
  const filteredPhotos: Photo[] = [...GALLERY_PHOTOS, ...EXTRA_GALLERY_PHOTOS];

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="trabajos" className="py-24 bg-neutral-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 gap-4 border-b border-neutral-900 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#F27D26] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galería de Obras</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase text-justify"
            >
              Moda, luz y surrealismo.
            </h2>
          </div>
          <p className="max-w-3xl text-neutral-400 font-light text-base md:text-lg leading-relaxed text-justify">
            Un portafolio selecto que refleja texturas, identidad y conceptualización artística tanto en publicidad de alto impacto como en arte editorial.
          </p>
        </div>

        {/* CSS Grid Layout identical to the Reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-square cursor-pointer overflow-hidden bg-neutral-900 border border-white/5 shadow-lg flex flex-col"
                onClick={() => setActivePhotoIndex(index)}
              >
                {/* Visual Image Tag */}
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest text-neutral-300 px-2.5 py-1 rounded">
                  {photo.category}
                </div>

                {/* Main Image */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Dark Hover Reveal Canvas */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-6 z-20">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-3">
                    <p className="text-white text-lg font-bold">
                      {photo.title}
                    </p>
                    <p className="text-xs text-neutral-400 line-clamp-2 text-justify">
                      {photo.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#F27D26] font-mono pt-1">
                      <Expand className="w-3.5 h-3.5" />
                      <span>Ver Relato Completo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox / Narrative Modal Overlay */}
      <AnimatePresence>
        {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-xl flex flex-col justify-between"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Top Toolbar controls */}
            <div className="p-4 md:p-6 flex items-center justify-between border-b border-neutral-900 z-10 bg-neutral-950">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-neutral-500">OBRA</span>
                <span className="text-sm font-light text-neutral-300">
                  {activePhotoIndex + 1} de {filteredPhotos.length}
                </span>
              </div>
              <button
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full transition-all"
                onClick={() => setActivePhotoIndex(null)}
                id="lightbox-close-btn"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Interactive Stage with sliding navigation */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 md:px-16 py-8 overflow-y-auto">
              
              {/* Prev Button Trigger */}
              <div className="hidden lg:col-span-1 lg:flex justify-end">
                <button
                  onClick={handlePrevPhoto}
                  className="p-4 text-neutral-400 hover:text-white bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all outline-none"
                  aria-label="Obra anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Central Box for Rendered Image */}
              <div className="lg:col-span-6 w-full h-[50vh] md:h-[65vh] flex items-center justify-center">
                <motion.img
                  key={filteredPhotos[activePhotoIndex].id}
                  src={filteredPhotos[activePhotoIndex].url}
                  alt={filteredPhotos[activePhotoIndex].title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-full max-h-full object-contain shadow-2xl border border-neutral-900 rounded-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Next Button Trigger */}
              <div className="hidden lg:col-span-1 lg:flex justify-start">
                <button
                  onClick={handleNextPhoto}
                  className="p-4 text-neutral-400 hover:text-white bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all outline-none"
                  aria-label="Obra siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Narrative Panel highlighting their storytelling through light and color */}
              <div 
                className="lg:col-span-4 space-y-6 text-left p-6 md:p-8 bg-neutral-900/40 border border-neutral-800/40 rounded-lg max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded uppercase">
                      {filteredPhotos[activePhotoIndex].category}
                    </span>
                  </div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold tracking-tight text-white"
                  >
                    {filteredPhotos[activePhotoIndex].title}
                  </h3>
                </div>

                <div className="space-y-2 border-t border-b border-neutral-800/60 py-4">
                  <p className="text-xs font-mono tracking-wider text-neutral-500 uppercase">LA HISTORIA DETRÁS DEL ENCUADRE</p>
                  <p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed text-justify">
                    {filteredPhotos[activePhotoIndex].story}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-mono tracking-wider text-neutral-500 uppercase">TÉCNICA Y COLOR</p>
                  <div className="flex flex-wrap gap-1.5">
                    {filteredPhotos[activePhotoIndex].tags.map((t, idx) => (
                      <span key={idx} className="text-xs bg-neutral-900 text-neutral-400 px-2.5 py-1 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile buttons block */}
                <div className="flex justify-between items-center pt-4 lg:hidden">
                  <button
                    onClick={handlePrevPhoto}
                    className="px-4 py-2 text-xs font-mono bg-neutral-800 border border-neutral-700 text-white rounded"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="px-4 py-2 text-xs font-mono bg-neutral-800 border border-neutral-700 text-white rounded"
                  >
                    Siguiente
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom mini preview indicators */}
            <div className="p-4 bg-neutral-950 text-center text-xs font-mono text-neutral-600 uppercase tracking-widest border-t border-neutral-900 select-none">
              Antonio y Daniel — Fotografía Profesional de Moda y Dirección de Arte
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
