"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shadcn/accordion";
import { Checkbox } from "@shadcn/checkbox";
import { Badge } from "@shadcn/badge";

const INITIAL_TASKS = [
  {
    id: "1",
    label: "Autenticación con Google (NextAuth/Supabase)",
    completed: true,
  },
  { id: "2", label: "Middleware de protección de rutas", completed: true },
  {
    id: "3",
    label: "Configuración de Base de Datos (Profiles & Triggers)",
    completed: true,
  },
  { id: "4", label: "Políticas RLS para Tablas y Storage", completed: true },
  { id: "5", label: "Bucket de Storage Privado configurado", completed: true },
  { id: "6", label: "Integrate zustand", completed: true },
  {
    id: "p1",
    label: "Componente Dropzone para subida de imágenes",
    completed: false,
  },
  {
    id: "p2",
    label: "Generación de Signed URLs para archivos privados",
    completed: false,
  },
  {
    id: "p3",
    label: "Grid dinámico con Masonry/Bento Layout",
    completed: false,
  },
  {
    id: "p4",
    label: "Filtros de búsqueda y etiquetas (Tags)",
    completed: false,
  },
  { id: "p5", label: "Landing Page final y Deployment", completed: false },
];

export function Roadmap() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completedTasks = tasks.filter((t) => t.completed);
  const pendingTasks = tasks.filter((t) => !t.completed);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 mb-10 border-t border-zinc-900 pt-10">
      <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
        Project Progress / Roadmap
      </h3>

      <Accordion
        type="multiple"
        defaultValue={["pending"]}
        className="w-full space-y-4"
      >
        <AccordionItem
          value="pending"
          className="border-zinc-800 bg-zinc-900/10 rounded-xl px-4"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-amber-500/50 text-amber-500 bg-amber-500/5"
              >
                To-do ({pendingTasks.length})
              </Badge>
              <span className="text-sm font-medium text-zinc-300">
                Core Features & UI
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2 pb-4">
            {pendingTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-3 group animate-in fade-in slide-in-from-left-2 duration-300"
              >
                <Checkbox
                  id={task.id}
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="border-zinc-700 group-hover:border-zinc-500"
                />
                <label
                  htmlFor={task.id}
                  className="text-sm font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  {task.label}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="completed"
          className="border-zinc-800 bg-zinc-900/10 rounded-xl px-4"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-emerald-500/50 text-emerald-500 bg-emerald-500/5"
              >
                Done ({completedTasks.length})
              </Badge>
              <span className="text-sm font-medium text-zinc-300">
                Infraestructura & Auth
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2 pb-4">
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-3 opacity-60 animate-in fade-in slide-in-from-left-2 duration-300"
              >
                <Checkbox
                  id={task.id}
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="border-emerald-500 data-[state=checked]:bg-emerald-500"
                />
                <label
                  htmlFor={task.id}
                  className="text-sm font-mono text-zinc-400 line-through cursor-pointer"
                >
                  {task.label}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
