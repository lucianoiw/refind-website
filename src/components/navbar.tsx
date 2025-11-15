"use client";

import Link from "next/link";

import { trackScroll } from "@/lib/gtag";

import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { FakeDoor } from "./fake-door";

export const Navbar = () => {
  return (
    <>
      <header className="grid-wrapper">
        <div className="grid-span-inner flex py-5 flex-col md:flex-row items-center gap-y-6 md:gap-y-0 justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex gap-6">
            <nav className="flex items-center text-base justify-center gap-4">
              <Button
                variant="link"
                onClick={() => {
                  trackScroll("pricing");
                  document.getElementById("pricing")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Preços
              </Button>

              {/* <Button asChild variant="link">
                <Link href={`${APP_URL}/login`} target="_blank">
                  Entrar
                </Link>
              </Button> */}
            </nav>

            <div className="flex gap-3 md:gap-2">
              <FakeDoor source="navbar">
                <Button>Use grátis por 7 dias</Button>
              </FakeDoor>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
