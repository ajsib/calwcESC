/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const tabsStyle = css`
  display: flex;
  justify-content: space-between; // This will space the tabs equally across the container
  margin-bottom: 1rem;
`;

const tabStyle = css`
  flex-grow: 1; // Each tab will grow equally to fill the container
  border: 1px solid #ccc;
  padding: 1rem 2rem; // Adjust padding as needed
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease; // Smooth transition for hover effects

  &:not(:last-child) {
    margin-right: 0.5rem; // Add space between tabs except the last one
  }

  &:hover {
    background-color: #f7f7f7; // Add hover effect
  }
`;

const Tabs = () => {
  return (
    <div css={tabsStyle}>
      <div css={tabStyle}>Active Tickets</div>
      <div css={tabStyle}>Tasks</div>
      <div css={tabStyle}>Files</div>
    </div>
  );
};

export default Tabs;
