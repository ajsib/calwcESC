// ./components/Landing/HeroContent.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const heroContentStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50vw;
  text-align: left;
  color: #000; 
`;

const titleStyle = css`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.3;
  margin-left: -0rem;
`;

const imageStyle = css`
  margin-left: 3rem; 
`;

const HeroContent = () => (
  <div css={heroContentStyle}>
    <p css={titleStyle}>Experimentation <br/> Services Centre</p>
    <img css={imageStyle} src="/images/landing/div-patch.png" alt="Division Logo" />
  </div>
);

export default HeroContent;
