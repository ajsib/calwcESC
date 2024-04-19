// CloseMenu.tsx
import React from 'react';

interface CloseMenuProps {
  size?: number;
}

const CloseMenu: React.FC<CloseMenuProps> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={`${size}px`}
    height={`${size}px`}
  >
    <path d="M9.15625 6.3125 L6.3125 9.15625 L22.15625 25 L6.21875 40.96875 L9.03125 43.78125 L25 27.84375 L40.9375 43.78125 L43.78125 40.9375 L27.84375 25 L43.6875 9.15625 L40.84375 6.3125 L25 22.15625 Z" fill="#1D1D1B"/>
  </svg>
);

export default CloseMenu;
