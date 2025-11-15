import {
  FileInputIcon,
  LayersIcon,
  PenLineIcon,
  Share2Icon,
  SlidersHorizontalIcon,
  SparklesIcon,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Traga tudo para um só lugar",
      description:
        "Conecte YouTube, Instagram, TikTok, X, Facebook, sites, imagens e áudios diretamente no canvas, sem precisar baixar arquivos ou converter formatos.",
      meaning:
        "toda sua pesquisa e inspiração ficam centralizadas e prontas para uso.",
      icon: <LayersIcon />,
    },
    {
      title: "Entenda qualquer conteúdo em segundos",
      description:
        "Use GPT, Claude, Gemini e Grok para analisar vídeos, posts e textos, gerando resumos, análises, insights e ideias com clareza instantânea.",
      meaning: "você desbloqueia criatividade e clareza sem esforço.",
      icon: <SparklesIcon />,
    },
    {
      title: "Organize ideias de forma visual",
      description:
        "Relacione conteúdos, agrupe referências e crie mapas visuais dinâmicos que expandem conforme você desenvolve novos conceitos e direções.",
      meaning: "você enxerga padrões e conexões que antes estavam ocultos.",
      icon: <Share2Icon />,
    },
    {
      title: "Analise exatamente como você quer",
      description:
        "Crie nós com instruções específicas para análises personalizadas, comparações, extração de dados ou geração de novos conteúdos.",
      meaning: "você obtém respostas altamente precisas, sob medida.",
      icon: <SlidersHorizontalIcon />,
    },
    {
      title: "Trabalhe com vídeo, imagem, áudio e texto",
      description:
        "De vídeos longos a imagens únicas, de áudios a páginas web, tudo é transformado em informação estruturada e pronta para criação.",
      meaning: "qualquer mídia vira conhecimento acionável.",
      icon: <FileInputIcon />,
    },
    {
      title: "Gere conteúdo pronto para publicar",
      description:
        "Produza roteiros, títulos, legendas, cortes, posts e ideias criativas, sempre adaptados ao seu estilo e ao seu nicho de criação.",
      meaning: "mais produção, menos esforço.",
      icon: <PenLineIcon />,
    },
  ];

  return (
    <div className="py-10 lg:py-24">
      <div className="grid-wrapper">
        <div className="grid-span-inner flex flex-col gap-y-8">
          <div className="flex flex-col w-full md:max-w-lg xl:max-w-2/3 gap-4">
            <h2 className="text-3xl font-light text-balance">
              A plataforma completa para criadores que querem ir além na
              performance e na criatividade
            </h2>
          </div>

          <div className="border-t border-r border-black/5 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon }, index) => (
              <div
                key={`feature-${index}`}
                className="flex flex-col lg:gap-6 gap-4 border-l border-b p-4 md:p-6 lg:p-12 bg-white dark:bg-black/10 border-black/10 dark:border-white/8"
              >
                {icon ? icon : null}

                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-light">{title}</div>

                  <p className="text-base text-muted-foreground font-light">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
