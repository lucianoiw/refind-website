"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  // Função para carregar Google Analytics (declarada antes do useEffect)
  const loadGoogleAnalytics = () => {
    // O GA4 será carregado automaticamente se o consentimento for dado
    // Isso é feito através do gtag no layout
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  useEffect(() => {
    // Verificar se já existe consentimento
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Mostrar banner após 1 segundo
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      // Já aceitou, carregar GA4
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShow(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-background border rounded-lg shadow-lg p-4 md:p-6 relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 p-1 rounded-xs hover:bg-muted transition-colors"
          aria-label="Fechar"
        >
          <XIcon className="size-4" />
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-4 pr-8">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Cookies & Privacidade</h3>
            <p className="text-sm text-muted-foreground">
              Usamos cookies essenciais e analytics para melhorar sua
              experiência. Ao aceitar, você concorda com o uso de Google
              Analytics para análise de tráfego.{" "}
              <a
                href="/privacy"
                className="underline hover:text-foreground transition-colors"
              >
                Saiba mais
              </a>
            </p>
          </div>

          <div className="flex gap-3 md:shrink-0">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Rejeitar
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
