import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { TiktokIcon } from "@/components/icons";

export type ITiktokNode = Node<INode>;

export const TiktokNode = memo(({ selected }: NodeProps<ITiktokNode>) => {
  const thumbnail = "/thumb-tiktok.avif";

  const label = "3 hacks para postar melhor trabalhando menos";

  return (
    <NodeWrapper type="tiktok" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#2af0ea]/20 bg-[#397684]/20 dark:text-[#2af0ea] text-[#397684] transition-all duration-300",
          {
            "dark:bg-[#2af0ea]/50 bg-[#397684] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <TiktokIcon
            className={cn(
              "size-3.5 shrink-0 dark:fill-[#2af0ea] fill-[#397684] transition-all duration-300",
              {
                "fill-white!": selected,
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

      <div className={cn("relative")}>
        <img className={cn("aspect-[3/3.1] object-cover")} src={thumbnail} />
      </div>

      <div className="p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="line-clamp-2">
          Produtividade não é fazer mais. É fazer melhor. Salve para rever.
        </div>
      </div>
    </NodeWrapper>
  );
});

TiktokNode.displayName = "TiktokNode";
