// components/Shared/Internal/Header/Header.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import HamburgerIcon from '@/components/UI/icons/HamburgerMenu';
import SideMenu from './SideMenu';

const headerStyle = css`
  background-color: #364132;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 68px;
`;

const logoStyle = css`
  color: #fff;
`;

const profileIconStyle = css`
  border-radius: 50%;
  height: 40px;
  width: 40px; // Example size, adjust as needed
  background-color: #ccc;
`;

const hamburgerIconContainer = css`
  cursor: pointer; /* Set cursor to pointer on hover */
  color: #fff; /* Set color to white */
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header css={headerStyle}>
        <div css={hamburgerIconContainer} onClick={toggleMenu}> {/* Add the CSS class to the container div */}
          <HamburgerIcon />
        </div>
        <div css={logoStyle}>
          <span>Title</span>
        </div>
        <div css={profileIconStyle}>
          {/* Profile Icon */}
        </div>
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
