import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { LinkedinIcon } from "@/components/icons";

export type ILinkedinNode = Node<INode>;

export const LinkedinNode = memo(({ selected }: NodeProps<ILinkedinNode>) => {
  const thumbnail = "/thumb-linkedin.avif";

  const label = "Consistência vem de processo, não de frequência. ";

  return (
    <NodeWrapper type="linkedin" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#0077B5]/20 bg-[#0077B5]/20 text-[#0077B5] transition-all duration-300",
          {
            "dark:bg-[#0077B5]/50 bg-[#0077B5] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <LinkedinIcon
            className={cn(
              "size-3.5 shrink-0 fill-[#0077B5] transition-all duration-300",
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
          Meu framework semanal gera 7 peças a partir de 1 vídeo.
        </div>
      </div>
    </NodeWrapper>
  );
});

LinkedinNode.displayName = "LinkedinNode";
