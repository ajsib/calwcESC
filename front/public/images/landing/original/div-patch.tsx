import React from 'react';

interface SVGComponentProps {
  width?: number;
  height?: number;
  scale?: number;
  borderColor?: string;  // Optional border color prop
  borderWidth?: number;  // Optional border width prop
}

const SVGComponent: React.FC<SVGComponentProps> = ({
  width = 316,
  height = 226,
  scale = 1,
  borderColor = 'black',  // Default border color
  borderWidth = 2,        // Default border width
}) => {
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={scaledWidth + borderWidth * 2}  
      height={scaledHeight + borderWidth * 2}  
      viewBox={`${-borderWidth} ${-borderWidth} ${width + borderWidth * 2} ${height + borderWidth * 2}`}  // Adjust viewbox for border
      version="1.0"
    >
      <path fill="#209" d="M0,113 158,0 316,113 158,226"/>
      <path fill="#C00" d="m57.35,72h201.33L158,0zm0,82 100.67,72 100.67-72"/>
    </svg>
  );
};

export default SVGComponent;
