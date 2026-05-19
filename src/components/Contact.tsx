"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Contacto Directo</span>
              <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">Inicia tu proceso hoy.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
                Si tienes dudas sobre el tratamiento o deseas agendar tu primera sesión, estamos aquí para escucharte.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Teléfonos de contacto</p>
                  <p className="text-xl font-medium tracking-tight">0984598201 / 0984385485</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Ubicación</p>
                  <p className="text-xl font-medium tracking-tight">Centro de Salud Padres Mercedarios</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Horarios de atención</p>
                  <p className="text-xl font-medium tracking-tight">Lunes a Sábado | 08:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-clinical-gradient p-12 lg:p-16 rounded-[3rem] border border-white/50 shadow-2xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MessageSquare className="w-32 h-32" />
            </div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <h3 className="text-2xl font-playfair font-semibold">Solicitar Información</h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Respuesta en menos de 12 horas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Tu Nombre</label>
                  <Input className="rounded-2xl border-white bg-white/50 h-14 px-6 focus:ring-accent/20" placeholder="Nombre completo" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email / WhatsApp</label>
                  <Input className="rounded-2xl border-white bg-white/50 h-14 px-6 focus:ring-accent/20" placeholder="Contacto" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Servicio de Interés</label>
                <select className="w-full h-14 px-6 rounded-2xl border border-white bg-white/50 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none">
                  <option>Asesoramiento Psicológico</option>
                  <option>Terapia para Depresión/Ansiedad</option>
                  <option>Contención Emocional</option>
                  <option>Consulta Online</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Mensaje breve</label>
                <Textarea className="rounded-2xl border-white bg-white/50 min-h-[140px] px-6 py-4 focus:ring-accent/20" placeholder="¿Cómo puedo ayudarte?" />
              </div>

              <Button className="w-full h-16 rounded-2xl bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}