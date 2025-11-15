import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import "@/styles/globals.css";
import { cn } from "@/utils";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "Refind - Transforme Conteúdos em Resultados com IA",
  description:
    "Acesse GPT, Claude, Gemini e Grok. Processe vídeos, imagens e posts das redes sociais e gere ideias, scripts e análises incríveis em poucos segundos.",
  keywords: [
    "IA",
    "inteligência artificial",
    "GPT",
    "Claude",
    "Gemini",
    "Grok",
    "criação de conteúdo",
    "análise de mídia",
    "redes sociais",
    "marketing digital",
    "content creation",
  ],
  authors: [{ name: "89DEV INFORMATICA EIRELI - ME" }],
  creator: "Refind",
  publisher: "Refind",
  metadataBase: new URL("https://www.refind.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Refind - Transforme Conteúdos em Resultados com IA",
    description:
      "Acesse GPT, Claude, Gemini e Grok. Processe vídeos, imagens e posts das redes sociais e gere ideias, scripts e análises incríveis em poucos segundos.",
    url: "https://www.refind.com.br",
    siteName: "Refind",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-refind.jpeg",
        width: 1200,
        height: 630,
        alt: "Refind - Transforme Conteúdos em Resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refind - Transforme Conteúdos em Resultados com IA",
    description:
      "Acesse GPT, Claude, Gemini e Grok. Processe vídeos, imagens e posts das redes sociais e gere ideias, scripts e análises incríveis.",
    creator: "@getrefind",
    images: ["/og-refind.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn("antialiased", GeistSans.variable, GeistMono.variable)}
      >
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                  });

                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
