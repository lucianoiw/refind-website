interface PlayIconProps {
  className?: string;
}

export const PlayIcon = ({ className }: PlayIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
  );
};
