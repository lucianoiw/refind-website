"use client";

import {
  Background,
  ColorMode,
  Node,
  Edge,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { INode } from "@/features/board";

import "@xyflow/react/dist/style.css";

import { IAllEdgeType, edgeTypes } from "@/features/board/edges";
import { IAllNodeType, nodeTypes } from "@/features/board/nodes";

export default function NodeExample({
  nodes: receivedNodes,
  edges: receivedEdges = [],
}: {
  nodes: Node<INode>[];
  edges?: IAllEdgeType[];
}) {
  const { theme } = useTheme();

  const [nodes, , onNodesChange] = useNodesState<IAllNodeType>(receivedNodes);

  const [edges, , onEdgesChange] = useEdgesState<IAllEdgeType>(receivedEdges);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const colorMode: ColorMode = mounted && theme === "light" ? "light" : "dark";

  return (
    <div className="size-full">
      <ReactFlowProvider>
        <ReactFlow<IAllNodeType, IAllEdgeType>
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          edgeTypes={edgeTypes}
          proOptions={{ hideAttribution: true }}
          panOnScroll={false}
          zoomOnScroll={false}
          preventScrolling={false}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          colorMode={colorMode}
          fitView
        >
          <Background
            bgColor={colorMode === "dark" ? "#171717" : "#f5f5f5"}
            color={colorMode === "dark" ? "#404040" : "#a3a3a3"}
          />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
