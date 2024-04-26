import React from 'react';

interface FilterIconProps {
  size: number; // Size of the icon
}

const FilterIcon: React.FC<FilterIconProps> = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18H14V16H10V18ZM4 6V8H20V6H4ZM7 13H17V11H7V13Z" fill="currentColor"/>
    </svg>
  );
};

export default FilterIcon;
