/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const logoContainerStyle = css`
  display: flex;
  align-items: center;
`;

const logoImageStyle = css`
  height: 4rem;
  width: auto;
`;

const logoTextStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  height: 4rem;
  width: 8rem;
`;

const LogoTag = () => (
  <div css={logoContainerStyle}>
    <img css={logoImageStyle} src="/images/logo-calwc.png" alt="Logo" />
    <span css={logoTextStyle}>CALWC</span>
  </div>
);

export default LogoTag;
