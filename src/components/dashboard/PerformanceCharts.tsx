
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent, 
  ChartLegend, 
  ChartLegendContent 
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart } from "recharts";

const weeklyData = [
  { day: "Lun", study: 4, tasks: 2 },
  { day: "Mar", study: 3, tasks: 1 },
  { day: "Mie", study: 5, tasks: 4 },
  { day: "Jue", study: 2, tasks: 1 },
  { day: "Vie", study: 6, tasks: 3 },
  { day: "Sab", study: 1, tasks: 0 },
  { day: "Dom", study: 2, tasks: 2 },
];

const monthlyData = [
  { week: "Sem 1", score: 85 },
  { week: "Sem 2", score: 88 },
  { week: "Sem 3", score: 82 },
  { week: "Sem 4", score: 94 },
];

const chartConfig = {
  study: {
    label: "Horas de Estudio",
    color: "#256279",
  },
  tasks: {
    label: "Tareas Entregadas",
    color: "#f9b252",
  },
  score: {
    label: "Rendimiento Académico",
    color: "#00b2ca",
  }
} satisfies ChartConfig;

export function PerformanceCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <Card className="border-none shadow-md p-6">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-xl font-headline uppercase">Rendimiento Semanal</CardTitle>
          <CardDescription>Horas invertidas vs tareas completadas</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={weeklyData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8}
                className="font-bold"
              />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="study" fill="var(--color-study)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tasks" fill="var(--color-tasks)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md p-6">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-xl font-headline uppercase">Consistencia Mensual</CardTitle>
          <CardDescription>Puntaje promedio por semana</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={monthlyData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="week" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8}
                className="font-bold"
              />
              <YAxis domain={[0, 100]} hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="var(--color-score)" 
                strokeWidth={3} 
                dot={{ r: 6, fill: "var(--color-score)" }} 
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
