
"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, Clock, Target } from "lucide-react";

const metrics = [
  {
    label: "GPA ACUMULADO",
    value: "3.8",
    icon: GraduationCap,
    bgColor: "bg-brand-dark",
    textColor: "text-white",
  },
  {
    label: "CURSOS COMPLETADOS",
    value: "12/15",
    icon: Trophy,
    bgColor: "bg-brand-cyan",
    textColor: "text-white",
  },
  {
    label: "HORAS DE ESTUDIO",
    value: "124h",
    icon: Clock,
    bgColor: "bg-brand-orange",
    textColor: "text-carbon-gray",
  },
  {
    label: "META MENSUAL",
    value: "85%",
    icon: Target,
    bgColor: "bg-brand-light",
    textColor: "text-carbon-gray",
  },
];

export function MetricsHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className={`${metric.bgColor} p-6 border-none card-float flex flex-col items-center text-center justify-center space-y-2`}
        >
          <div className="p-3 bg-white/20 rounded-full mb-2">
            <metric.icon className={`w-6 h-6 ${metric.textColor}`} />
          </div>
          <p className={`text-xs font-headline font-bold tracking-widest ${metric.textColor} opacity-90`}>
            {metric.label}
          </p>
          <h3 className={`text-4xl font-headline font-bold ${metric.textColor}`}>
            {metric.value}
          </h3>
        </Card>
      ))}
    </div>
  );
}
