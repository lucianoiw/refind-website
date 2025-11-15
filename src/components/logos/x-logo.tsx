interface XLogoProps {
  className?: string;
}

export const XLogo = ({ className }: XLogoProps) => {
  return (
    <svg
      viewBox="0 0 477 477"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M45.7219 174.429L239.442 457.125H325.551L131.808 174.429H45.7219ZM131.741 331.439L45.6116 457.125H131.786L174.817 394.294L131.741 331.439ZM345.247 19.875L196.366 237.125L239.442 300.001L431.421 19.875H345.247ZM360.841 154.304V457.125H431.421V51.3133L360.841 154.304Z" />
    </svg>
  );
};
