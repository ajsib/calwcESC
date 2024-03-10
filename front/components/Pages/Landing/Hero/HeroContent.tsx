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
  overflow: hidden; // Prevents any overflow of children outside this div

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
  }
`;

const titleStyle = css`
  font-size: calc(1.5rem + 1.5vw); // Combines a base size with scalability
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; // Adds an ellipsis if text overflows
  @media (max-width: 768px) {
    font-size: calc(1rem + 3vw); // Increase scalability factor on smaller screens
    white-space: normal; // Allows text wrapping on smaller screens
  }
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
