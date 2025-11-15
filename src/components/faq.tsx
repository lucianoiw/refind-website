import { MailIcon } from "lucide-react";
import { MarkdownText } from "./markdown-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

export function Faq() {
  const faqs = [
    {
      q: "Há um limite de créditos?",
      a: `
**Sim. Depende do plano:**

* **Básico:** 7.000 créditos por mês
* **Profissional:** 14.000 créditos por mês
* **Empresarial:** créditos flexíveis e personalizados

Para usos maiores, oferecemos **planos personalizados**.
    `,
    },
    {
      q: "Existe limite de arquivos, links ou conexões por chat?",
      a: `
**Não há limite prático de arquivos ou links por chat.**

O que muda é **a janela de contexto da LLM que você escolher**.

Cada modelo (GPT, Claude, Gemini, Grok) possui um limite próprio de tokens, e o Refind se adapta automaticamente a esse limite, permitindo trabalhar com vários arquivos simultaneamente, sem travar o fluxo.
    `,
    },
    {
      q: "Lê PDFs, DOC, etc.?",
      a: `
Sim! O Refind suporta diversos formatos, incluindo:

- **PDF**  
- **DOCX**  
- **PowerPoint**  
- **MP3**  
- **MP4**  
- Entre outros formatos populares.
    `,
    },
    {
      q: "Preciso ter um plano pago do ChatGPT ou outro modelo de IA?",
      a: `
**Não!**  
Você acessa as principais IAs diretamente pelo Refind, sem precisar assinar serviços extras:

- **ChatGPT**  
- **Claude**  
- **Gemini**  
- **Grok**
    `,
    },
    {
      q: "Qual modelo de IA o Refind utiliza?",
      a: `
O Refind usa **diferentes modelos de IA para diferentes tarefas**, garantindo melhor desempenho em cada etapa do processo:

**Para processamento e interpretação de conteúdo:**

* Modelos especializados para **scraping**, **transcrição (STT)**, **tradução**, **extração de dados**, **embedding** e **TTS**.

**Para conversar, analisar e gerar conteúdo no chat:**
Você escolhe qual LLM deseja usar, entre:

* **ChatGPT (OpenAI)**
* **Claude (Anthropic)**
* **Gemini (Google)**
* **Grok (xAI)**

Cada modelo traz suas próprias vantagens, e você pode alternar livremente conforme o tipo de análise ou criação que deseja fazer.
    `,
    },
    {
      q: "Tem algum período de teste gratuito?",
      a: `
Sim! Você recebe 7 dias grátis com 300 créditos para testar todas as funcionalidades.

E o melhor: não é necessário cartão de crédito.
    `,
    },
    {
      q: "Tem app mobile?",
      a: `
Ainda não.  
Atualmente funciona perfeitamente no **navegador desktop**.

Um app mobile está em **nosso roadmap**.
    `,
    },
    {
      q: "Por que usar o Refind e não ChatGPT, NotebookLM ou outras IAs?",
      a: `
O Refind integra **todas** as IAs (GPT, Claude, Gemini e Grok) num só lugar, aceita **links de redes sociais** (Instagram, TikTok, YouTube, X, etc.), trabalha com **vídeo, imagem, áudio, PDFs e textos** e organiza tudo automaticamente em **nós inteligentes**.

Diferente de cada IA isolada, o Refind foi feito para **criar conteúdo completo**, não só responder mensagens.
    `,
    },
    {
      q: "Posso enviar arquivos sem link?",
      a: `
**Sim!** Você pode fazer upload direto de diversos formatos, mesmo que o conteúdo **não esteja na internet**.

Formatos suportados incluem:

* **MP3 / WAV** (áudio)
* **MP4 / MOV** (vídeo)
* **PDF / DOCX / PPTX** (documentos)
* **JPG / PNG / WEBP** (imagens)
* E muitos outros formatos comuns.

O Refind processa tudo automaticamente.
    `,
    },
    {
      q: "Suporta TikTok e YouTube Shorts?",
      a: `
**Sim!** O Refind oferece suporte completo a conteúdos curtos e outras plataformas de vídeo:

* **TikTok**
* **TikTok Shop**
* **YouTube Shorts**
* **Instagram Reels**
* **Instagram Feeds e Carrosséis**
* **YouTube (vídeos longos)**
* **Conteúdos enviados por arquivo** (MP4, MOV, MP3 etc.)

Todos com **transcrição completa**, **análises profundas** e integração direta ao chat.
    `,
    },
    {
      q: "É possível criar imagens ou vídeos?",
      a: `
**Ainda não.**

No momento, o Refind é focado em **texto**, **análise** e **transformação de conteúdo**.

A capacidade de **gerar imagens e vídeos** está no nosso **roadmap** e chegará em futuras atualizações.
    `,
    },
  ];

  return (
    <section className="grid-wrapper py-10 lg:py-24">
      <div className="grid-span-inner flex flex-col gap-10 lg:flex-row lg:gap-14 xl:gap-20">
        <div className="flex flex-col w-full lg:max-w-sm xl:max-w-md gap-8">
          <div className="flex flex-col gap-4">
            <Badge>Perguntas frequentes</Badge>

            <h2 className="text-3xl font-medium">
              Tudo o que você precisa saber sobre o Refind
            </h2>
          </div>

          <div className="flex flex-col gap-4 border p-4">
            <div className="flex flex-col">
              <div className="text-xl font-bold">Fale com a gente</div>

              <a
                href="mainto:contato@refind.com.br"
                className="text-muted-foreground underline underline-offset-4"
              >
                contato@refind.com.br
              </a>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <p>
                Se tiver dúvidas, feedback ou quiser falar sobre o Refind,
                estamos aqui para ajudar.
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full grow">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-md text-left hover:no-underline cursor-pointer">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance text-foreground/70">
                <MarkdownText content={faq.a} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
