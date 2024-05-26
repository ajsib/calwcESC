// components/Pages/internalPages/Dashboard/ModuleNavigation.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';


const moduleNavigationStyle = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
`;

// Define the styles for a row of navigation items
const navigationRowStyle = css`
  display: flex;
  gap: 0.5rem;
  height: calc(50%);
`;

// Function to calculate the width based on the parent container
const getProportionalWidth = (widthPercentage: number) => css`
  width: ${widthPercentage}%;
`;

// Navigation item base styles
const navigationItemBaseStyle = css`
  border: 1px solid #ddd;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer; // Pointer on hover
  transition: transform 0.2s ease; // Smooth transition for hover effects
  &:hover {
    transform: translateY(-1px);
  }
`;

const ModuleNavigation = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const ticketWidth = 40;
  const pmWidth = 60;
  const filesWidth = 55;
  const teamWidth = 45;

  return (
    <div css={moduleNavigationStyle}>
      <div css={navigationRowStyle}>
        <div css={[navigationItemBaseStyle, getProportionalWidth(ticketWidth)]} onClick={() => handleNavigation('/tickets')}>Tickets</div>
        <div css={[navigationItemBaseStyle, getProportionalWidth(pmWidth)]} onClick={() => handleNavigation('/project-management')}>Project Management</div>
      </div>
      <div css={navigationRowStyle}>
        <div css={[navigationItemBaseStyle, getProportionalWidth(filesWidth)]} onClick={() => handleNavigation('/files')}>Files</div>
        <div css={[navigationItemBaseStyle, getProportionalWidth(teamWidth)]} onClick={() => handleNavigation('/team')}>Team</div>
      </div>
    </div>
  );
};

export default ModuleNavigation;