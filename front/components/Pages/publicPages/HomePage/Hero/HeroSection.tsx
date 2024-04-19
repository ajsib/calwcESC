/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroContent from './HeroContent';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    height: 63vh;
    transition: height 0.3s;
    margin-top: -4rem
  `;

  const contentContainerStyle = css`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #fbfbfb;
  `;

  const HeroImage = css`
    background-image: url("/images/landing/landing1-2.png");
    background-size: cover;
    background-position: center;
    width: 50vw;
    height: calc(63vh + 4rem);
    transform: translateY(${offsetY * 0.4}px);
    transition: transform 0s ease-out, height 0s;
    aspect-ratio: 1/1;
    z-index: -1;
    right: 0;
    margin-top: -4rem;
  `;

  return (
    <div css={heroSectionStyle}>
      <div css={contentContainerStyle}>
        <HeroContent />
      </div>
      <div css={HeroImage} />
    </div>
  );  
};

export default HeroSection;
