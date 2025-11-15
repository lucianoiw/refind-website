import type { BuiltInEdge, Edge, EdgeTypes } from "@xyflow/react";

import DefaultEdge, { type IDefaultEdge } from "./default.edge";

export const initialEdges = [
  { id: "audio:chat", source: "audio", target: "chat", animated: true },
  { id: "document:chat", source: "document", target: "chat", animated: true },

  { id: "facebook:chat", source: "facebook", target: "chat", animated: true },
  { id: "instagram:chat", source: "instagram", target: "chat", animated: true },
  { id: "linkedin:chat", source: "linkedin", target: "chat", animated: true },
  { id: "text:chat", source: "text", target: "chat", animated: true },
  { id: "tiktok:chat", source: "tiktok", target: "chat", animated: true },
  { id: "twitter:chat", source: "twitter", target: "chat", animated: true },
  { id: "website:chat", source: "website", target: "chat", animated: true },
  { id: "youtube:chat", source: "youtube", target: "chat", animated: true },
] satisfies Edge[];

export const edgeTypes = {
  default: DefaultEdge,
} satisfies EdgeTypes;

export type IAllEdgeType = BuiltInEdge | IDefaultEdge;
