import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { FacebookIcon } from "@/components/icons";

export type IFacebookNode = Node<INode>;

export const FacebookNode = memo(({ selected }: NodeProps<IFacebookNode>) => {
  const thumbnail = "/thumb-facebook.avif";

  const label = "Seu alcance cresce quando seu processo encolhe";

  return (
    <NodeWrapper type="facebook" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#4267B2]/20 bg-[#4267B2]/20 text-[#4267B2] transition-all duration-300",
          {
            "dark:bg-[#4267B2]/50 bg-[#4267B2] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <FacebookIcon
            className={cn(
              "size-3.5 shrink-0 fill-[#4267B2] transition-all duration-300",
              {
                "fill-white": selected,
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
        <img className={cn("aspect-video object-cover")} src={thumbnail} />
      </div>

      <div className="p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="line-clamp-2">
          Use um roteiro único por semana e gere 7 variações. É assim que marcas
          consistentes escalam conteúdo sem esgotar a equipe.
        </div>
      </div>
    </NodeWrapper>
  );
});

FacebookNode.displayName = "FacebookNode";
