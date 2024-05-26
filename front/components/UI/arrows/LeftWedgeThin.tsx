// LeftWedgeThin.tsx
import React from 'react';

interface LeftWedgeThinProps {
    size?: number;
    color?: string;
}

const LeftWedgeThin: React.FC<LeftWedgeThinProps> = ({ size = 24, color='#364132' }) => (
    <svg
      fill={color}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="-3.2 -3.2 38.40 38.40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#364132"
      strokeWidth="0.00032"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.384"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M23.511 31.975c0.271 0 0.549-0.107 0.757-0.316 0.417-0.417 0.417-1.098 0-1.515l-14.258-14.264 14.050-14.050c0.417-0.417 0.417-1.098 0-1.515s-1.098-0.417-1.515 0l-14.807 14.807c-0.417 0.417-0.417 1.098 0 1.515l15.015 15.022c0.208 0.208 0.486 0.316 0.757 0.316z"></path>
      </g>
    </svg>
);

export default LeftWedgeThin;
