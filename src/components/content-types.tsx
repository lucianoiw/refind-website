"use client";

import { cn } from "@/utils";
import {
  BotMessageSquareIcon,
  FileTextIcon,
  GalleryHorizontalIcon,
  GlobeIcon,
  MicIcon,
  TypeIcon,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";
import { Badge } from "./ui/badge";
import NodeExample from "./node-example";

export const ContentTypes = () => {
  const types = [
    {
      id: "youtube",
      name: "Vídeos do YouTube",
      icon: <YoutubeIcon />,
      line1: "Traga qualquer vídeo sem baixar nada.",
      line2:
        "Analise, resuma, extraia cortes e gere roteiros instantaneamente.",
    },
    {
      id: "instagram",
      name: "Posts e Reels do Instagram",
      icon: <InstagramIcon />,
      line1: "Cole qualquer link e transforme o conteúdo em texto estruturado.",
      line2: "Gere insights, legendas, análises e novas ideias criativas.",
    },
    {
      id: "facebook",
      name: "Posts e Vídeos do Facebook",
      icon: <FacebookIcon />,
      line1: "Capture conteúdo de páginas e grupos em segundos.",
      line2: "Crie resumos, estudos de concorrência e conteúdos derivados.",
    },
    {
      id: "tiktok",
      name: "Vídeos do TikTok",
      icon: <TiktokIcon />,
      line1: "Cole um link e processe tudo automaticamente.",
      line2: "Gere hooks, roteiros, tópicos e cortes otimizados.",
    },
    {
      id: "linkedin",
      name: "Posts e Artigos do LinkedIn",
      icon: <LinkedinIcon />,
      line1: "Traga posts, carrosséis ou artigos com um link.",
      line2:
        "Gere análises, resumos profissionais e conteúdos aprimorados para sua audiência.",
    },
    {
      id: "twitter",
      name: "Tweets e Threads do X",
      icon: <TwitterIcon />,
      line1: "Cole qualquer tweet ou thread, inclusive longas.",
      line2:
        "Transforme debates, insights e ideias em conteúdos estruturados e reutilizáveis.",
    },
    {
      id: "website",
      name: "Páginas da web",
      icon: <GlobeIcon />,
      line1: "Cole qualquer URL e receba o conteúdo limpo e organizado.",
      line2:
        "Resuma textos longos, extraia tópicos-chave e gere novos conteúdos derivados.",
    },
    {
      id: "audio",
      name: "Podcasts e gravações",
      icon: <MicIcon />,
      line1: "Transcreva e entenda conversas rapidamente.",
      line2: "Gere resumos, cortes, tópicos e insights.",
    },
    {
      id: "media",
      name: "Vídeo e Imagem",
      icon: <GalleryHorizontalIcon />,
      line1:
        "Traga qualquer vídeo ou imagem direto das redes ou do seu computador.",
      line2:
        "Analise cenas, identifique elementos e gere insights visuais em segundos.",
      soon: true,
    },
    {
      id: "document",
      name: "Documentos e PDFs",
      icon: <FileTextIcon />,
      line1:
        "Envie documentos longos ou complexos e receba tudo transcrito, limpo e estruturado.",
      line2:
        "Resuma, analise, conecte e transforme materiais extensos em insights acionáveis.",
      dev: true,
    },
    {
      id: "text",
      name: "Textos, ideias e prompts personalizados",
      icon: <TypeIcon />,
      line1: "Crie um nó a partir de qualquer texto digitado ou colado.",
      line2:
        "Use-o como conteúdo base ou como prompt inteligente para orientar a IA exatamente como você deseja.",
    },
    {
      id: "chat",
      name: "Chat inteligente",
      icon: <BotMessageSquareIcon />,
      line1:
        "Use o chat para analisar qualquer Node do board e gerar ideias, roteiros, legendas e conteúdos completos.",
      line2:
        "Tenha uma IA que entende o contexto do seu projeto e cria junto com você.",
      width: 400,
      height: 400,
    },
  ];

  return (
    <div className="bg-foreground/2 py-10 lg:py-24">
      <div className="grid-wrapper">
        <div className="grid-span-inner flex flex-col gap-8">
          <div className="flex flex-col md:max-w-1/2 gap-6">
            <h2 className="text-2xl lg:text-3xl font-ligth">
              Transforme qualquer fonte em um elemento inteligente
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8">
            {types.map(
              (
                { id, name, line1, line2, icon, soon, dev, width, height },
                index
              ) => (
                <div key={`type-${index}`} className="flex flex-col gap-4">
                  <div className="w-full relative aspect-square border border-foreground/3">
                    <NodeExample
                      nodes={[
                        {
                          id,
                          type: id,
                          position: { x: 1, y: 1 },
                          width,
                          height,
                          data: { label: "Youtube" },
                        },
                      ]}
                    />
                  </div>

                  <div className="relative flex flex-col">
                    <div
                      className={cn(
                        "[&_svg]:size-4",
                        id === "website" ||
                          id === "document" ||
                          id === "audio" ||
                          id === "chat" ||
                          id === "media" ||
                          id === "text"
                          ? "[&_svg]:text-foreground/50"
                          : "[&_svg]:fill-foreground/50"
                      )}
                    >
                      {icon}
                    </div>

                    <div className="gap-2 inline-flex items-center mt-2">
                      <h3 className="text-xl font-bold">{name}</h3>

                      {(soon || dev) && (
                        <Badge variant="outline" className="text-[0.55rem]">
                          {soon ? "Em breve" : "Desenvolvendo"}
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      {line1}
                    </p>

                    <p className="text-sm font-medium text-muted-foreground mt-1">
                      {line2}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
