/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react'; // Import useEffect for side effect

interface MobileMenuOverlayProps {
  onClose: () => void;
  isVisible: boolean;
}

const overlayContainerStyle = css`
  position: fixed;
  top: 0;
  left: -100%;  // Start off-screen to the left
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1050;  // Ensure it covers other elements as needed
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: left 0.3s ease-in-out;
  overflow: hidden;
`;

const linkStyle = css`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none !important;
  padding: 10px 20px;
  border-bottom: 1px solid white;

  &:last-child {
    border-bottom: none; 
  }

  &:hover {
    text-decoration: underline !important;
  }
`;

const closeButtonStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 4rem;
  color: white;
`;

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ onClose, isVisible }) => {
  const router = useRouter();
  const { asPath, locale } = router;
  const toggleLocale = locale === 'en' ? 'fr' : 'en';
  const languageLabel = locale === 'en' ? 'Français' : 'English';
  const homeText = locale === 'en' ? 'Home' : 'Accueil';
  const aboutText = locale === 'en' ? 'About' : 'Notre mission';
  const servicesText = locale === 'en' ? 'Services' : 'Nos services';
  const loginText = locale === 'en' ? 'Login' : 'Se connecter';

  useEffect(() => {
    // Add overflow: hidden to the body when the overlay is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Reset overflow when overlay is hidden
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <div css={overlayContainerStyle} style={{ left: isVisible ? '0' : '-100%' }}>
      <span css={closeButtonStyle} onClick={onClose}>&times;</span>
      <Link href="/" css={linkStyle}>{homeText}</Link>
      <Link href="/about" css={linkStyle}>{aboutText}</Link>
      <Link href="/services" css={linkStyle}>{servicesText}</Link>
      <Link href={asPath} locale={toggleLocale} css={linkStyle}>{languageLabel}</Link>
      <Link href="/login" css={linkStyle}>{loginText}</Link>
    </div>
  );
};

export default MobileMenuOverlay;
