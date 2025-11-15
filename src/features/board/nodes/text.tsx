import {
  NodeResizeControl,
  useViewport,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { memo, useContext, useState } from "react";

import { TypeIcon } from "lucide-react";

import { cn } from "@/utils";
import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { NodeResizeIcon } from "@/components/icons";
import { NodePreviewContext } from "@/components/node-preview";

export type ITextNode = Node<INode>;

export const TextNode = memo(({ selected }: NodeProps<ITextNode>) => {
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

  const [text, setText] = useState(
    `Com base nos conteúdos conectados, gere uma sequência de posts que mantenha o mesmo tom e narrativa do autor. Reforce a ideia de produtividade e reaproveitamento de conteúdo.`
  );

  const [prompt, setPrompt] = useState(true);

  const label = "Prompt: Replicar Framework 1-7";

  return (
    <>
      {!isPreview && (
        <NodeResizeControl
          className="w-2! h-2! -mt-1! -ml-1! bg-transparent! border-0! z-10"
          minWidth={200}
          minHeight={80}
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

      <NodeWrapper type="text" selected={selected}>
        <div
          className={cn(
            "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-green-800/20 bg-green-800/20 text-green-800 transition-all duration-300",
            {
              "dark:bg-green-800/50 bg-green-800 dark:text-primary text-white":
                selected,
            }
          )}
        >
          <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
            <TypeIcon
              className={cn(
                "size-3.5 shrink-0 text-green-800 transition-all duration-300",
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

        <div className="flex flex-col grow min-h-0 overflow-y-auto nodrag nowheel select-text cursor-text">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escreva seu texto..."
            className="w-full h-full text-xs! rounded-none bg-neutral-50 text-primary/70 max-h-full min-h-0 rounded-b-md outline-none resize-none border-0 ring-0 focus:ring-0 focus-visible:ring-0 px-2 nodrag nowheel select-text cursor-text placeholder:text-primary/50"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={(e) => e.stopPropagation()}
          />
        </div>

        <div
          className={cn(
            "flex items-center gap-1.5 px-2 py-1 nodrag opacity-50",
            {
              "opacity-100": prompt,
            }
          )}
        >
          <Switch
            id={`system-prompt-text`}
            checked={prompt}
            onCheckedChange={(set) => setPrompt(set)}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
            size="xs"
          />

          <label
            htmlFor={`system-prompt-text`}
            className="text-xs text-neutral-600 dark:text-neutral-400 cursor-pointer select-none"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
          >
            Usar como prompt
          </label>
        </div>
      </NodeWrapper>
    </>
  );
});

TextNode.displayName = "TextNode";
