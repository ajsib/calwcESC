// LeftWedgeThin.tsx
import React from 'react';

interface LeftWedgeThinProps {
  size?: number;
  fillColor?: string; // Prop to specify fill color
}

const LeftWedgeThin: React.FC<LeftWedgeThinProps> = ({ size = 24, fillColor = '#364132' }) => (
  <svg
    fill={fillColor} // Use the fillColor prop for the fill color
    width={`${size}px`}
    height={`${size}px`}
    viewBox="-3.2 -3.2 38.40 38.40"
    version="1.1"
    xmlns="(link unavailable)"
    stroke={fillColor} // Set stroke color to match fill color
    strokeWidth="0.96"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="0.384"
    ></g>
    <g id="SVGRepo_iconCarrier" transform="rotate(180 16 16)">  {/* Rotated by 180 degrees */}
      <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
    </g>
  </svg>
);

export default LeftWedgeThin;
