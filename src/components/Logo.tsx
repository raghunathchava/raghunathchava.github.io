/**
 * https://raghunathchava.com
 * Personal brand logo: enterprise AI, transformation, governance.
 * Mark: hexagon (stability) + flow path (orchestration) + node (AI).
 */
interface LogoProps {
  /** Size in pixels (square). Default 40 */
  size?: number;
  /** Show wordmark "Raghunath Chava" next to mark. Default true in Nav/Footer contexts */
  showWordmark?: boolean;
  /** Optional class for the wrapper (e.g. for gradient text on wordmark) */
  className?: string;
}

export function Logo({ size = 40, showWordmark = false, className = "" }: LogoProps) {
  const s = size;
  const viewBox = "0 0 40 40";
  const gradientId = "logo-gradient-rc";
  const meshPatternId = "logo-mesh-rc";
  const hexClipId = "logo-hex-clip-rc";
  const hexPath = "M20 2L36 11v18L20 38L4 29V11L20 2z";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={s}
        height={s}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={!showWordmark}
        className="flex-shrink-0"
        role="img"
      >
        <title>Raghunath Chava</title>
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1565C0" />
            <stop offset="1" stopColor="#00ACC1" />
          </linearGradient>
          {/* Light grey fabric mesh: diagonal weave only (knit-mesh style, no grid) */}
          <pattern
            id={meshPatternId}
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 0 0 L 5 5" stroke="#d1d5db" strokeWidth="0.2" fill="none" />
            <path d="M 5 0 L 0 5" stroke="#d1d5db" strokeWidth="0.2" fill="none" />
          </pattern>
          <clipPath id={hexClipId}>
            <path d={hexPath} />
          </clipPath>
        </defs>
        {/* Mesh/fabric inside hexagon */}
        <g clipPath={`url(#${hexClipId})`}>
          <rect x="0" y="0" width="40" height="40" fill={`url(#${meshPatternId})`} />
        </g>
        {/* Hexagon - stability, structure */}
        <path
          d={hexPath}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Flow path: bottom-left to top (orchestration / transformation) */}
        <path
          d="M12 26v-6l6-6 4-2 6 2"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Node (AI agent) at top */}
        <circle cx="28" cy="12" r="2.5" fill={`url(#${gradientId})`} />
      </svg>
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent sm:text-2xl">
          Raghunath Chava
        </span>
      )}
    </div>
  );
}
