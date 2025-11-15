import { GptIcon, ClaudeIcon, GeminiIcon, GrokIcon } from "@/components/icons";

export interface IModelProps {
  id: string;
  company: string;
  name: string;
  color: string;
  fill: string;
  icon: React.ReactNode;
  group: "smart" | "cheap";
  new?: boolean;
}

export const models: IModelProps[] = [
  {
    id: "openai/gpt-4o",
    company: "OpenAI",
    name: "GPT-4o",
    color: "bg-teal-500",
    fill: "fill-teal-500",
    icon: <GptIcon className="size-3" />,
    group: "smart",
  },

  {
    id: "openai/gpt-5",
    company: "OpenAI",
    name: "GPT-5",
    color: "bg-teal-500",
    fill: "fill-teal-500",
    icon: <GptIcon className="size-3" />,
    group: "smart",
  },

  {
    id: "openai/gpt-5.1",
    company: "OpenAI",
    name: "GPT-5.1",
    color: "bg-teal-500",
    fill: "fill-teal-500",
    icon: <GptIcon className="size-3" />,
    group: "smart",
    new: true,
  },

  {
    id: "openai/gpt-4o-mini",
    company: "OpenAI",
    name: "GPT-4o-mini",
    color: "bg-teal-500",
    fill: "fill-teal-500",
    icon: <GptIcon className="size-3" />,
    group: "cheap",
  },

  {
    id: "anthropic/claude-opus-4.1",
    company: "Anthropic",
    name: "Claude Opus 4.1",
    color: "bg-orange-500",
    fill: "fill-orange-500",
    icon: <ClaudeIcon className="size-3" />,
    group: "smart",
  },
  {
    id: "anthropic/claude-sonnet-4.5",
    company: "Anthropic",
    name: "Claude Sonnet 4.5",
    color: "bg-orange-500",
    fill: "fill-orange-500",
    icon: <ClaudeIcon className="size-3" />,
    group: "smart",
  },
  {
    id: "anthropic/claude-haiku-4.5",
    company: "Anthropic",
    name: "Claude Haiku 4.5",
    color: "bg-amber-500",
    fill: "fill-amber-500",
    icon: <ClaudeIcon className="size-3" />,
    group: "cheap",
  },

  {
    id: "google/gemini-2.5-flash",
    company: "Google",
    name: "Gemini 2.5 Flash",
    color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    fill: "fill-blue-500",
    icon: <GeminiIcon className="size-3" />,
    group: "smart",
  },

  {
    id: "x-ai/grok-4",
    company: "Google",
    name: "Grok 4",
    color: "bg-neutral-800",
    fill: "fill-neutral-800",
    icon: <GrokIcon className="size-3" />,
    group: "smart",
  },
];

export const get_model_info = (modelId: string): IModelProps | undefined => {
  return models.find((m) => m.id === modelId);
};
