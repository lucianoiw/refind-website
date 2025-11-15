"use client";

import { nodeTypes } from "@/features/board/nodes";
import { createContext } from "react";

export const NodePreviewContext = createContext(false);

export default function NodePreview({
  nodeId,
  width,
  height,
}: {
  nodeId: string;
  width?: number;
  height?: number;
}) {
  const NodeComponent = nodeTypes[nodeId as keyof typeof nodeTypes];

  if (!NodeComponent) {
    return null;
  }

  return (
    <NodePreviewContext.Provider value={true}>
      <div
        className="flex items-center justify-center w-full h-full"
        style={{
          ...(width && { maxWidth: width }),
          ...(height && { maxHeight: height }),
        }}
      >
        <NodeComponent
          id={nodeId}
          type={nodeId}
          data={{ label: nodeId }}
          selected={false}
          isConnectable={false}
          selectable={false}
          deletable={false}
          draggable={false}
          zIndex={0}
          dragging={false}
          positionAbsoluteX={0}
          positionAbsoluteY={0}
        />
      </div>
    </NodePreviewContext.Provider>
  );
}
