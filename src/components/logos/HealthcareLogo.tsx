/**
 * https://raghunathchava.com
 * Healthcare Organization Logo SVG
 *
 * Heart with cross icon in monochrome
 */
export function HealthcareLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-16 h-16"}
      aria-hidden="true"
    >
      {/* Heart shape */}
      <path
        d="M50 85 C30 70, 10 50, 10 35 C10 20, 20 15, 30 20 C35 15, 40 12, 50 12 C60 12, 65 15, 70 20 C80 15, 90 20, 90 35 C90 50, 70 70, 50 85 Z"
        fill="currentColor"
      />
      {/* Medical cross - white fill on colored background */}
      <rect x="45" y="35" width="10" height="30" fill="white" opacity="0.9" />
      <rect x="35" y="45" width="30" height="10" fill="white" opacity="0.9" />
    </svg>
  );
}
