/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroContent from './HeroContent';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => setOffsetY(window.scrollY);
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    height: ${isMobile ? '35vh' : '63vh'};
    transition: height 0.3s;
    margin-top: -4rem;
    flex-direction: ${isMobile ? 'column' : 'row'};
  `;

  const contentContainerStyle = css`
    width: ${isMobile ? '100vw' : '50vw'};
    height: ${isMobile ? '30vh' : '100%'};
    padding-top:${isMobile ? '4rem' : '0rem'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${isMobile ? 'flex-end' : 'flex-start'};
    background-color: #fbfbfb;
  `;

  const HeroImage = !isMobile && css`
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
        <HeroContent isMobile={isMobile} />
      </div>
      {!isMobile && <div css={HeroImage} />}
    </div>
  );
};

export default HeroSection;
