import { WaypointsIcon } from "lucide-react";

import { APP_NAME, cn } from "@/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <WaypointsIcon className="size-6" />
      <span className="text-nowrap text-2xl font-bold">{APP_NAME}</span>
    </div>
  );
}
