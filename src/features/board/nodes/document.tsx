import { memo } from "react";
import type { Node, NodeProps } from "@xyflow/react";

import { cn } from "@/utils";

import { NodeWrapper } from "../components/node-wrapper";
import { INode } from "../types";
import { DocumentIcon, DocumentPdfIcon } from "@/components/icons";
import { FileTextIcon } from "lucide-react";

export type IDocumentNode = Node<INode>;

export const DocumentNode = memo(({ selected }: NodeProps<IDocumentNode>) => {
  const avatar = "/avatar-document.avif";

  const label = "Roteiro Semanal 1-7";

  return (
    <NodeWrapper type="document" selected={selected}>
      <div
        className={cn(
          "flex justify-between items-center w-full max-w-full h-7 shrink-0 dark:bg-amber-500/20 bg-amber-500/20 text-amber-500 transition-all duration-300",
          {
            "dark:bg-amber-500/50 bg-amber-500 dark:text-primary text-white":
              selected,
          }
        )}
      >
        <div className="flex gap-2 items-center max-w-full overflow-hidden px-2">
          <FileTextIcon
            className={cn(
              "size-3.5 shrink-0 text-amber-500 transition-all duration-300 rotate-1",
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

      <div className="flex flex-col gap-2 p-2 dark:bg-neutral-800 bg-white text-neutral-500 text-xs transition-all duration-300">
        <div className="flex items-center gap-2">
          <DocumentPdfIcon className="dark:text-amber-500 text-amber-500" />

          <div className="flex flex-col truncate">
            <span className="text-xs text-neutral-400 font-medium overflow-hidden text-ellipsis">
              checklist-imprimivel.pdf
            </span>

            <span className="text-[0.6rem]">333 kb</span>
          </div>
        </div>

        <div className="line-clamp-2">
          Etapas, templates de gancho, lista de verificação, calendário semanal.
        </div>
      </div>
    </NodeWrapper>
  );
});

DocumentNode.displayName = "DocumentNode";
