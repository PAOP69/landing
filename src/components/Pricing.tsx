"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Video } from "lucide-react";

const rates = [
  {
    title: "Consulta Individual Presencial",
    price: "$20",
    modality: "Presencial",
    location: "Centro de Salud Padres Mercedarios",
    icon: MapPin,
    features: [
      "Sesión de 50 minutos",
      "Espacio físico seguro",
      "Evaluación clínica inicial",
      "Seguimiento personalizado"
    ]
  },
  {
    title: "Consulta Individual en Línea",
    price: "$20",
    modality: "Digital",
    location: "Plataforma segura de videollamada",
    icon: Video,
    features: [
      "Sesión de 50 minutos",
      "Comodidad desde tu hogar",
      "Misma calidad clínica",
      "Horarios flexibles"
    ]
  }
];

export function Pricing() {
  return (
    <section id="tarifas" className="py-32 bg-clinical-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-playfair font-semibold">Modalidades y Tarifas</h2>
          <p className="text-muted-foreground font-light text-lg">
            Facilitamos el acceso a la salud mental con tarifas justas y opciones adaptables a tu ritmo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {rates.map((rate, index) => (
            <Card key={index} className="border border-white/50 bg-white/60 backdrop-blur-sm shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <CardHeader className="p-10 pb-0 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <rate.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-2xl font-playfair mb-2">{rate.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 py-4">
                  <span className="text-4xl font-bold">{rate.price}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">USD</span>
                </div>
              </CardHeader>
              <CardContent className="p-10 pt-6 space-y-8">
                <div className="space-y-4">
                  {rate.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-primary/5">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-2">Lugar</p>
                  <p className="text-xs font-medium text-foreground">{rate.location}</p>
                </div>
                <Button className="w-full h-14 rounded-2xl bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90">
                  Reservar sesión
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}