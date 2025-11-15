import { APP_NAME } from "@/utils";

import { InstagramIcon, YoutubeIcon } from "./icons";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Logo } from "./logo";
import { MailIcon } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <div className="py-4">
        <footer className="grid-wrapper">
          <div className="grid-span-inner">
            <div className="mx-auto lg:flex lg:items-center lg:justify-between">
              <div className="flex flex-col lg:flex-row items-center">
                <Link href="/">
                  <Logo />
                </Link>

                <Separator
                  orientation="vertical"
                  className="hidden lg:block mx-3 w-0.5! h-6!"
                />

                <p className="mt-3 text-center text-sm leading-6 text-muted-foreground lg:mt-0 lg:text-left">
                  © 2025 {APP_NAME}. Todos os direitos reservados.
                </p>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-center sm:space-x-4 lg:mt-0">
                {/* <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm leading-6 text-slate-600"> */}
                <div className="flex flex-wrap justify-center items-center h-5 space-x-2 lg:space-x-4 text-sm">
                  <a
                    className="text-sm text-muted-foreground transition duration-300 hover:text-foreground"
                    href="/refind-vs-outras-ias"
                  >
                    Refind vs Outras IAs
                  </a>

                  <Separator orientation="vertical" />

                  <a
                    className="text-sm text-muted-foreground transition duration-300 hover:text-foreground"
                    href="/privacy"
                  >
                    <span className="hidden md:inline">Política de{` `}</span>
                    Privacidade
                  </a>

                  <Separator orientation="vertical" />

                  <a
                    className="text-sm text-muted-foreground transition duration-300 hover:text-foreground"
                    href="/terms"
                  >
                    Termos de Serviço
                  </a>

                  {/* <Separator orientation="vertical" /> */}

                  {/* <a
                  className="text-sm text-muted-foreground transition duration-300 hover:text-foreground"
                  href="/changelog"
                >
                  Changelog
                </a>

                */}
                  <Separator
                    orientation="vertical"
                    className="hidden md:block"
                  />
                </div>

                <div className="mt-5 flex items-center justify-center gap-x-4 sm:mt-0">
                  <a href="mailto:contato@refind.com.br">
                    <MailIcon className="size-5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@getrefind"
                    className="block text-slate-400 hover:text-slate-500"
                    target="_blank"
                  >
                    <span className="sr-only">Youtube</span>
                    <YoutubeIcon className="size-5 fill-foreground hover:fill-foreground/50 transition" />
                  </a>

                  <a
                    href="https://instagram.com/refind.ai"
                    className="block text-slate-400 hover:text-slate-500"
                    target="_blank"
                  >
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="size-4 fill-foreground hover:fill-foreground/50 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
