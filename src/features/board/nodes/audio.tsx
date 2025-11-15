import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { Player } from "@/components/player";
import { MicIcon } from "lucide-react";

export type IAudioNode = Node<INode>;

export const AudioNode = memo(({ selected, data }: NodeProps<IAudioNode>) => {
  const label = "Áudio - Produtividade para Criadores de Conteúdo";

  return (
    <NodeWrapper type="audio" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#a855f7]/20 bg-[#a855f7]/20 text-[#a855f7] transition-all duration-300",
          {
            "dark:bg-[#a855f7]/50 bg-[#a855f7] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <MicIcon
            className={cn(
              "size-3.5 shrink-0 text-[#a855f7] transition-all duration-300",
              {
                "text-white": selected,
              }
            )}
          />

          <div className="group flex items-center gap-1.5 truncate">
            <span className="text-[0.65rem] truncate font-medium" title={label}>
              {label}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 py-2 dark:bg-neutral-800 bg-white">
        <Player audioUrl="/audio.mp3" />

        <div className="line-clamp-2 text-xs text-zinc-400 px-2">
          Se você gasta horas criando conteúdo, tá fazendo errado. O segredo é
          ter um processo. Grave um vídeo por semana, transforme em vários
          cortes e reaproveite tudo. Assim você multiplica seu alcance sem
          precisar trabalhar mais. Produtividade não é fazer mais, é fazer
          melhor.
        </div>
      </div>
    </NodeWrapper>
  );
});

AudioNode.displayName = "AudioNode";
