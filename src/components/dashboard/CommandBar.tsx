
"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Upload, ClipboardCheck, GraduationCap, ChevronUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function CommandBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-brand-dark p-2 rounded-full shadow-2xl border border-white/10 flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" className="bg-brand-cyan hover:bg-brand-cyan/80 rounded-full h-12 w-12 text-white">
                <BookOpen className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-carbon-gray text-white border-none font-bold">Mis Clases</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" className="bg-brand-orange hover:bg-brand-orange/80 rounded-full h-12 w-12 text-carbon-gray">
                <Upload className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-carbon-gray text-white border-none font-bold">Entregar Tarea</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:bg-white/10">
                <ClipboardCheck className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-carbon-gray text-white border-none font-bold">Calificaciones</TooltipContent>
          </Tooltip>

          <div className="w-[1px] h-8 bg-white/20 mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 text-white hover:bg-white/10">
                <ChevronUp className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-carbon-gray text-white border-none font-bold">Volver Arriba</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
