import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { InstagramIcon } from "@/components/icons";

export type IInstagramNode = Node<INode>;

export const InstagramNode = memo(({ selected }: NodeProps<IInstagramNode>) => {
  const thumbnail = "/thumb-instagram.avif";

  return (
    <NodeWrapper type="instagram" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#E1306C]/20 bg-[#E1306C]/20 text-[#E1306C] transition-all duration-300",
          {
            "dark:bg-[#E1306C]/50 bg-[#E1306C] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <InstagramIcon
            className={cn(
              "size-3.5 shrink-0 fill-[#E1306C] transition-all duration-300",
              {
                "fill-white": selected,
              }
            )}
          />

          <div className="group flex items-center gap-1.5 truncate">
            <span className="text-[0.65rem] truncate font-medium">
              Roteiro em 3 camadas
            </span>
          </div>
        </div>
      </div>

      <div className={cn("relative")}>
        <img className={cn("aspect-4/3 object-cover")} src={thumbnail} />
      </div>

      <div className="p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="line-clamp-2">Gancho → Valor → CTA</div>
      </div>
    </NodeWrapper>
  );
});

InstagramNode.displayName = "InstagramNode";
