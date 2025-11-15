import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { GlobeIcon } from "lucide-react";

export type IWebsiteNode = Node<INode>;

export const WebsiteNode = memo(({ selected }: NodeProps<IWebsiteNode>) => {
  const thumbnail = "/thumb-website.avif";

  const label = "Como converter blogs em vídeo com ferramentas de IA";

  return (
    <NodeWrapper type="website" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-cyan-500/20 bg-cyan-500/20 text-cyan-500 transition-all duration-300",
          {
            "dark:bg-cyan-500/50 bg-cyan-500 dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <GlobeIcon
            className={cn(
              "size-3.5 shrink-0 text-cyan-500 transition-all duration-300",
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

      <div className={cn("relative")}>
        <img className={cn("aspect-video object-cover")} src={thumbnail} />
      </div>

      <div className="p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="line-clamp-2">
          Transforme artigos antigos em roteiros dinâmicos com ganchos visuais e
          CTA prontos.” Insight: copy orientada à conversão
        </div>
      </div>
    </NodeWrapper>
  );
});

WebsiteNode.displayName = "WebsiteNode";
