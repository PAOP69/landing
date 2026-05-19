"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Award } from "lucide-react";

export function About() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'pablo-portrait');

  return (
    <section id="sobre-mi" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative">
            <div className="absolute top-10 -left-10 w-full h-full border border-primary/10 rounded-3xl z-0" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={profileImg?.imageUrl || "https://picsum.photos/seed/pro/600/800"} 
                alt="Psic. Pablo Ordóñez" 
                width={600} 
                height={800} 
                className="object-cover w-full h-[650px] grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                data-ai-hint="professional man"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-clinical-gradient p-10 rounded-3xl shadow-2xl z-20 max-w-[280px] border border-white/50">
              <Award className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm italic text-foreground leading-relaxed font-light">
                "Mi compromiso es brindarte un acompañamiento basado en la ética, la ciencia y la empatía profunda."
              </p>
              <div className="mt-6 border-t border-primary/10 pt-4">
                <p className="font-playfair font-bold text-primary">Psic. Pablo Ordóñez</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Psicólogo Clínico</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Perfil Profesional</span>
                <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">Cercanía humana y rigor científico.</h2>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Con una sólida formación en psicología clínica, mi enfoque se centra en comprender la complejidad del ser humano desde una perspectiva integral. En el Centro de Salud Padres Mercedarios, he consolidado un espacio de atención donde la evidencia científica se une a la calidez necesaria para un proceso terapéutico transformador.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Especialista en Psicología Clínica",
                "Enfoque Cognitivo-Conductual",
                "Atención a Adolescentes y Adultos",
                "Gestión de Crisis y Trauma"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-semibold tracking-tight uppercase text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <div className="p-8 bg-clinical-gradient rounded-3xl border border-primary/5 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <Image src={`https://picsum.photos/seed/patient${i}/48/48`} alt="Testimonio" width={48} height={48} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Confianza y Resultados</p>
                  <p className="text-xs text-muted-foreground font-light">Cientos de pacientes acompañados con éxito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}