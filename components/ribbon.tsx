export default function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 44"
      className={`h-10 w-[320px] max-w-full -scale-x-100 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 10C60 10 78 2 140 2c62 0 90 8 178 8"
        stroke="var(--color-wood-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M2 24C60 24 78 16 140 16c62 0 90 8 178 8"
        stroke="var(--color-wood-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M2 38C60 38 78 30 140 30c62 0 90 8 178 8"
        stroke="var(--color-wood-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
