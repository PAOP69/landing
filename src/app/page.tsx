
import { MetricsHeader } from "@/components/dashboard/MetricsHeader";
import { CourseList } from "@/components/dashboard/CourseList";
import { PerformanceCharts } from "@/components/dashboard/PerformanceCharts";
import { StudyOptimizer } from "@/components/dashboard/StudyOptimizer";
import { TaskMilestoneRegistry } from "@/components/dashboard/TaskMilestoneRegistry";
import { CommandBar } from "@/components/dashboard/CommandBar";
import { Search, Bell, User, LayoutDashboard, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Background elements */}
      <div className="asymmetric-hero-bg opacity-10" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full bg-brand-dark text-white border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-brand-cyan p-2 rounded-lg">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-headline font-bold uppercase tracking-tight">PulseDash <span className="text-brand-orange">Edu</span></h1>
              <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest leading-none">Plataforma Académica</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center max-w-md w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <Input 
                className="bg-white/10 border-none pl-10 h-10 text-sm focus-visible:ring-brand-cyan placeholder:text-white/40" 
                placeholder="Buscar cursos, tareas o documentos..." 
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full" />
            </Button>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/5">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-tight">Juan Pérez</p>
                <p className="text-[10px] text-brand-light uppercase font-bold tracking-tighter">Ingeniería</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-carbon-gray font-bold">
                JP
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Stripe */}
      <div className="w-full bg-brand-light py-10 px-4 mb-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-brand-dark text-white uppercase font-bold text-xs rounded-full px-4 py-1">Semestre 2023-II</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-carbon-gray leading-tight">
                HOLA JUAN, <br /> TU PROGRESO ESTÁ EN <span className="text-brand-cyan">PUNTO MÁXIMO</span>
              </h2>
              <p className="text-text-gray text-lg max-w-lg">
                Has completado el 75% de tus objetivos semanales. Sigue así para mantener tu beca de excelencia.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-carbon-gray font-bold px-8 h-12 rounded-[4px] uppercase tracking-wider">Continuar Última Clase</Button>
                <Button variant="outline" className="border-brand-dark text-brand-dark font-bold px-8 h-12 rounded-[4px] uppercase tracking-wider bg-transparent">Ver Mi Plan de Carrera</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-cyan rounded-lg opacity-20 -z-10 translate-x-4 translate-y-4" />
              <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-200 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/juan-study/600/600" 
                  alt="Estudiante" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Dashboard */}
      <main className="container mx-auto px-4 pb-32">
        <MetricsHeader />
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-2/3">
            <CourseList />
          </div>
          <div className="lg:w-1/3">
            <StudyOptimizer />
          </div>
        </div>

        <PerformanceCharts />
        
        <TaskMilestoneRegistry />
      </main>

      {/* Quick Action Navigation */}
      <CommandBar />

      {/* Footer / Legal */}
      <footer className="bg-slate-900 text-white/40 py-10 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/5 p-2 rounded">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <p className="text-sm font-headline font-bold uppercase tracking-widest">PulseDash <span className="text-brand-orange">Edu</span> v1.0</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-tighter">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Ayuda</a>
            <a href="#" className="hover:text-white transition-colors text-brand-orange">Cerrar Sesión</a>
          </div>
          <p className="text-[10px] text-center md:text-right">
            © 2023 PulseDash Educational Systems. <br />Diseñado para el alto rendimiento académico.
          </p>
        </div>
      </footer>
    </div>
  );
}
