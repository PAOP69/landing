"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'professional-portrait');

  return (
    <section id="sobre-mi" className="py-24 bg-therapeutic-gradient overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[2rem] z-0" />
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src={profileImg?.imageUrl || "https://picsum.photos/seed/pro/600/800"} 
                alt="Dra. Elena Ramos" 
                width={600} 
                height={800} 
                className="object-cover w-full h-[600px]"
                data-ai-hint="professional woman"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px] animate-bounce-slow">
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                "Mi misión es ayudarte a redescubrir tus fortalezas en un entorno de respeto absoluto."
              </p>
              <p className="mt-4 font-bold text-primary">— Elena Ramos</p>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold">Dra. Elena Ramos</h2>
              <p className="text-primary font-semibold text-lg">Psicóloga Clínica Colegiada nº 28432</p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Con más de 12 años de experiencia clínica, me he dedicado a investigar y aplicar las técnicas más eficaces para el tratamiento del estrés postraumático y los trastornos de ansiedad. Mi enfoque no solo busca aliviar síntomas, sino fortalecer la resiliencia personal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Doctorado en Psicología Clínica (UCM)",
                "Especialista en EMDR y Trauma",
                "Máster en Terapia Cognitivo-Humanista",
                "Formación avanzada en Mindfulness"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image src={`https://picsum.photos/seed/user${i}/40/40`} alt="Testimonio" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold">+500 pacientes acompañados</p>
                  <p className="text-xs text-muted-foreground">Historias de superación y crecimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}