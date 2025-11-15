"use client";

import { FakeDoor } from "./fake-door";
import { Button } from "./ui/button";
import { trackScroll } from "@/lib/gtag";

export const Hero = () => {
  return (
    <div className="grid-wrapper py-8 xl:py-0">
      <div className="grid-span-inner flex flex-col gap-15">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-light lg:text-balance leading-tight">
            Transforme vídeos, imagens e posts das redes sociais em{" "}
            <span className="font-mono">conteúdos poderosos</span>.
          </h1>

          <div className="w-full lg:max-w-1/2">
            <h2 className="md:text-xl font-light text-balance lg:leading-relaxed text-muted-foreground">
              Acesse GPT, Claude, Gemini e Grok, processe qualquer mídia das
              redes sociais e gere ideias, scripts e análises incríveis em
              poucos segundos.
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <FakeDoor source="hero">
            <Button size="xl" className="font-light w-full md:w-auto">
              Use grátis por 7 dias
            </Button>
          </FakeDoor>

          <Button
            size="xl"
            className="font-light"
            variant="outline"
            onClick={() => {
              trackScroll("demo");
              document.getElementById("demo")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Ver demonstração
          </Button>
        </div>
      </div>
    </div>
  );
};
