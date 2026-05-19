"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary/10 p-2 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-playfair font-bold text-lg leading-none tracking-tight">
              Psicología Clínica
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Psic. Pablo Ordóñez
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicios" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Servicios</Link>
          <Link href="#tarifas" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Tarifas</Link>
          <Link href="#sobre-mi" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Perfil</Link>
          <Link href="#contacto" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contacto</Link>
        </nav>

        <Button className="rounded-full px-6 text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
          Agendar Cita
        </Button>
      </div>
    </header>
  );
}