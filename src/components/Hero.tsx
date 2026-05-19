
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-pablo');

  return (
    <section className="relative pt-48 pb-24 overflow-hidden bg-clinical-gradient">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 px-0 text-primary">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Salud Mental y Bienestar</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-semibold leading-[1.1] text-foreground">
                Tu bienestar emocional <br />
                <span className="italic font-normal text-accent">es nuestra prioridad.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                Un espacio profesional y cálido dirigido por el <span className="font-semibold text-foreground">Psic. Pablo Ordóñez</span>, dedicado al acompañamiento clínico integral en el Centro de Salud Padres Mercedarios.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Agendar cita <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-xs font-bold uppercase tracking-widest border-primary/20 hover:bg-white transition-all">
                Servicios
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              <Image 
                src={heroImg?.imageUrl || "https://picsum.photos/seed/psychology-clinic-main/800/600"} 
                alt="Psicología Clínica - Imagen página de inicio" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[550px] grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="clinical psychology"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
