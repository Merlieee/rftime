import { useId, useRef, useState, useEffect } from 'react';

export default function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  crMax = 4,
  crMin = 0.4,
  className = '',
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const cols = Math.ceil(dimensions.width / width);
  const rows = Math.ceil(dimensions.height / height);

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const dotX = col * width + cx + x;
    const dotY = row * height + cy + y;
    // t=0 at top-left → largest, t=1 at bottom-right → smallest
    const t = dimensions.width && dimensions.height
      ? (dotX / dimensions.width + dotY / dimensions.height) / 2
      : 0;
    const r = crMax * (1 - t) + crMin * t;
    return { x: dotX, y: dotY, r };
  });

  const gradId = `${id}-brand`;

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full -z-10 ${className}`}
      {...props}
    >
      <defs>
        <radialGradient
          id={gradId}
          cx={0} cy={0}
          r={Math.hypot(dimensions.width, dimensions.height)}
          gradientUnits="userSpaceOnUse"
          fx={0} fy={0}
        >
          <stop offset="0%" stopColor="rgb(255, 10, 148)" />
          <stop offset="32%" stopColor="rgb(120, 40, 255)" />
          <stop offset="68%" stopColor="rgb(2, 158, 255)" />
          <stop offset="100%" stopColor="rgb(12, 233, 200)" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r={dot.r} fill={`url(#${gradId})`} />
      ))}
    </svg>
  );
}
