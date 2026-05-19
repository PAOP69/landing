
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    name: "Cálculo Avanzado II",
    instructor: "Dra. Elena Ramos",
    progress: 75,
    status: "En progreso",
    image: "https://picsum.photos/seed/math-course/400/200",
  },
  {
    name: "Biología Molecular",
    instructor: "Dr. Carlos Mendez",
    progress: 42,
    status: "En progreso",
    image: "https://picsum.photos/seed/bio-course/400/200",
  },
  {
    name: "Historia del Arte",
    instructor: "Prof. Sofia Vales",
    progress: 90,
    status: "Casi listo",
    image: "https://picsum.photos/seed/art-course/400/200",
  },
];

export function CourseList() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline uppercase tracking-tight">Cursos Activos</h2>
        <Button variant="ghost" className="text-brand-dark font-bold">Ver todos</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md card-float">
            <div 
              className="h-32 w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${course.image})` }}
            >
              <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-headline font-bold uppercase text-lg tracking-widest shadow-sm">
                  {course.name.split(' ')[0]}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-carbon-gray">{course.name}</h3>
                  <p className="text-sm text-text-gray">{course.instructor}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-brand-dark">{course.progress}% completado</span>
                  <Badge variant="secondary" className="bg-brand-light text-brand-dark font-bold text-[10px] uppercase">
                    {course.status}
                  </Badge>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <Button className="w-full mt-6 bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold rounded-[4px] py-6 uppercase tracking-wider text-xs">
                Acceder a Clase
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
