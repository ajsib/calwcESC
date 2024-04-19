/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import CloseIcon from '@/components/UI/icons/CloseIcon';
import { MouseEvent } from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const sideMenuStyle = (isOpen: boolean) => css`
  background-color: #fff;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  animation: ${isOpen ? `${slideIn} 0.3s ease-out forwards` : `${slideOut} 0.3s ease-out forwards`};
  border-right: 1px solid #ccc; 
`;

const closeIconStyle = css`
  position: absolute;
  top: 16px;
  right: 12px;
  cursor: pointer; // Change the mouse cursor on hovering over the icon
`;

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent event bubbling
    onClose(); // Call the onClose function when the close icon is clicked
  };

  return (
    <div css={sideMenuStyle(isOpen)}>
      <div css={closeIconStyle} onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default SideMenu;
