import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BackgroundImage } from "../types";

interface BackgroundCarouselProps {
  images: BackgroundImage[];
}

export default function BackgroundCarousel({ images }: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen bg-neutral-950 overflow-hidden flex items-center justify-center">
      {/* Background Ambience: Blurry low-opacity duplication of current image for theatrical depth */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={`blur-${currentIndex}`}
            src={images[currentIndex].url}
            alt="Ambiance Blur"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-15 filter blur-3xl scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
      </div>

      {/* The actual photoraph container showing full uncropped images in loop */}
      <div className="relative z-10 w-full h-[85vh] max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                opacity: 0,
                scale: 0.98,
                x: dir > 0 ? 50 : -50
              }),
              center: {
                opacity: 1,
                scale: 1,
                x: 0,
                zIndex: 1
              },
              exit: (dir: number) => ({
                opacity: 0,
                scale: 1.02,
                x: dir > 0 ? -50 : 50,
                zIndex: 0
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain shadow-2xl border border-neutral-900/30 select-none bg-neutral-950"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Central Hero Text: Only says "Ivan Aguirre" */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-6xl sm:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase text-shadow-lg drop-shadow-md"
          >
            antonio &amp; daniel
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.5, width: "120px" }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="h-[1px] bg-white mx-auto mt-6"
          />
        </div>
      </div>

      {/* Slide Navigation Overlay Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-16 pointer-events-none">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-3 text-neutral-400 hover:text-white bg-neutral-900/40 backdrop-blur-md rounded-full border border-neutral-800 hover:border-neutral-600 hover:scale-105 active:scale-95 transition-all outline-none"
          id="btn-carousel-prev"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dynamic Slider Counters and Progress Lines */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-neutral-400">
          <span>{(currentIndex + 1).toString().padStart(2, "0")}</span>
          <div className="w-24 md:w-36 h-[2px] bg-neutral-800 rounded-full overflow-hidden relative">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute top-0 bottom-0 left-0 bg-white"
            />
          </div>
          <span>{images.length.toString().padStart(2, "0")}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="pointer-events-auto p-3 text-neutral-400 hover:text-white bg-neutral-900/40 backdrop-blur-md rounded-full border border-neutral-800 hover:border-neutral-600 hover:scale-105 active:scale-95 transition-all outline-none"
          id="btn-carousel-next"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Floating Indicators along bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white w-5" : "bg-neutral-700 hover:bg-neutral-500"
            }`}
            id={`indicator-slide-${i}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
