import React from 'react';

/**
 * Natively logomark — "N" letterform inscribed in a circle.
 * Rendered as inline SVG so it inherits `color` (currentColor) and
 * can be styled freely with className.
 */
export const NativelyLogoMark: React.FC<{
    size?: number;
    className?: string;
}> = ({ size = 18, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        {/* Outer circle */}
        <circle
            cx="50"
            cy="50"
            r="47"
            stroke="currentColor"
            strokeWidth="5"
        />

        {/*
          The "N" lettermark — three strokes:
            Left vertical bar
            Diagonal stroke (top-left → bottom-right)
            Right vertical bar
          All strokes use round caps and joins to keep it crisp at small sizes.
        */}

        {/* Left vertical bar */}
        <line
            x1="26" y1="22"
            x2="26" y2="78"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
        />

        {/* Diagonal */}
        <line
            x1="26" y1="22"
            x2="74" y2="78"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
        />

        {/* Right vertical bar */}
        <line
            x1="74" y1="22"
            x2="74" y2="78"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
        />
    </svg>
);
