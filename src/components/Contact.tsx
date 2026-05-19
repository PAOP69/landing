"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold">Hablemos</h2>
              <p className="text-muted-foreground text-lg">
                Si te sientes listo/a para dar el primer paso, o simplemente tienes dudas sobre el proceso, estaré encantada de escucharte.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Llámanos</p>
                  <p className="text-xl font-semibold">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Escríbenos</p>
                  <p className="text-xl font-semibold">consulta@elenaramos.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Ubicación</p>
                  <p className="text-xl font-semibold">Calle Serrano 45, Madrid</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-therapeutic-gradient p-10 lg:p-14 rounded-[3rem] shadow-xl shadow-primary/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Calendar className="text-primary w-6 h-6" />
                  Solicitar Información
                </h3>
                <p className="text-sm text-muted-foreground">Te responderemos en menos de 24 horas laborables.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre</label>
                  <Input className="rounded-xl border-white/50 bg-white/50 h-12" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input className="rounded-xl border-white/50 bg-white/50 h-12" placeholder="tu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Servicio de interés</label>
                <select className="w-full h-12 px-4 rounded-xl border border-white/50 bg-white/50 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>Psicoterapia Individual</option>
                  <option>Terapia para Jóvenes</option>
                  <option>Terapia de Pareja</option>
                  <option>Otros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mensaje</label>
                <Textarea className="rounded-xl border-white/50 bg-white/50 min-h-[120px]" placeholder="¿En qué puedo ayudarte?" />
              </div>

              <Button className="w-full h-14 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}