"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Wind, MessageCircle, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Asesoramiento Psicológico",
    description: "Orientación profesional para la toma de decisiones y resolución de conflictos cotidianos.",
    icon: MessageCircle,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Depresión",
    description: "Tratamiento clínico especializado para recuperar el sentido vital y la estabilidad emocional.",
    icon: Heart,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Ansiedad",
    description: "Técnicas basadas en evidencia para la gestión del miedo, la preocupación y los ataques de pánico.",
    icon: Brain,
    color: "bg-secondary text-secondary-foreground"
  },
  {
    title: "Estrés",
    description: "Estrategias de regulación emocional para manejar las demandas del entorno laboral y personal.",
    icon: Wind,
    color: "bg-muted text-muted-foreground"
  },
  {
    title: "Contención emocional",
    description: "Espacio de apoyo inmediato y seguro para momentos de crisis o desbordamiento afectivo.",
    icon: ShieldCheck,
    color: "bg-primary/5 text-primary"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">Enfoque Clínico Profesional</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Te acompaño con herramientas terapéuticas adaptadas a cada etapa de tu proceso, manteniendo un compromiso profesional y humano con tu bienestar emocional y salud mental.
            </p>
          </div>
          <div className="pb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40">Especialidades</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-none bg-clinical-gradient/50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-10 space-y-6">
                <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center transition-transform group-hover:rotate-6 duration-500`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-playfair font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors cursor-pointer">
                    Consultar servicio
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
