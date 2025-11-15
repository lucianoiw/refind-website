import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";

import { ChatNode, IChatNode } from "./chat/chat";
import { AudioNode, IAudioNode } from "./audio";
import { DocumentNode, IDocumentNode } from "./document";
import { FacebookNode, IFacebookNode } from "./facebook";
import { GroupNode, IGroupNode } from "./group";
import { InstagramNode, IInstagramNode } from "./instagram";
import { LinkedinNode, ILinkedinNode } from "./linkedin";
import { MediaNode, IMediaNode } from "./media";
import { TextNode, ITextNode } from "./text";
import { TiktokNode, ITiktokNode } from "./tiktok";
import { TwitterNode, ITwitterNode } from "./twitter";
import { WebsiteNode, IWebsiteNode } from "./website";
import { YoutubeNode, IYoutubeNode } from "./youtube";

import { INode } from "../types";

export const NODE_WIDTH = 200;

export const initialNodes: Node<INode>[] = [
  {
    id: "facebook",
    type: "facebook",
    position: { x: 880, y: 450 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "audio",
    type: "audio",
    position: { x: 10, y: 80 },
    width: NODE_WIDTH,
    data: { label: "drag me!" },
  },
  {
    id: "document",
    type: "document",
    position: { x: 10, y: 260 },
    width: NODE_WIDTH,
    data: { label: "drag me!" },
  },

  {
    id: "instagram",
    type: "instagram",
    position: { x: 880, y: 180 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "linkedin",
    type: "linkedin",
    position: { x: 880, y: 50 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "text",
    type: "text",
    position: { x: 400, y: 635 },
    width: 200,
    height: 160,
    data: { label: "wire" },
  },

  {
    id: "tiktok",
    type: "tiktok",
    position: { x: 880, y: 430 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "twitter",
    type: "twitter",
    position: { x: 880, y: 445 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "website",
    type: "website",
    position: { x: 880, y: 500 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  {
    id: "youtube",
    type: "youtube",
    position: { x: 830, y: 110 },
    width: NODE_WIDTH,
    data: { label: "wire" },
  },

  // {
  //   id: "media",
  //   type: "media",
  //   position: { x: 830, y: 110 },
  //   width: NODE_WIDTH,
  //   data: { label: "wire" },
  // },

  {
    id: "chat",
    type: "chat",
    position: { x: 1300, y: 220 },
    width: 350,
    height: 550,
    data: { label: "with React Flow" },
  },
] satisfies Node[];

export const nodeTypes = {
  chat: ChatNode,
  audio: AudioNode,
  document: DocumentNode,
  facebook: FacebookNode,
  group: GroupNode,
  instagram: InstagramNode,
  linkedin: LinkedinNode,
  media: MediaNode,
  text: TextNode,
  tiktok: TiktokNode,
  twitter: TwitterNode,
  website: WebsiteNode,
  youtube: YoutubeNode,
} satisfies NodeTypes;

export type IAllNodeType =
  | BuiltInNode
  | IChatNode
  | IAudioNode
  | IDocumentNode
  | IFacebookNode
  | IGroupNode
  | IInstagramNode
  | ILinkedinNode
  | IMediaNode
  | ITextNode
  | ITiktokNode
  | ITwitterNode
  | IWebsiteNode
  | IYoutubeNode;
