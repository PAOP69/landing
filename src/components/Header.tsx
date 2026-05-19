"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            Elena <span className="text-primary font-normal">Ramos</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">Servicios</Link>
          <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors">Sobre Mí</Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">Contacto</Link>
        </nav>

        <Button className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90">
          Agendar Cita
        </Button>
      </div>
    </header>
  );
}