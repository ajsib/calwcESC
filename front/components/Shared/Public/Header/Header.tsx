/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LogoTag from './LogoTag';
import Navigation from './Navigation';
import FloatingActionButton from '@/components/Shared/Public/FloatingActionButton';
import MobileMenuOverlay from '@/components/Shared/Public/Header/MobileMenuOverlay';
import { useState } from 'react';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
  background: transparent;
  height: 4rem;
`;

const navigationStyle = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

const floatingButtonContainerStyle = css`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 3rem;
    right: 2rem;
    z-index: 1000;
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header css={headerStyle}>
        <LogoTag />
        <div css={navigationStyle}><Navigation /></div>
      </header>
      <MobileMenuOverlay onClose={toggleMenu} isVisible={isMenuOpen} />
      {!isMenuOpen && (
        <div css={floatingButtonContainerStyle}>
          <FloatingActionButton onClick={toggleMenu} />
        </div>
      )}
    </>
  );
};

export default Header;
