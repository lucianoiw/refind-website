import { memo } from "react";
import { type Node, type NodeProps } from "@xyflow/react";

import { cn } from "@/utils";
import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { PlayIcon } from "@/components/icons";

export type IMediaNode = Node<INode>;

export const MediaNode = memo(({ selected }: NodeProps<IMediaNode>) => {
  const thumbnail = "/thumb-media.avif";

  return (
    <>
      <NodeWrapper type="text" selected={selected}>
        <div className={cn("relative")}>
          <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-1/2 size-10 bg-white/80 rounded-full">
            <PlayIcon className="size-8" />
          </div>

          <img className={cn("aspect-4/3 object-cover")} src={thumbnail} />
        </div>
      </NodeWrapper>
    </>
  );
});

MediaNode.displayName = "MediaNode";
