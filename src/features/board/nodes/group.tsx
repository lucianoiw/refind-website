import {
  Handle,
  NodeResizeControl,
  Position,
  useViewport,
  useReactFlow,
  type Node,
  type NodeProps,
  type OnResize,
  ResizeDragEvent,
} from "@xyflow/react";
import { memo, useCallback, useEffect } from "react";

import { cn } from "@/utils";

import { NodeResizeIcon } from "@/components/icons";
import { INode } from "../types";
import { GroupIcon } from "lucide-react";
import { NodeWrapper } from "../components/node-wrapper";

export const GROUP_PADDING = {
  top: 33,
  right: 10,
  bottom: 30,
  left: 10,
};

export type IGroupNode = Node<INode>;

export const GroupNode = memo(
  ({ id, selected, data }: NodeProps<IGroupNode>) => {
    const { zoom } = useViewport();
    const { setNodes } = useReactFlow();

    // Atualizar extent dos filhos durante o resize
    const onResize: OnResize = useCallback(
      (e, params) => {
        const { width, height } = params;

        setNodes((nodes) =>
          nodes.map((node) => {
            // Atualizar extent de todos os filhos deste grupo
            if (node.parentId === id) {
              return {
                ...node,
                extent: [
                  [GROUP_PADDING.left, GROUP_PADDING.top],
                  [width - GROUP_PADDING.right, height - GROUP_PADDING.bottom],
                ] as [[number, number], [number, number]],
              };
            }
            return node;
          })
        );
      },
      [id, setNodes]
    );

    useEffect(() => {
      onResize({} as ResizeDragEvent, {
        width: 235,
        height: 300,
        x: 0,
        y: 0,
        direction: [],
      });
    }, []);

    return (
      <>
        <NodeResizeControl
          className="w-2! h-2! -mt-1! -ml-1! bg-transparent! border-0! z-10"
          minWidth={230}
          minHeight={280}
          onResize={onResize}
          onResizeEnd={() => {
            // Resize complete
          }}
        >
          <NodeResizeIcon
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "bottom right",
            }}
            className={cn("stroke-black dark:stroke-white")}
          />
        </NodeResizeControl>

        <NodeWrapper type="facebook" selected={selected}>
          <div
            className={cn(
              "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-neutral-500/20 bg-neutral-500/20 text-neutral-500 transition-all duration-300",
              {
                "dark:bg-neutral-500/50 bg-neutral-500 dark:text-primary text-white":
                  selected,
              }
            )}
          >
            <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
              <GroupIcon
                className={cn(
                  "size-3.5 shrink-0 text-neutral-500 transition-all duration-300",
                  {
                    "text-white": selected,
                  }
                )}
              />

              <div className="group flex items-center gap-1.5 truncate">
                <span className="text-[0.65rem] truncate font-medium">
                  Grupo: Tom de voz e estilo
                </span>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col w-full flex-1 min-h-0 gap-1 rounded dark:bg-neutral-900 bg-white p-2 relative"
            )}
          />
        </NodeWrapper>
      </>
    );
  }
);

GroupNode.displayName = "GroupNode";
