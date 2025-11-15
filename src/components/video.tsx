"use client";

import { Play } from "lucide-react";

import { ImageWithFallback } from "./image-with-fallback";

export function Video() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900">
      <div className="grid-wrapper">
        <section className="grid-span-inner relative overflow-hidden">
          <div className="flex flex-col gap-15 py-10 lg:py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl lg:text-5xl font-medium lg:text-balance">
                Veja como suas ideias
                <br />
                ganham vida com IA
              </h2>

              <p className="text-muted-foreground lg:text-xl max-w-3xl mx-auto text-balance">
                Assista ao vídeo e veja como criadores estão transformando links
                em conteúdos de alto desempenho com IA.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYyMzAzNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video de demonstração do produto"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-center justify-center">
                  <div className="size-10 lg:size-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                    <Play
                      className="size-6 lg:size-10 text-purple-600 ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
