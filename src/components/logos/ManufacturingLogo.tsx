/**
 * https://raghunathchava.com
 * Manufacturing Company Logo SVG
 *
 * Factory-style silhouette icon in monochrome
 */
export function ManufacturingLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "w-16 h-16"}
      aria-hidden="true"
    >
      {/* Factory building silhouette */}
      <path
        d="M20 80 L20 50 L30 50 L30 40 L40 40 L40 30 L50 30 L50 20 L60 20 L60 30 L70 30 L70 40 L80 40 L80 50 L80 80 Z"
        fill="currentColor"
      />
      {/* Factory chimneys */}
      <rect x="25" y="20" width="8" height="20" fill="currentColor" />
      <rect x="65" y="15" width="8" height="25" fill="currentColor" />
      {/* Windows - using stroke for visibility */}
      <rect
        x="28"
        y="55"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="38"
        y="45"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="48"
        y="35"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="68"
        y="45"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
