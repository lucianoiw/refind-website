import {
  NodeResizeControl,
  useViewport,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { memo, useContext } from "react";

import { NodeResizeIcon } from "@/components/icons";
import { cn } from "@/utils";
import { NodeWrapper } from "../../components/node-wrapper";
import { INode } from "../../types";
import { ChatForm } from "./chat-form";
import { ChatMessages } from "./chat-messages";
import { BotMessageSquareIcon } from "lucide-react";
import { NodePreviewContext } from "@/components/node-preview";

export type IChatNode = Node<INode>;

export const ChatNode = memo(({ selected }: NodeProps<IChatNode>) => {
  const isPreview = useContext(NodePreviewContext);

  let zoom = 1;
  try {
    if (!isPreview) {
      const viewport = useViewport();
      zoom = viewport.zoom;
    }
  } catch (e) {
    // Not in ReactFlow context
  }

  const label = "Chat AI";

  return (
    <>
      {!isPreview && (
        <NodeResizeControl
          className="w-2! h-2! -mt-1! -ml-1! bg-transparent! border-0! z-10"
          minWidth={300}
          minHeight={400}
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
      )}

      <NodeWrapper selected={selected} type="chat">
        <div
          className={cn(
            "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-indigo-500/20 bg-indigo-500/20 text-indigo-500 transition-all duration-300",
            {
              "dark:bg-indigo-500/50 bg-indigo-500 dark:text-primary text-white":
                selected,
            }
          )}
        >
          <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
            <BotMessageSquareIcon
              className={cn(
                "size-3.5 shrink-0 text-indigo-500 transition-all duration-300",
                {
                  "text-white": selected,
                }
              )}
            />

            <div className="group flex items-center gap-1.5 truncate">
              <span
                className="text-[0.65rem] truncate font-medium"
                title={label}
              >
                {label}
              </span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col w-full flex-1 min-h-0 gap-1 rounded-b-md dark:bg-neutral-800 bg-white relative"
          )}
        >
          <ChatMessages />
          <ChatForm />
        </div>
      </NodeWrapper>
    </>
  );
});

ChatNode.displayName = "ChatNode";
