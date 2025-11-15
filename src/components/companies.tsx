import { cn } from "@/utils";
import { AnthropicLogo } from "./logos/anthropic-logo";
import { GoogleLogo } from "./logos/google-logo";
import { MetaLogo } from "./logos/meta-logo";
import { OpenAiLogo } from "./logos/openai-logo";
import { XLogo } from "./logos/x-logo";

export const Companies = ({ className }: { className?: string }) => {
  return (
    <div className="grid-wrapper">
      <div
        className={cn(
          "flex flex-col gap-3 grid-span-inner py-6 lg:py-10",
          className
        )}
      >
        <div className="text-xs text-center text-muted-foreground text-balance">
          Impulsionado pelas melhores IAs do mundo
        </div>

        <div className="inline-flex items-center justify-center gap-y-3 gap-x-5 md:gap-10 flex-wrap mx-auto fill-foreground/80">
          <OpenAiLogo className="shrink-0 h-5" />
          <AnthropicLogo className="shrink-0 h-3" />
          <GoogleLogo className="shrink-0 h-5" />
          <MetaLogo className="shrink-0 h-4" />
          <XLogo className="shrink-0 h-5" />
        </div>
      </div>
    </div>
  );
};
