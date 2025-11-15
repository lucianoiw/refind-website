import Image from "next/image";
import NodeExample from "./node-example";

export const UseCase2 = () => {
  const items = [
    {
      step: 1,
      title: "Traga links, arquivos e ideias para o Refind",
      description:
        "Cole links ou arraste vídeos, imagens, textos, sites, documentos e áudios direto para o canvas. O Refind organiza tudo automaticamente em nós inteligentes.",
      image: "/step-1.jpg",
    },

    {
      step: 2,
      title: "Deixe a IA organizar e revelar novos insights",
      description:
        "Modelos como GPT, Claude, Gemini e Grok interpretam o conteúdo, geram resumos, insights e criam relações entre seus nós.",
      image: "/thumb-media.avif",
    },

    {
      step: 3,
      title: "Transforme tudo em conteúdo pronto para publicar",
      description:
        "Crie roteiros, títulos, posts, cortes, análises e mapas visuais completos, sempre personalizados ao seu estilo.",
      image: "/thumb-media.avif",
    },
  ];

  return (
    <>
      <section className="grid-wrapper py-10 lg:py-24">
        <div className="grid-span-inner flex flex-col gap-y-8">
          <div className="flex flex-col w-full md:max-w-lg gap-4">
            <h2 className="text-3xl font-medium">
              Transformar conteúdo em ideias nunca foi tão simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
            {items.map(({ step, title, description }, index) => (
              <div
                key={`feature-${index}`}
                className="flex flex-col lg:gap-6 gap-4"
              >
                <div className="w-full aspect-4/3 relative overflow-hidden">
                  {step === 1 && (
                    <div className="w-full relative aspect-4/3 border border-foreground/3 pb-2">
                      <NodeExample
                        nodes={[
                          {
                            id: "youtube",
                            type: "youtube",
                            position: { x: 0, y: 0 },
                            width: 200,
                            data: { label: "Youtube" },
                          },

                          {
                            id: "instagram",
                            type: "instagram",
                            position: { x: 50, y: 50 },
                            width: 200,
                            data: { label: "Instagram" },
                          },
                        ]}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="w-full relative aspect-4/3 border border-foreground/3 pb-2">
                      <NodeExample
                        nodes={[
                          {
                            id: "youtube",
                            type: "youtube",
                            position: { x: 0, y: 0 },
                            width: 200,
                            data: { label: "Youtube" },
                          },

                          {
                            id: "instagram",
                            type: "instagram",
                            position: { x: 0, y: 200 },
                            width: 200,
                            data: { label: "instagram" },
                          },
                          {
                            id: "chat",
                            type: "chat",
                            position: { x: 250, y: 20 },
                            width: 260,
                            height: 380,
                            data: { label: "Youtube" },
                          },
                        ]}
                        edges={[
                          {
                            id: "youtube:chat",
                            source: "youtube",
                            target: "chat",
                            animated: true,
                          },

                          {
                            id: "instagram:chat",
                            source: "instagram",
                            target: "chat",
                            animated: true,
                          },
                        ]}
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <Image
                      src="/step-3.jpg"
                      alt="image"
                      className="w-full h-full relative z-0 scale-110 transition-all duration-300 hover:scale-100"
                      fill
                    />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center rounded-full size-6 bg-muted-foreground/50 text-background font-mono font-bold">
                    {index + 1}
                  </div>

                  <div className="text-2xl font-medium">{title}</div>

                  <p className="text-base text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
