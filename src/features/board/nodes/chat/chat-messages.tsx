"use client";

import { memo, useRef } from "react";

import { GlobeIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MarkdownText } from "@/components/markdown-text";

export const ChatMessages = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={chatRef}
      className="flex flex-col grow min-h-0 overflow-y-auto nodrag nowheel select-text cursor-text gap-8 p-2"
      style={{ overflowAnchor: "none" }}
    >
      <UserMessage />
      <AiMessage />
    </div>
  );
};

ChatMessages.displayName = "ChatMessages";

const UserMessage = memo(() => {
  return (
    <div className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <Avatar className="size-5">
          <AvatarImage src="/avatar-twitter.avif" />
          <AvatarFallback className="bg-neutral-500 text-white text-[0.65rem] font-bold">
            PS
          </AvatarFallback>
        </Avatar>

        <span className="text-sm text-primary/50 font-bold">Luciano Souza</span>
      </header>

      <div className="text-primary/60 text-sm">
        Com base em todos os conteúdos conectados, gere uma nova campanha que
        mostre como um criador pode transformar 1 vídeo em 7 formatos de
        conteúdo. Inclua título, roteiro curto para TikTok, post para LinkedIn e
        uma ideia de imagem que una tudo. O objetivo é inspirar e ensinar.
      </div>
    </div>
  );
});

UserMessage.displayName = "UserMessage";

const AiMessage = memo(() => {
  return (
    <div className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <Avatar className="size-5">
          <AvatarFallback className="bg-indigo-500 text-white text-[0.6rem] font-bold">
            IA
          </AvatarFallback>
        </Avatar>

        <span className="text-sm text-indigo-500 font-bold">Chat IA</span>

        <Badge variant="outline" className="text-primary/50">
          GPT-5.1
        </Badge>

        <Badge variant="outline" className="border-indigo-400 text-indigo-400">
          <GlobeIcon className="size-3" /> Internet
        </Badge>
      </header>

      <div className="text-primary/80 text-sm leading-relaxed">
        <MarkdownText
          content={`Claro. Aqui está sua campanha completa, criada com base em todos os conteúdos conectados do seu board, incluindo tom de voz, formato e estilo.

---

### **📢 Campanha**

**Título:** *De 1 ideia a 7 formatos, o sistema dos criadores consistentes.*

---

### **🎥 Roteiro TikTok (30s)**

**Cena 1:**
Você olha o calendário e percebe que está sem ideias.

**Cena 2:**
“Quer um segredo? Eu só gravo UM vídeo por semana.”

**Cena 3:**
Mostra a timeline com cortes, posts, tweets e carrossel nascendo.

**Cena 4:**
“1 vídeo. 7 peças. Zero burnout.”

**CTA:**
“Quer o checklist? Link na bio.”

---

### **💼 Post para LinkedIn**

A consistência não vem da motivação, vem do sistema.

Grave um vídeo raiz, extraia 3 cortes, 1 carrossel, 1 tweet e 1 mini artigo.

Cada peça reforça sua autoridade e economiza horas de criação.

**1 vídeo → 7 peças.**

*Trabalhe menos. Publique melhor.*

---

### **🖼️ Ideia de imagem unificada**

Fundo preto texturizado, tipografia forte.
No centro: **“1 vídeo → 7 peças.”**
Ao redor: 7 ícones conectados (🎬, 📝, 📸, 🔊, 📈, 🧩, 💬).
Estilo limpo, com linhas finas e alto contraste.`}
        />
      </div>
    </div>
  );
});

AiMessage.displayName = "AiMessage";
