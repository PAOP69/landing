"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-clinic');

  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-therapeutic-gradient">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Psicología Clínica y de la Salud
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-[1.1] text-foreground">
              Un espacio para <br />
              <span className="text-primary italic font-normal">volver a ti.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bienvenido/a a un entorno seguro donde la evidencia científica y la calidez humana se encuentran para acompañar tu proceso de bienestar emocional.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 h-14 bg-primary text-white font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all">
                Comenzar Proceso <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 font-semibold text-base border border-transparent hover:border-border transition-all">
                Saber más
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image 
                src={heroImg?.imageUrl || "https://picsum.photos/seed/hero/800/600"} 
                alt="Consultorio Terapéutico" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[500px]"
                data-ai-hint="therapy office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}