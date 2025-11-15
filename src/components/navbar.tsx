"use client";

import Link from "next/link";

import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
// import { APP_URL } from "@/utils";
import { FakeDoor } from "./fake-door";
import { trackScroll } from "@/lib/gtag";

export const Navbar = () => {
  return (
    <header className="grid-wrapper">
      <div className="flex justify-between py-5 grid-span-inner">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => {
              trackScroll("pricing");
              document.getElementById("pricing")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Preços
          </Button>

          {/* <Button asChild variant="ghost" className="hidden md:flex">
            <Link href={`${APP_URL}/login`} target="_blank">
              Entrar
            </Link>
          </Button> */}

          <FakeDoor source="navbar">
            <Button>Use grátis por 7 dias</Button>
          </FakeDoor>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
