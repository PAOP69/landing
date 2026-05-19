"use client";

import { Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="font-headline font-bold text-xl text-white">Elena Ramos</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Psicoterapia basada en la evidencia y el respeto humano. Acompañando procesos de cambio y bienestar desde 2011.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Consulta</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Psicoterapia Individual</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Terapia Online</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Talleres</Link></li>
              <li><Link href="#contacto" className="hover:text-primary transition-colors">Tarifas y Seguros</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Recursos</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Blog de Bienestar</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Guías Gratuitas</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Ubicación</h4>
            <p className="text-sm leading-relaxed text-white/60">
              Calle Serrano 45, Planta 2<br />
              28001 Madrid, España<br /><br />
              Atención presencial y videollamada.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-tighter text-white/40 font-bold">
          <p>© 2024 Dra. Elena Ramos. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}