type Props = {
  size?: "sm" | "md" | "lg";
  wordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: "h-7 w-7", text: "text-[16px]" },
  md: { mark: "h-8 w-8 md:h-[34px] md:w-[34px]", text: "text-[19px] md:text-[21px]" },
  lg: { mark: "h-12 w-12", text: "text-[28px]" },
};

export function Logo({ size = "md", wordmark = true, className = "" }: Props) {
  const s = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Seal-style mark */}
      <span className={`relative inline-block flex-shrink-0 ${s.mark}`}>
        <svg
          viewBox="0 0 32 32"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* Outer ring */}
          <circle
            cx="16"
            cy="16"
            r="15.2"
            fill="none"
            stroke="oklch(0.93 0.012 82 / 0.55)"
            strokeWidth="0.6"
          />

          {/* Cardinal tick marks — anchor the seal */}
          <g stroke="oklch(0.84 0.058 75 / 0.75)" strokeWidth="0.55" strokeLinecap="round">
            <line x1="16" y1="0.6" x2="16" y2="2.6" />
            <line x1="16" y1="29.4" x2="16" y2="31.4" />
            <line x1="0.6" y1="16" x2="2.6" y2="16" />
            <line x1="29.4" y1="16" x2="31.4" y2="16" />
          </g>

          {/* Inner micro-ring — adds weight without noise */}
          <circle
            cx="16"
            cy="16"
            r="11.5"
            fill="none"
            stroke="oklch(0.93 0.012 82 / 0.18)"
            strokeWidth="0.4"
          />

          {/* Hairline through middle (architectural anchor) */}
          <line
            x1="9"
            y1="20"
            x2="23"
            y2="20"
            stroke="oklch(0.93 0.012 82 / 0.45)"
            strokeWidth="0.55"
          />

          {/* Italic comma — the brand signature, hand-drawn */}
          <path
            d="M 17 11.2
               C 14.9 11.2, 14.6 14.2, 16.2 14.5
               C 16.2 16.4, 15.1 18.3, 13 19.2"
            fill="none"
            stroke="oklch(0.84 0.058 75)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {wordmark && (
        <span
          className={`font-display font-medium leading-none tracking-[-0.02em] ${s.text}`}
        >
          Maison Noir
          <span className="ml-px italic-serif text-champagne">,</span>
        </span>
      )}
    </span>
  );
}
