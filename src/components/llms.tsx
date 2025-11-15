import React from "react";
import Marquee from "react-fast-marquee";

import { IModelProps, models } from "@/features/chats";
import { cn } from "@/utils";

export const LlmsMarquee = () => {
  return (
    <Marquee>
      {models.map((model) => (
        <ModelItem key={model.id} {...model} />
      ))}

      {models.map((model) => (
        <ModelItem key={model.id} {...model} />
      ))}

      {models.map((model) => (
        <ModelItem key={model.id} {...model} />
      ))}
    </Marquee>
  );
};

const ModelItem = (model: IModelProps) => {
  return (
    <div className="flex items-center gap-0.5 min-w-0 border-y border-l pl-2 pr-4 py-2">
      <div
        className={cn(
          "flex items-center justify-center rounded-full size-6 shrink-0 [&>svg]:size-4 fill-foreground/40"
        )}
      >
        {model.icon}
      </div>
      <span className="text-foreground/70 text-sm truncate">{model.name}</span>
    </div>
  );
};
