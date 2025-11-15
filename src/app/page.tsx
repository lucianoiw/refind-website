import { Companies } from "@/components/companies";
import { ContentTypes } from "@/components/content-types";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LlmsMarquee } from "@/components/llms";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Separator } from "@/components/ui/separator";
import { UseCase1 } from "@/components/use-case-1";
import { UseCase2 } from "@/components/use-case-2";
import { Board } from "@/features/board";

const Page = () => {
  return (
    <div className="">
      <div
        className="flex flex-col justify-between xl:h-screen"
        style={{
          background: `url(/bg-px.png) repeat`,
        }}
      >
        <Navbar />
        <Hero />
        <Companies />
      </div>
      <Separator className="bg-foreground/4" />
      <UseCase1 />
      <Separator className="bg-foreground/4" />
      <Features />
      <Separator className="bg-foreground/4" />
      <ContentTypes />
      <Separator className="bg-foreground/4" />
      <UseCase2 />
      <LlmsMarquee />
      <Faq />
      <Separator className="bg-foreground/4" />
      <div id="pricing">
        <Pricing />
      </div>
      <Separator className="bg-foreground/4" />

      <div
        className="pt-10 lg:pt-24"
        style={{
          background: `url(/bg-px.png) repeat`,
        }}
      >
        <section className="grid-wrapper">
          <div className="grid-span-inner">
            <div className="flex flex-col gap-3 xl:max-w-2/3">
              <h2 className="text-2xl lg:text-3xl font-ligth text-balance">
                Transforme conteúdos em resultados
              </h2>

              <div className="flex flex-col gap-2 text-lg text-muted-foreground text-balance font-light">
                <p>
                  Cada nó é interpretado pela IA e ligado ao chat para gerar
                  campanhas, roteiros, análises e conteúdos de alto desempenho,
                  tudo a partir de múltiplas fontes, em segundos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Board />
      </div>

      <Separator className="bg-foreground/4" />

      <Footer />
    </div>
  );
};

export default Page;
