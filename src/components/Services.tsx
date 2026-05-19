"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles } from "lucide-react";

const services = [
  {
    title: "Psicoterapia Individual",
    description: "Acompañamiento personalizado para adultos en procesos de ansiedad, depresión y gestión emocional.",
    icon: Brain,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Terapia para Jóvenes",
    description: "Espacio seguro para adolescentes enfocado en la autoimagen, relaciones y desafíos académicos.",
    icon: Sparkles,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Gestión del Duelo",
    description: "Apoyo profesional para transitar la pérdida y reconstruir el sentido vital con serenidad.",
    icon: Heart,
    color: "bg-secondary text-secondary-foreground"
  },
  {
    title: "Talleres y Grupos",
    description: "Encuentros grupales enfocados en mindfulness, resiliencia y habilidades sociales.",
    icon: Users,
    color: "bg-muted text-muted-foreground"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-headline font-bold">Acompañamiento Especializado</h2>
          <p className="text-muted-foreground text-lg">
            Cada proceso terapéutico es único. Mi enfoque combina la terapia cognitivo-conductual con una visión humanista profunda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-none hover:bg-therapeutic-gradient transition-colors group p-4">
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 group-hover:border-primary transition-colors cursor-pointer">
                    Saber más
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