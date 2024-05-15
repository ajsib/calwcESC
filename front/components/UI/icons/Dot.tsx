import React from 'react';

interface CircleProps {
  size: number; // Diameter of the circle
  color: string; // Color of the circle
}

const Circle: React.FC<CircleProps> = ({ size, color }) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  );
};

export default Circle;
