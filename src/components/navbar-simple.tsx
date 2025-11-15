"use client";

import Link from "next/link";

import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { FakeDoor } from "./fake-door";

export const NavbarSimple = () => {
  return (
    <header className="grid-wrapper">
      <div className="flex justify-between py-5 grid-span-inner">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <FakeDoor source="navbar-simple">
            <Button>Use grátis por 7 dias</Button>
          </FakeDoor>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
