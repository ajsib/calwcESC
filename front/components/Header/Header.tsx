/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LogoTag from './LogoTag';
import Navigation from './Navigation';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  z-index: 10;
  background: transparent;
`;

const Header = () => (
  <header css={headerStyle}>
    <LogoTag />
    <Navigation />
  </header>
);

export default Header;
