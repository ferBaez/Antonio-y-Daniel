import { motion } from "motion/react";
import { BIOGRAPHY_TEXT } from "../data";
import { Camera } from "lucide-react";

export default function EditorialStory() {
  return (
    <section id="biografia" className="relative py-24 md:py-36 bg-neutral-900 text-white overflow-hidden border-t border-b border-neutral-800/50">
      {/* Abstract light spill representing their "mastering of light and color" */}
      <div className="absolute top-1/4 -left-[20%] w-[500px] h-[500px] bg-cyan-700/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-[20%] w-[500px] h-[500px] bg-red-700/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Large display titles / branding statement */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
                {BIOGRAPHY_TEXT.header}
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                {BIOGRAPHY_TEXT.storyTitle}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-neutral-300 italic text-lg border-l-2 border-[#F27D26] pl-4 py-1 text-justify"
            >
              "{BIOGRAPHY_TEXT.subtitle}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block pt-8"
            >
              {/* Subtle creative camera iris aesthetic element */}
              <div className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center relative group">
                <div className="absolute inset-2 rounded-full border border-dashed border-neutral-700 group-hover:rotate-45 transition-transform duration-1000" />
                <Camera className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Copy powerful story paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed"
            >
              {BIOGRAPHY_TEXT.paragraphs.map((para, i) => (
                <p key={i} className="hover:text-white transition-colors duration-300 text-justify">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Premium minimal metric Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-neutral-800"
            >
              {BIOGRAPHY_TEXT.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#F27D26] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
