export type IChatMessageStatus =
  | "pending"
  | "streaming"
  | "completed"
  | "failed"
  | "cancelled"
  | "timeout";

export interface IChat {
  id: string;

  title: string | null;

  lastModel: string | null;

  createdAt: Date;
  updatedAt: Date;
}

export interface IChatMessage {
  id: string;

  status: IChatMessageStatus;

  role: string;
  content: string;
  model: string | null;
  webSearch?: boolean;
  error?: string | null;

  contextUsed?: unknown;

  tokensInput?: number;
  tokensOutput?: number;
  creditsUsed?: number;

  createdAt: Date;

  chatId: string;

  user?: {
    id: string;
    name: string;
    image: string | null;
  } | null;
}

export interface ICreateChatMessage {
  role: string;
  content: string;

  status?: IChatMessageStatus;
  model?: string;
  webSearch?: boolean;
  tokens?: number;
  creditsUsed?: number;
}

export interface IChatMeta {
  hasOlder: boolean;
  cursor: string | null;
}

export interface IChatWithMessages {
  chatId: string;
  messages: IChatMessage[];
  cursor: string | null;
  hasOlder: boolean;
}

export interface IChatStore {
  // Lista de chats organizados por nodeId
  chats: Record<string, IChat[]>;

  // ChatId ativo por nodeId
  activeChatId: Record<string, string | null>;

  // Mensagens organizadas por chatId
  messages: Record<string, IChatMessage[]>;

  // Chats sendo carregados
  loadingChats: Set<string>;

  // Chats com erro
  errorChats: Record<string, string>;

  chatMeta: Record<string, IChatMeta>;

  // Gerenciar chat ativo
  setActiveChat: (nodeId: string, chatId: string | null) => void;

  // Criar chat temporário
  createTemporaryChat: (nodeId: string) => string;

  // Carregar mensagens do back
  loadMessages: (
    boardId: string,
    nodeId: string,
    chatId: string
  ) => Promise<void>;

  hydrateMessages: (
    chatId: string,
    messages: IChatMessage[],
    meta: IChatMeta
  ) => void;

  loadOlderMessages: (
    boardId: string,
    nodeId: string,
    chatId: string
  ) => Promise<void>;

  // Adicionar mensagem (otimista + persist)
  addMessage: (
    boardId: string,
    nodeId: string,
    chatId: string | null,
    message: ICreateChatMessage,
    onChatCreated?: (nodeId: string, chat: IChat) => void
  ) => Promise<void>;

  // Stream de AI (chunks incrementais)
  streamChunk: (
    boardId: string,
    nodeId: string,
    chatId: string,
    messageId: string,
    chunk: string
  ) => void;

  // Limpar mensagens de um chat específico
  clearChat: (boardId: string, nodeId: string, chatId: string) => void;
}
