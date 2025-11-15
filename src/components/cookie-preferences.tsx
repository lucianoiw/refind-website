"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookiePreferences() {
  const [open, setOpen] = useState(false);

  // Ler consent do localStorage diretamente quando necessário
  const getConsent = (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(COOKIE_CONSENT_KEY);
  };

  const consent = open ? getConsent() : null;

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setOpen(false);

    // Ativar GA4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Recarregar página para aplicar mudanças
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setOpen(false);

    // Desativar GA4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    // Recarregar página para aplicar mudanças
    window.location.reload();
  };

  const getConsentText = () => {
    if (consent === "accepted") {
      return "Você está permitindo cookies de analytics";
    } else if (consent === "rejected") {
      return "Você está bloqueando cookies de analytics";
    } else {
      return "Você ainda não escolheu suas preferências";
    }
  };

  const getConsentBadge = () => {
    if (consent === "accepted") {
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          ✓ Aceito
        </span>
      );
    } else if (consent === "rejected") {
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
          ✗ Rejeitado
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          ? Não definido
        </span>
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Gerenciar Cookies
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Preferências de Cookies</DialogTitle>
          <DialogDescription>
            Gerencie suas preferências de cookies e privacidade.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">Status atual</div>
              {getConsentBadge()}
            </div>
            <p className="text-sm text-muted-foreground">{getConsentText()}</p>
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="space-y-1">
              <div className="font-medium text-sm">Cookies Essenciais</div>
              <p className="text-xs text-muted-foreground">
                Necessários para o funcionamento do site (autenticação, sessão).
                Sempre ativos.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-medium text-sm">Cookies de Analytics</div>
              <p className="text-xs text-muted-foreground">
                Google Analytics para análise de tráfego e comportamento.
                Opcional.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <DialogClose asChild>
            <Button variant="ghost" size="sm">
              Cancelar
            </Button>
          </DialogClose>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              disabled={consent === "rejected"}
            >
              {consent === "rejected" ? "✓ Rejeitado" : "Rejeitar"}
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              disabled={consent === "accepted"}
            >
              {consent === "accepted" ? "✓ Aceito" : "Aceitar"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
