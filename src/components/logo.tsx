import { APP_NAME, cn } from "@/utils";
import { RefindLogo } from "./logos/refind";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-baseline space-x-2", className)}>
      <RefindLogo className="size-6 fill-neutral-950 dark:fill-neutral-50" />
      <span className="text-nowrap text-2xl font-bold">{APP_NAME}</span>
    </div>
  );
}
