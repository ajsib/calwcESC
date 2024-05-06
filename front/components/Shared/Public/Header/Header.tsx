/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import LogoTag from './LogoTag';
import Navigation from './Navigation';
import FloatingActionButton from '@/components/Shared/Public/FloatingActionButton';
import MobileMenuOverlay from '@/components/Shared/Public/Header/MobileMenuOverlay';

interface HeaderProps {
  backgroundColor?: string;
}

const headerStyle = (isScrolled: boolean, backgroundColor?: string) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${isScrolled ? 'var(--primary-color)' : (backgroundColor || 'transparent')};
  transition: background-color 0.3s ease-in-out, height 0.3s ease-in-out;
  height: ${isScrolled ? '3rem' : '4rem'};
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setIsScrolled(position > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header css={headerStyle(isScrolled, backgroundColor)}>
        <LogoTag isScrolled={isScrolled} />
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
