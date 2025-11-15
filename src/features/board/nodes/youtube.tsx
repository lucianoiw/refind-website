import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { YoutubeIcon } from "@/components/icons";

export type IYoutubeNode = Node<INode>;

export const YoutubeNode = memo(({ selected }: NodeProps<IYoutubeNode>) => {
  const thumbnail = "/thumb-youtube.avif";

  const label = "Como edito 3 roteiros virais em 10 minutos";

  return (
    <NodeWrapper type="youtube" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#ff0000]/10 bg-[#ff0000]/10 text-[#ff0000] transition-all duration-300",
          {
            "dark:bg-[#ff0000]/50 bg-[#ff0000] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <YoutubeIcon
            className={cn(
              "size-3.5 shrink-0 fill-[#ff0000] transition-all duration-300",
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
          Terrell Grice mostra como organiza ideias com IA, divide em ganchos e
          usa templates para acelerar o processo.
        </div>
      </div>
    </NodeWrapper>
  );
});

YoutubeNode.displayName = "YoutubeNode";
