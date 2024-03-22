/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link'; // Import the Link component from Next.js

const navigationStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  z-index: 10;

  @media (max-width: 768px) { 
    position: absolute; // Position the navigation absolutely within the header
    top: 100%; // Align the top of the navigation with the bottom of the header
    right: 0; // Align the navigation to the right
    flex-direction: column;
  }
`;

const linkStyle = css`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none !important; /* Ensure text-decoration is none */
  &:hover {
    text-decoration: underline !important; /* Apply underline on hover, ensure it's applied with !important if necessary */
  }
`;

const Navigation = () => (
  <nav css={navigationStyle}>
    <Link href="/" css={linkStyle}>Home</Link>
    <Link href="/about" css={linkStyle}>About</Link>
    <Link href="/services" css={linkStyle}>Services</Link>
    <Link href="/fr/" css={linkStyle}>Français</Link>
    <Link href="/login" css={linkStyle}>Login</Link>
  </nav>
);

export default Navigation;
