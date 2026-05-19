
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, Timer, FileText } from "lucide-react";

const tasks = [
  { id: "1", label: "Enviar reporte de Laboratorio (Bio)", dueDate: "Hoy, 18:00", urgent: true },
  { id: "2", label: "Leer capítulos 4 y 5 de Historia", dueDate: "Mañana", urgent: false },
  { id: "3", label: "Preparar presentación de Física", dueDate: "25 Nov", urgent: false },
  { id: "4", label: "Revisar notas de Cálculo", dueDate: "Próx. semana", urgent: false },
];

const achievements = [
  { title: "Excelencia en Matemáticas", date: "Hace 2 días", icon: Star, color: "text-brand-orange" },
  { title: "Racha de 7 días de estudio", date: "Ayer", icon: Timer, color: "text-brand-cyan" },
  { title: "Ensayo publicado en Blog", date: "Hace 1 semana", icon: FileText, color: "text-brand-dark" },
];

export function TaskMilestoneRegistry() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      <Card className="border-none shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-headline uppercase">Tareas Pendientes</CardTitle>
          <Badge className="bg-brand-dark text-white rounded-full px-3">4</Badge>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <Checkbox id={task.id} className="mt-1" />
                <div className="flex-1 space-y-1">
                  <label htmlFor={task.id} className="text-sm font-semibold leading-none text-carbon-gray">
                    {task.label}
                  </label>
                  <p className="text-xs text-text-gray flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    {task.dueDate}
                    {task.urgent && <span className="ml-2 text-red-500 font-bold uppercase text-[9px]">Urgente</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-headline uppercase">Logros Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`p-3 bg-slate-100 rounded-full ${achievement.color}`}>
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-carbon-gray">{achievement.title}</h4>
                  <p className="text-xs text-text-gray uppercase tracking-tighter">{achievement.date}</p>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
