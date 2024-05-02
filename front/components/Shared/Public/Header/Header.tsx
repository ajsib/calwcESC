/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LogoTag from './LogoTag';
import Navigation from './Navigation';
import FloatingActionButton from '@/components/Shared/Public/FloatingActionButton';
import MobileMenuOverlay from '@/components/Shared/Public/Header/MobileMenuOverlay';
import { useState } from 'react';

interface HeaderProps {
  backgroundColor?: string; // Make backgroundColor prop optional
}

const headerStyle = (backgroundColor?: string) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
  background: ${backgroundColor || 'transparent'}; /* Use the passed background color or default to transparent */
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

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header css={headerStyle(backgroundColor)}>
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
