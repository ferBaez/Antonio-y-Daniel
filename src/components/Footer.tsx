import { Camera, Mail, Shield, RefreshCw } from "lucide-react";

export default function Footer() {
  const currentYear = 2026; // Mandated 2026

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 py-16 font-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Narrative alignment */}
          <div className="flex items-center gap-3 group select-none">
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center">
              <Camera className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            </div>
            <div className="text-left">
              <span 
                className="text-white text-sm font-bold tracking-[0.2em] uppercase block font-sans"
              >
                Antonio &amp; Daniel
              </span>
              <span className="text-[10px] font-mono text-neutral-600 block">FASHION &amp; LIGHT CREATIVE DUO</span>
            </div>
          </div>

          {/* Quick legal/technical links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-500">
            <span className="hover:text-neutral-300 flex items-center gap-1.5 cursor-pointer">
              <Shield className="w-3.5 h-3.5" />
              <span>Privacidad</span>
            </span>
            <span className="text-neutral-800">•</span>
            <span className="hover:text-neutral-300 flex items-center gap-1.5 cursor-pointer">
              <Mail className="w-3.5 h-3.5" />
              <span>Agencia</span>
            </span>
            <span className="text-neutral-800">•</span>
            <span className="hover:text-neutral-300 flex items-center gap-1.5 cursor-pointer">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Secure Relay API</span>
            </span>
          </div>

        </div>

        {/* Mandatory copyright bottom panel */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-neutral-600 text-xs font-mono tracking-widest text-[11px] sm:text-xs">
            © {currentYear} todos los derechos reservados para Hitster media
          </p>
          
          <div className="text-[10px] font-mono text-neutral-750 text-neutral-600">
            Design inspired by Ivan Aguirre Portfolio Concept
          </div>
        </div>
      </div>
    </footer>
  );
}
