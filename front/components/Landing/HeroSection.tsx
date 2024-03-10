// ./components/Landing/HeroSection.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroContent from './HeroContent';

const heroSectionStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh; // Adjust based on your design
  background-color: #FBFBFB; // Or any color as per your design
  margin-top: -4rem; // Adjust based on your design
`;

const HeroImage = css`
  background-image: url('/images/landing/landing1.png'); // Replace with your image path
  background-size: cover;
  background-position: center;
  width: 50vw; 
  height: 90vh; 
  aspect-ratio: 1/1; // Ensure the image maintains a 1:1 aspect ratio
`;


const HeroSection = () => (
  <div css={heroSectionStyle}>
    <HeroContent />
    <div css={HeroImage} />

  </div>
);

export default HeroSection;
