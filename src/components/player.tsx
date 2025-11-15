"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import { useWavesurfer } from "@wavesurfer/react";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";
import { PauseIcon, PlayIcon } from "./icons";
import { ColorMode } from "@xyflow/react";
import { useTheme } from "next-themes";

interface PlayerProps {
  audioUrl: string;
}

export const Player = ({ audioUrl }: PlayerProps) => {
  const { theme } = useTheme();

  const containerRef = useRef(null);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const colorMode: ColorMode = mounted && theme ? (theme as ColorMode) : "dark";

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    width: 120,
    height: 40,
    waveColor: colorMode === "dark" ? "#737373" : "#9ca3af",
    progressColor: "#a855f7",
    url: audioUrl,
    cursorWidth: 0,
    cursorColor: "rgb(0, 0, 0)",
    normalize: true,

    // plugins: useMemo(() => (isMounted ? [Timeline.create()] : []), [isMounted]),
  });

  const onPlayPause = useCallback(() => {
    if (!wavesurfer) return;

    wavesurfer.playPause();
  }, [wavesurfer]);

  const formatTime = (seconds: number) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  return (
    <>
      <div className="flex items-center">
        <button
          className="flex justify-center w-8 shrink-0"
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="size-6 fill-purple-500" />
          ) : (
            <PlayIcon className="size-6 fill-purple-500" />
          )}
        </button>

        <div className="flex justify-center grow">
          <div ref={containerRef} />
        </div>

        <div className="w-8 text-[0.6rem] font-medium text-zinc-400">
          {isPlaying ? <>{formatTime(currentTime)}</> : <>00:18</>}
        </div>
      </div>
    </>
  );
};
