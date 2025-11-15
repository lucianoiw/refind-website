import { FakeDoor } from "./fake-door";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      className="bg-white dark:bg-black/50 border-y border-foreground/5"
      style={{
        background: `url(/bg-px.png) repeat`,
      }}
    >
      <div className="grid-wrapper">
        <div className="grid-span-inner py-24">
          <div className="lg:w-2/3 flex flex-col gap-4 sm:flex-row sm:items-center items-start mx-auto">
            <div className="flex flex-col gap-1">
              <div className="text-xl font-bold text-balance">
                Descubra uma nova forma de trabalhar com conteúdo.
              </div>
              <p className="text-muted-foreground text-balance">
                Junte-se aos criadores e equipes que estão usando o Refind para
                acelerar análises, insights e criação.
              </p>
            </div>

            <FakeDoor source="cta">
              <Button size="lg" className="font-light w-full md:w-auto">
                Use grátis por 7 dias
              </Button>
            </FakeDoor>
          </div>
        </div>
      </div>
    </section>
  );
};
