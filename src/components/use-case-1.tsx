export const UseCase1 = () => {
  return (
    <>
      <section id="demo" className="bg-foreground/2 py-10 lg:py-24">
        <div className="grid-wrapper">
          <div className="grid-span-inner">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
              <div className="flex flex-col lg:w-1/2 xl:w-1/3 gap-6">
                <h2 className="text-2xl lg:text-3xl font-ligth">
                  Veja como suas ideias ganham vida com IA
                </h2>

                <div className="flex flex-col gap-2 text-lg text-muted-foreground text-balance font-light">
                  <p>
                    Transforme links, vídeos, textos e referências em conteúdos
                    de alto impacto.
                  </p>
                  <p>
                    Assista ao vídeo e descubra como criadores usam o Refind
                    para construir campanhas completas, analisar conteúdos e
                    gerar novos formatos em minutos.
                  </p>
                </div>
              </div>

              <div className="relative lg:w-1/2 xl:w-2/3 aspect-video">
                {/* <div className="relative">
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
                </div> */}

                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/qaKQqeOBUCo?si=DHue7XnN7DoYxhVM&controls=0&autoplay=0&modestbranding=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
