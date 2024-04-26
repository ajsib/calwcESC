import React from 'react';

interface DropDownIconProps {
  size?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const DropDownIcon: React.FC<DropDownIconProps> = ({ size = 24, direction = 'down' }) => {
  const transform = {
    left: 'rotate(90deg)',
    right: 'rotate(-90deg)',
    up: 'rotate(180deg)',
    down: 'rotate(0deg)',
  }[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      transform={transform}
    >
      <title>drop-down</title>
      <desc>Created with sketchtool.</desc>
      <g id="directional" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="drop-down" fill="#000000">
          <polygon id="Shape" points="5 8 12 16 19 8"/>
        </g>
      </g>
    </svg>
  );
};

export default DropDownIcon;
