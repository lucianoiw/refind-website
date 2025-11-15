"use client";

import {
  addEdge,
  Background,
  BackgroundVariant,
  ColorMode,
  OnConnect,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import "@xyflow/react/dist/style.css";

import { useTheme } from "next-themes";
import { edgeTypes, IAllEdgeType, initialEdges } from "./edges";
import { IAllNodeType, initialNodes, nodeTypes } from "./nodes";

export const Board = () => {
  return (
    <ReactFlowProvider>
      <BoardContent />
    </ReactFlowProvider>
  );
};

const BoardContent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setViewport } = useReactFlow();
  const { theme } = useTheme();
  const [isReady, setIsReady] = useState(false);

  const [nodes, setNodes, onNodesChange] =
    useNodesState<IAllNodeType>(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState<IAllEdgeType>(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  // Calculate node positions based on container size
  useEffect(() => {
    const updateNodePositions = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const isMobile = width < 768; // breakpoint para mobile (768px = tablet)

      const centerX = width * 0.5;
      const centerY = height * 0.5;

      if (isMobile) {
        const nodeSpacing = 150;

        setNodes((nds) =>
          nds.map((node) => {
            switch (node.id) {
              case "youtube":
                return {
                  ...node,
                  position: { x: centerX - 150, y: centerY + nodeSpacing * 1 },
                };
              case "instagram":
                return {
                  ...node,
                  position: {
                    x: centerX - 170,
                    y: centerY + nodeSpacing * 2.2,
                  },
                };
              case "audio":
                return {
                  ...node,
                  position: { x: centerX - 160, y: centerY + nodeSpacing * 4 },
                };
              case "chat":
                return {
                  ...node,
                  position: {
                    x: centerX + 120,
                    y: centerY + nodeSpacing * 1.5,
                  },
                };
              default:
                return node;
            }
          })
        );

        // Reduz o zoom no mobile
        setViewport({ x: 0, y: 0, zoom: 0.6 });
      } else {
        setNodes((nds) =>
          nds.map((node) => {
            switch (node.id) {
              case "youtube":
                return {
                  ...node,
                  position: {
                    x: centerX - 530,
                    y: centerY - 330,
                  },
                };

              case "instagram":
                return {
                  ...node,
                  position: {
                    x: centerX - 530,
                    y: centerY - 121,
                  },
                };

              case "facebook":
                return {
                  ...node,
                  position: {
                    x: centerX - 530,
                    y: centerY + 125,
                  },
                };

              case "tiktok":
                return {
                  ...node,
                  position: {
                    x: centerX - 290,
                    y: centerY - 330,
                  },
                };

              case "linkedin":
                return {
                  ...node,
                  position: {
                    x: centerX - 290,
                    y: centerY - 27,
                  },
                };

              case "twitter":
                return {
                  ...node,
                  position: {
                    x: centerX - 290,
                    y: centerY + 182,
                  },
                };

              case "document":
                return {
                  ...node,
                  position: {
                    x: centerX - 50,
                    y: centerY - 330,
                  },
                };

              case "website":
                return {
                  ...node,
                  position: {
                    x: centerX - 50,
                    y: centerY - 197,
                  },
                };

              case "audio":
                return {
                  ...node,
                  position: {
                    x: centerX - 50,
                    y: centerY + 13,
                  },
                };

              case "text":
                return {
                  ...node,
                  position: {
                    x: centerX - 50,
                    y: centerY + 153,
                  },
                };

              case "chat":
                return {
                  ...node,
                  position: {
                    x: centerX + 230,
                    y: centerY - node.height! / 2,
                  },
                };
              default:
                return node;
            }
          })
        );

        // Zoom normal no desktop
        setViewport({ x: 0, y: 0, zoom: 1 });
      }

      // Mark as ready after first calculation
      setIsReady(true);
    };

    // Initial calculation - run immediately without delay
    updateNodePositions();

    // Listen to window resize
    window.addEventListener("resize", updateNodePositions);

    return () => {
      window.removeEventListener("resize", updateNodePositions);
    };
  }, [setNodes, setViewport]);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const colorMode: ColorMode = mounted && theme ? (theme as ColorMode) : "dark";

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen min-h-[750px] max-h-[840px]"
    >
      <ReactFlow<IAllNodeType, IAllEdgeType>
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={(_, node) => {
          const center = containerRef.current?.getBoundingClientRect();

          const centerX = (center?.width || 0) * 0.5;
          const centerY = (center?.height || 0) * 0.5;

          // Debug: node positioning
          // console.log(node.id, node.position.x - centerX, node.position.y - centerY,
            // centerX,
            // centerY,
            // node.width,
            // node.height
          // );
        }}
        proOptions={{ hideAttribution: true }}
        panOnScroll={false}
        zoomOnScroll={false}
        preventScrolling={false}
        minZoom={0}
        maxZoom={6}
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.3s",
        }}
        colorMode={colorMode}
      >
        {/* <Background
          variant={BackgroundVariant.Cross}
          bgColor="transparent"

          // bgColor={colorMode === "dark" ? "transparent" : "#f5f5f5"}
          // color={colorMode === "dark" ? "transparent" : "#a3a3a3"}
        /> */}
      </ReactFlow>
    </div>
  );
};
