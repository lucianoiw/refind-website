import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/utils";

interface MarkdownTextProps {
  content: string;
  className?: string;
}

/**
 * Markdown renderer using react-markdown
 * Supports: GFM (tables, strikethrough, task lists), code blocks, lists, etc.
 */
export const MarkdownText = memo(
  ({ content, className = "" }: MarkdownTextProps) => {
    return (
      <div className={cn("markdown-content leading-relaxed", className)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Paragraphs - compact spacing
            p: ({ children }) => (
              <p className="my-1 leading-relaxed">{children}</p>
            ),

            // Headings
            h1: ({ children }) => (
              <h1 className="text-lg font-bold my-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-base font-bold my-1.5">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-sm font-bold my-1">{children}</h3>
            ),

            // Lists - compact with proper semantics
            ul: ({ children }) => (
              <ul className="my-1 pl-5 space-y-0.5 list-disc list-outside marker:text-primary/50">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-1 pl-5 space-y-0.5 list-decimal list-outside marker:text-primary/50">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed pl-1">{children}</li>
            ),

            // Code blocks
            pre: ({ children }) => (
              <pre className="bg-neutral-800 dark:bg-neutral-900 rounded p-2 my-1.5 overflow-x-auto">
                {children}
              </pre>
            ),
            code: (props) => {
              const { children, className, ...rest } = props;
              const isInline = !className?.includes("language-");
              return isInline ? (
                <code className="bg-neutral-200 dark:bg-neutral-800 px-1 py-0.5 rounded text-xs font-mono">
                  {children}
                </code>
              ) : (
                <code className="text-xs text-neutral-100 leading-relaxed">
                  {children}
                </code>
              );
            },

            // Emphasis
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),
            em: ({ children }) => <em className="italic">{children}</em>,

            // Blockquote
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-primary/30 pl-3 my-1.5 text-primary/70 italic">
                {children}
              </blockquote>
            ),

            // Line break
            br: () => <br />,

            hr: () => (
              <hr className="my-3 border-neutral-300 dark:border-neutral-700" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
);

MarkdownText.displayName = "MarkdownText";
