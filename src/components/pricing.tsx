import { CheckIcon, InfoIcon } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { APP_URL, formatCurrency } from "@/utils";
import { Button } from "./ui/button";
import { FakeDoor } from "./fake-door";

export const Pricing = () => {
  const plans = [
    {
      id: "basic",
      name: "Básico",
      description:
        "O plano ideal para quem quer começar a organizar ideias, analisar conteúdos e criar posts de forma inteligente.",
      price: 49.9,
      cta: "Começar agora",
      help: "Sem compromisso. Cancele quando quiser.",
      features: [
        "7.000 créditos por mês",
        "Suporte por email",
        "Acesso a todos os recursos",
      ],
    },

    {
      id: "professional",
      name: "Profissional",
      description:
        "Perfeito para quem produz em volume, precisa de análises profundas e integra o Refind ao seu fluxo de trabalho.",
      price: 99.9,
      cta: "Começar agora",
      help: "Sem compromisso. Cancele quando quiser.",
      features: [
        "14.000 créditos por mês",
        "Suporte prioritário",
        "Análises avançadas",
        "Acesso via API e integrações",
      ],
    },

    {
      id: "enterprise",
      name: "Empresarial",
      description:
        "Solução completa para equipes e empresas que precisam de escala, segurança e recursos avançados.",
      price: 0,
      cta: "Falar com o time",
      help: "Atendimento rápido. Sem compromisso.",
      features: [
        "Créditos flexíveis e escaláveis conforme o volume de produção",
        "Suporte dedicado 24/7 com SLA empresarial",
        "Integrações customizadas (API, Webhooks, SSO, etc.)",
        "Treinamento e onboarding da equipe",
        "Relatórios avançados e dashboards personalizados",
      ],
    },
  ];

  return (
    <div className="bg-foreground/2 py-10 lg:py-24">
      <div className="grid-wrapper">
        <div className="grid-span-inner flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center gap-2 text-balance">
            <h2 className="text-2xl lg:text-3xl font-ligth">
              Escolha o plano ideal para você
            </h2>

            <div className="text-lg text-muted-foreground text-balance font-light">
              Gerencie, atualize ou cancele sua assinatura quando quiser.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-b">
            {plans.map((plan) => (
              <div
                key={`plan-${plan.id}`}
                className="relative grow border border-x border-neutral-300 dark:border-neutral-800 px-6 -m-[0.5px] flex flex-col"
              >
                <div className="space-y-1.5 my-6">
                  <div className="text-2xl flex items-center gap-2 font-medium">
                    {plan.name}
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex flex-col justify-center items-center h-[60px]">
                      <div className="flex items-baseline justify-center">
                        <div className="flex items-baseline justify-center gap-2">
                          {plan.id === "enterprise" ? (
                            <span className="font-semibold text-2xl">
                              Sob consulta
                            </span>
                          ) : (
                            <>
                              <span className="text-muted-foreground">R$</span>
                              <span className="font-semibold text-4xl">
                                {formatCurrency(plan.price)}
                              </span>
                              <span className="text-muted-foreground">
                                /mês
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 pb-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={`plan-${plan.id}-feature-${index}`}
                          className="flex items-start gap-2"
                        >
                          <CheckIcon className="size-5 text-primary min-w-5 mt-0.5" />

                          <div className="flex items-center">{feature}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 pb-6">
                    <FakeDoor source={`pricing-${plan.id}`}>
                      <Button
                        variant={
                          plan.id === "enterprise" ? "outline" : "default"
                        }
                        className="w-full font-medium"
                      >
                        {plan.cta}
                      </Button>
                    </FakeDoor>

                    <p className="text-center text-muted-foreground text-sm">
                      {plan.help}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
