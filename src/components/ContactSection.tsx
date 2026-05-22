import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Inbox, RefreshCw } from "lucide-react";
import { ContactMessage } from "../types";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<{ success: boolean; message: string } | null>(null);
  const [messagesLog, setMessagesLog] = useState<ContactMessage[]>([]);
  const [showLogPanel, setShowLogPanel] = useState(false);

  // Fetch logged messages from the backend
  const fetchMessagesLog = async () => {
    try {
      const res = await fetch("/api/contact/messages");
      if (res.ok) {
        const data = await res.json();
        setMessagesLog(data);
      }
    } catch (e) {
      console.error("No se pudieron cargar los mensajes desde el servidor.", e);
    }
  };

  useEffect(() => {
    fetchMessagesLog();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setApiResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setApiResponse({ success: true, message: result.message });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        // Reload inbox log to reflect changes immediately
        fetchMessagesLog();
      } else {
        setApiResponse({ success: false, message: result.error || "Ocurrió un error inesperado." });
      }
    } catch (err) {
      setApiResponse({
        success: false,
        message: "No se pudo conectar con el servidor Web de Antonio y Daniel.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-neutral-900 text-white relative border-t border-neutral-800">
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-900/10 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Editorial contact info layout */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase">CONTACTO &amp; ENCARGOS</span>
              <h2 
                className="text-3xl md:text-5xl font-bold tracking-tight"
              >
                Hagamos Arte Juntos
              </h2>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed text-justify">
                ¿Planeas una sesión editorial, campaña de moda o proyecto artístico con un enfoque surrealista? La dupla está disponible para encargos exclusivos y dirección de arte a nivel global.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-neutral-800 font-light text-sm text-neutral-300">
              <div className="group">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Bandeja Oficial</p>
                <a href="mailto:baez@hitster.page" className="hover:text-[#F27D26] hover:underline font-mono text-base transition-colors duration-300">
                  baez@hitster.page
                </a>
              </div>

              <div className="group">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Estudio Base</p>
                <p className="font-mono text-base text-neutral-300">Santiago / Ciudad de México</p>
              </div>

              <div className="group">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Agente Hitster Media</p>
                <p className="font-mono text-base text-neutral-300">+56 9 8452 1102</p>
              </div>
            </div>
          </div>

          {/* Fully Operational Form submission Block */}
          <div className="lg:col-span-8 p-8 md:p-10 bg-neutral-950/60 backdrop-blur-md rounded-lg border border-neutral-800">
            <h3 className="text-xl font-bold mb-6">
              Enviar mensaje a la dupla
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" id="photography-contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="input-name" className="text-xs font-mono tracking-wider text-neutral-400 uppercase block">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="input-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Alexander McQueen"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] px-4 py-3 text-sm text-white rounded-none outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="input-email" className="text-xs font-mono tracking-wider text-neutral-400 uppercase block">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="input-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] px-4 py-3 text-sm text-white rounded-none outline-none transition-all duration-300"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="input-subject" className="text-xs font-mono tracking-wider text-neutral-400 uppercase block">
                  Asunto del Proyecto
                </label>
                <input
                  type="text"
                  id="input-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ej. Sesión Editorial de Moda - Primavera 2026"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] px-4 py-3 text-sm text-white rounded-none outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="input-message" className="text-xs font-mono tracking-wider text-neutral-400 uppercase block">
                  Descripción de la Idea o Encomienda <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="input-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos sobre tu idea creativa, locación, requerimientos de color, marcas de moda asociadas..."
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] px-4 py-3 text-sm text-white rounded-none outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* API Response Messages visualizer */}
              <AnimatePresence>
                {apiResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`p-4 flex items-start gap-3 rounded ${
                      apiResponse.success
                        ? "bg-green-950/40 border border-green-800 text-green-300"
                        : "bg-red-950/40 border border-red-800 text-red-300"
                    }`}
                  >
                    {apiResponse.success ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-light leading-snug">{apiResponse.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-neutral-500 font-light">
                  * Campos requeridos. Envío procesado de forma oficial.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-[#F27D26] text-white hover:bg-[#d96716] disabled:bg-neutral-700 disabled:text-neutral-400 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-none shadow-lg active:scale-95"
                  id="btn-submit-contact"
                >
                  <span>{isSubmitting ? "CONECTANDO..." : "ENVIAR MENSAJE"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>

            {/* Operative Inbox Verification Section */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-between items-center bg-transparent">
              <div>
                <p className="text-[10px] font-mono text-neutral-500">RELAY DE CORREO OPERATIVO: BAEZ@HITSTER.PAGE</p>
                <p className="text-[11px] text-neutral-400 font-light">Verifica la bandeja de mensajes guardados en el backend.</p>
              </div>
              <button
                onClick={() => {
                  fetchMessagesLog();
                  setShowLogPanel(!showLogPanel);
                }}
                className="px-3.5 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded text-xs font-mono text-neutral-300 flex items-center gap-2 transition-all"
                id="btn-toggle-inbox-verification"
              >
                <Inbox className="w-3.5 h-3.5 text-neutral-400" />
                <span>Inbox ({messagesLog.length})</span>
              </button>
            </div>

            {/* In-app administrative email viewer showing actual persistent database logs */}
            <AnimatePresence>
              {showLogPanel && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-neutral-950 rounded-lg p-5 border border-purple-900/30 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                      <Inbox className="w-4 h-4 text-purple-400 animate-pulse" />
                      Hitster Page Mailer Relay Inbox
                    </span>
                    <button 
                      onClick={fetchMessagesLog}
                      className="p-1 hover:bg-neutral-900 rounded text-neutral-400 hover:text-white transition-colors"
                      title="Sincronizar bandeja"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                    {messagesLog.length === 0 ? (
                      <p className="text-xs font-mono text-neutral-600 italic py-4 text-center">
                        Bandeja vacía. Los mensajes enviados aparecerán aquí instantáneamente.
                      </p>
                    ) : (
                      messagesLog.map((msg) => (
                        <div key={msg.id} className="p-3 bg-neutral-900/60 rounded border border-neutral-850 text-xs font-light space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-neutral-200">{msg.name}</span>
                            <span className="text-[10px] font-mono text-neutral-500">{new Date(msg.timestamp).toLocaleString("es-ES")}</span>
                          </div>
                          <p className="text-neutral-400 text-[11px] font-mono">{msg.email}</p>
                          {msg.subject && <p className="text-[11px] font-semibold text-neutral-300">Asunto: {msg.subject}</p>}
                          <p className="text-neutral-300 bg-neutral-950 p-2 rounded mt-1.5 whitespace-pre-wrap font-sans">
                            {msg.message}
                          </p>
                          <div className="flex items-center gap-1.5 text-[9px] font-mono text-green-400 pt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                            <span>Entregado a baez@hitster.page</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
