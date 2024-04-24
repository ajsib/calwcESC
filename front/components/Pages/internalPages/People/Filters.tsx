/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

const filtersStyle = css`
  position: relative;
  padding: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownStyle = css`
    position: absolute;
    top: 10%;
    right: 1%;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 5rem;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease; /* Fade in/out transition */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    z-index: 200;
    div {
      transition: background-color 0.3s ease;
      padding: 0.5rem;
      &:hover {
        cursor: pointer;
        background-color: #eee;
      }
    }
  `;

  return (
    <div>
      <div css={filtersStyle}>
        <div onClick={toggleDropdown}>Filters</div>
      </div>
      <div css={dropdownStyle}>
        <div>Filter 1</div>
        <div>Filter 2</div>
        <div>Filter 3</div>
      </div>
    </div>
  );
};

export default Filters;
