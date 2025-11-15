"use client";

import confetti from "canvas-confetti";
import { PropsWithChildren, useState } from "react";
import z from "zod";

import { Button } from "@/components/ui/button";
import { trackWaitlistSignup, trackCTAClick } from "@/lib/gtag";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useFormWithZod } from "@/lib/hooks/use-form-with-zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Spinner } from "./ui/spinner";

const FakeDoorSchema = z.object({
  email: z
    .email("Por favor, insira um e-mail válido")
    .min(1, "O e-mail é obrigatório"),
});

interface FakeDoorProps extends PropsWithChildren {
  source?: string;
}

export function FakeDoor({ children, source = "unknown" }: FakeDoorProps) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useFormWithZod({
    schema: FakeDoorSchema,
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email, source }),
        });

        if (!response.ok) {
          throw new Error("Erro ao adicionar email");
        }

        setSuccess(true);

        // Track conversão no GA4
        trackWaitlistSignup(source);

        // Efeito de confetti! 🎉
        const duration = 1000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 80,
            origin: { x: 0 },
            colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 80,
            origin: { x: 1 },
            colors: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };

        frame();
      } catch (error) {
        console.error("Erro:", error);
        form.setError("email", {
          message: "Erro ao processar. Tente novamente.",
        });
      }
    },
  });

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      // Track abertura do modal (clique no CTA)
      trackCTAClick(source);
    }
    if (!isOpen) {
      form.reset();
      setSuccess(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <form suppressHydrationWarning>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent
          className="sm:max-w-xl"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="sr-only">
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>

          {success ? (
            <>
              <div className="text-xl font-bold text-center">
                🎉 Você está na lista!
              </div>

              <div className="flex flex-col gap-2 text-foreground/80 text-center">
                <p>
                  Obrigado por se inscrever! Em breve você receberá um convite
                  para acessar o Refind.
                </p>
              </div>

              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button className="w-full">Fechar</Button>
                </DialogClose>
              </DialogFooter>
            </>
          ) : (
            <>
              <div className="text-xl font-bold">
                O Refind ainda não está aberto ao público
              </div>

              <div className="flex flex-col gap-2 text-foreground/80">
                <p>
                  Estamos liberando o acesso gradualmente para um grupo inicial
                  de criadores, profissionais e equipes que querem testar antes
                  do lançamento oficial.
                </p>

                <p className="font-semibold">
                  Entre na lista e receba o convite nos próximos dias.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.onSubmit} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="seu@email.com"
                            className="h-10"
                            disabled={form.formState.isSubmitting}
                            data-1p-ignore
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter className="pt-4 gap-3">
                    <DialogClose asChild>
                      <Button variant="ghost">Cancelar</Button>
                    </DialogClose>

                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting && <Spinner />}
                      <span>Entrar para lista</span>
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </>
          )}
        </DialogContent>
      </form>
    </Dialog>
  );
}
