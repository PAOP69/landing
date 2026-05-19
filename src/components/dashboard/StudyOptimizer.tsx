
"use client";

import { useState } from "react";
import { suggestOptimizedStudySchedule, type SuggestOptimizedStudyScheduleOutput } from "@/ai/flows/suggest-optimized-study-schedule";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Calendar, CheckCircle, Info } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for the AI input
const MOCK_STUDY_HABITS = [
  { date: "2023-11-20", durationMinutes: 120, subject: "Cálculo", effectivenessRating: 4 },
  { date: "2023-11-21", durationMinutes: 90, subject: "Biología", effectivenessRating: 3 },
  { date: "2023-11-22", durationMinutes: 150, subject: "Cálculo", effectivenessRating: 5 },
];

const MOCK_COURSE_COMPLETION = [
  { courseName: "Cálculo Avanzado II", completionPercentage: 75 },
  { courseName: "Biología Molecular", completionPercentage: 42 },
];

const MOCK_DEADLINES = [
  { taskName: "Examen Parcial Cálculo", dueDate: "2023-12-05", estimatedEffortHours: 10 },
  { taskName: "Ensayo Biología", dueDate: "2023-11-30", estimatedEffortHours: 4 },
];

export function StudyOptimizer() {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<SuggestOptimizedStudyScheduleOutput | null>(null);

  const handleOptimize = async () => {
    setLoading(true);
    try {
      const result = await suggestOptimizedStudySchedule({
        studyHabits: MOCK_STUDY_HABITS,
        courseCompletionRates: MOCK_COURSE_COMPLETION,
        upcomingDeadlines: MOCK_DEADLINES,
        preferences: {
          preferredStudyTimes: ["Evening", "Late Night"],
          studyEnvironment: "Quiet room with background music",
        },
      });
      setSchedule(result);
    } catch (error) {
      console.error("Error optimizing schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-lg bg-brand-dark text-white overflow-hidden mb-8">
      <div className="bg-brand-orange h-2 w-full" />
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-brand-orange" />
          <CardTitle className="text-xl font-headline uppercase tracking-wider">Optimizador IA de Estudio</CardTitle>
        </div>
        <CardDescription className="text-white/70">
          Analizamos tus hábitos y fechas límite para crear el plan perfecto de estudio.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!schedule && !loading && (
          <div className="flex flex-col items-center py-10 text-center">
            <Calendar className="w-16 h-16 text-white/20 mb-4" />
            <p className="text-white/80 max-w-md mb-6">
              ¿Listo para mejorar tu productividad? Genera un horario optimizado basado en tus entregas pendientes.
            </p>
            <Button 
              onClick={handleOptimize} 
              className="bg-brand-orange hover:bg-brand-orange/90 text-carbon-gray font-bold px-8 py-6 rounded-[4px] uppercase"
            >
              Generar Horario Maestro
            </Button>
          </div>
        )}

        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-20 w-full bg-white/10" />
            <Skeleton className="h-20 w-full bg-white/10" />
            <Skeleton className="h-20 w-full bg-white/10" />
          </div>
        )}

        {schedule && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {schedule.optimizedSchedule.map((block, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-brand-orange uppercase">{block.date}</span>
                    <span className="text-xs font-medium text-white/60">{block.startTime} - {block.endTime}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{block.subject}</h4>
                  <p className="text-xs text-white/70 italic flex gap-1 items-start">
                    <Info className="w-3 h-3 shrink-0 mt-0.5" />
                    {block.justification}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-brand-cyan/20 rounded-xl border border-brand-cyan/30">
              <h4 className="font-headline font-bold text-sm uppercase mb-4 text-brand-cyan">Recomendaciones Generales</h4>
              <ul className="space-y-3">
                {schedule.generalRecommendations.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant="outline" 
              onClick={() => setSchedule(null)}
              className="mt-6 border-white/20 text-white hover:bg-white/10"
            >
              Nuevo Análisis
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
