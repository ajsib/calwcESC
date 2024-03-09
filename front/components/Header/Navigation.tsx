/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navigationStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  z-index: 10;
`;

const linkStyle = css`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => (
  <nav css={navigationStyle}>
    <a css={linkStyle} href="/services">Services</a>
    <a css={linkStyle} href="/connect">Connect</a>
    <a css={linkStyle} href="/library">Library</a>
    <a css={linkStyle} href="/about">About</a>
    <a css={linkStyle} href="/login">Login</a>
  </nav>
);

export default Navigation;
