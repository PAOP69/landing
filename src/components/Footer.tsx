"use client";

import { Sparkles, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1c1e] text-white/70 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-playfair font-bold text-xl text-white">Psicología Clínica</span>
            </div>
            <p className="text-sm font-light leading-relaxed">
              Servicios profesionales orientados al bienestar y la salud mental integral. Centro de Salud Padres Mercedarios.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <MessageCircle className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Consulta</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Sesiones Presenciales</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Terapia en Línea</Link></li>
              <li><Link href="#tarifas" className="hover:text-primary transition-colors">Modalidades y Precios</Link></li>
              <li><Link href="#sobre-mi" className="hover:text-primary transition-colors">Perfil Profesional</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Legal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Aviso de Confidencialidad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Términos del Servicio</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Ubicación</h4>
            <p className="text-sm font-light leading-relaxed">
              C. S. Padres Mercedarios<br />
              Atención bajo previa cita.<br /><br />
              <span className="font-bold text-white">0984598201 / 0984385485</span>
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
          <p>© 2024 Psic. Pablo Ordóñez. Todos los derechos reservados.</p>
          <div className="flex gap-10">
            <span>Ética Profesional</span>
            <span>Rigor Clínico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}