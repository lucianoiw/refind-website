import { ColorMode, Handle, Position } from "@xyflow/react";
import { memo, PropsWithChildren, useContext, useSyncExternalStore } from "react";

import { cn } from "@/utils";
import { useTheme } from "next-themes";
import { NodePreviewContext } from "@/components/node-preview";

interface NodeWrapperProps {
  type:
    | "youtube"
    | "instagram"
    | "audio"
    | "chat"
    | "tiktok"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "document"
    | "text"
    | "website"
    | "media"
    | "group";
  selected: boolean;
  className?: string;
  isPreview?: boolean;
}

export const NodeWrapper = memo(
  ({
    selected,
    type,
    children,
    className,
    isPreview,
  }: PropsWithChildren<NodeWrapperProps>) => {
    const { theme } = useTheme();
    const isInPreview = useContext(NodePreviewContext) || isPreview || false;

    const mounted = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false
    );

    const colorMode: ColorMode =
      mounted && theme ? (theme as ColorMode) : "dark";

    return (
      <div
        className={cn(
          "flex flex-col justify-between w-full h-full rounded-md overflow-hidden bg-white dark:bg-neutral-900 transition-all duration-300",
          "ring-2 ring-transparent ring-offset-2 ring-offset-transparent transition-shadow",
          {
            "dark:ring-neutral-700 dark:ring-offset-neutral-900 ring-neutral-300 ring-offset-neutral-100":
              selected,
          },
          className
        )}
      >
        {children}

        {!isInPreview && (
          <>
            {type === "chat" ? (
              <Handle
                type="target"
                position={Position.Left}
                style={{
                  left: "-6px",
                  width: "8px",
                  height: "8px",
                  borderWidth: "2px",
                  borderColor: colorMode === "light" ? "#a3a3a3" : "#737373",
                  backgroundColor: colorMode === "light" ? "#ffffff" : "#0a0a0a",
                }}
              />
            ) : (
              <Handle
                type="source"
                position={Position.Right}
                style={{
                  right: "-10px",
                  width: "8px",
                  height: "8px",
                  borderWidth: "2px",
                  borderColor: colorMode === "light" ? "#a3a3a3" : "#737373",
                  backgroundColor: colorMode === "light" ? "#ffffff" : "#0a0a0a",
                }}
              />
            )}
          </>
        )}
      </div>
    );
  }
);

NodeWrapper.displayName = "NodeWrapper";
