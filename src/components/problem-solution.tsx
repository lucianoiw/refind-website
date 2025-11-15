import { X, Check, TrendingUp } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Horas assistindo vídeo para tirar insights",
    "Cursor piscando no Google Docs",
    "Concorrente bombando e você sem postar",
    "Freelancer caro, lento e fora do tom",
    "Ideias se perdem por falta de organização",
  ];

  const solutions = [
    "Jogar qualquer vídeo/áudio e ter um script em 30s",
    "Criar 30 posts virais enquanto toma um café",
    "Transformar uma live de 2h em 50 conteúdos",
    "Ter uma IA que escreve exatamente como você fala",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-neutral-100 via-muted/10 to-background" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Problems */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Você conhece essa{" "}
              <span className="text-destructive">frustração</span>?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-3 hover:border-destructive/40 transition-all"
                >
                  <X className="w-6 h-6 text-destructive shrink-0 mt-1" />
                  <p className="text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-2xl" />
          </div>

          {/* Solutions */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Agora imagine se você{" "}
              <span className="gradient-text">pudesse...</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 flex items-start gap-3 hover:border-primary/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-medium">{solution}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <div className="inline-flex items-center gap-2 text-accent text-lg">
                <TrendingUp className="w-6 h-6" />
                <span className="font-semibold">
                  Isso é possível agora. Veja como funciona ⬇️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
