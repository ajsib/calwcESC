import React from 'react';

interface HamburgerMenuProps {
  size?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ size = 24 }) => (
  <svg
    fill="#fff"
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
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
      <rect fill="#fff" height="1" width="11" x="0.5" y="5.5"/>
      <rect fill="#fff" height="1" width="11" x="0.5" y="2.5"/>
      <rect fill="#fff" height="1" width="11" x="0.5" y="8.5"/>
    </g>
  </svg>
);

export default HamburgerMenu;
