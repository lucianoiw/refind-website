import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { TwitterIcon, TwitterVerifiedIcon } from "@/components/icons";

export type ITwitterNode = Node<INode>;

export const TwitterNode = memo(({ selected }: NodeProps<ITwitterNode>) => {
  const avatar = "/avatar-twitter.avif";

  return (
    <NodeWrapper type="twitter" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-[#a1a1aa]/20 bg-[#a1a1aa]/20 text-[#a1a1aa] transition-all duration-300",
          {
            "dark:bg-[#a1a1aa]/50 bg-[#a1a1aa] dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <TwitterIcon
            className={cn(
              "size-3.5 shrink-0 fill-[#a1a1aa] transition-all duration-300",
              {
                "fill-white": selected,
              }
            )}
          />

          <div className="group flex items-center gap-1.5 truncate">
            <span className="text-[0.65rem] truncate font-medium">
              @lcosouza
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="flex items-center gap-2">
          <span
            data-slot="avatar"
            className="relative flex size-8 shrink-0 overflow-hidden rounded-full"
          >
            <img className={cn("aspect-square size-full")} src={avatar} />
          </span>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xs text-neutral-400 font-medium">
                Luciano Souza
              </span>
              <TwitterVerifiedIcon className="size-2.5" />
            </div>

            <span>@lcosouza</span>
          </div>
        </div>

        <div className="line-clamp-3">
          Você não precisa postar todos os dias. Precisa de um processo que
          funcione todos os dias.
        </div>
      </div>
    </NodeWrapper>
  );
});

TwitterNode.displayName = "TwitterNode";
