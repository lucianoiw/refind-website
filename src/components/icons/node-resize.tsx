interface NodeResizeIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NodeResizeIcon = ({ className, style }: NodeResizeIconProps) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M0 5H3C4.10457 5 5 4.10457 5 3V0" strokeWidth="2" />
    </svg>
  );
};
