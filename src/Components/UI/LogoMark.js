// Terminal-prompt mark (› and a cursor bar) on a dark tile with a faint dot grid.
// Same drawing as public/favicon.svg; the cursor blinks via CSS in the nav.
const LogoMark = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 512 512" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="logo-dots" width="48" height="48" patternUnits="userSpaceOnUse">
        <circle cx="24" cy="24" r="3.2" fill="#c5f36b" opacity="0.16" />
      </pattern>
      <radialGradient id="logo-glow" cx="0.45" cy="0.5" r="0.55">
        <stop offset="0" stopColor="#c5f36b" stopOpacity="0.28" />
        <stop offset="1" stopColor="#c5f36b" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="512" height="512" rx="116" fill="#0b0d10" />
    <rect width="512" height="512" rx="116" fill="url(#logo-dots)" />
    <rect width="512" height="512" rx="116" fill="url(#logo-glow)" />
    <path
      d="M 140 160 L 252 256 L 140 352"
      fill="none"
      stroke="#c5f36b"
      strokeWidth="46"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect className="logo-cursor" x="286" y="314" width="104" height="42" rx="10" fill="#c5f36b" />
    <rect width="512" height="512" rx="116" fill="none" stroke="#c5f36b" strokeOpacity="0.22" strokeWidth="8" />
  </svg>
);

export default LogoMark;
