/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import HeroContent from './HeroContent';
import useNewsReel, { newsItems } from './NewsReel/NewsReel';
import CardTemplate from './NewsReel/CardTemplate';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex, progressItem, regressItem] = useNewsReel();
  const [visibleIndex, setVisibleIndex] = useState(currentIndex); // State to manage the currently visible image
  const [animation, setAnimation] = useState(fadeIn);

  const handleScroll = () => {
    const position = window.scrollY;
    window.requestAnimationFrame(() => {
      setOffsetY(position);
    });
  };

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

  useEffect(() => {
    if (visibleIndex !== currentIndex) {
      setAnimation(fadeOut);
      const timeout = setTimeout(() => {
        setVisibleIndex(currentIndex);
        setAnimation(fadeIn);
      }, 1000); // Duration of the fade-out animation

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, visibleIndex]);

  const contentContainerStyle = css`
    z-index: 1;
  `;

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    height: ${isMobile ? '35vh' : '100vh'};
    transition: height 0.3s;
    flex-direction: ${isMobile ? 'column' : 'row'};
    position: relative;
    overflow: hidden;
  `;

  const heroImageContainerStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  const heroImageStyle = css`
    animation: ${animation} 1s ease-in-out;
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 0;
  `;

  const newsFeedStyle = css`
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: absolute;
    max-height: calc(100% - 4rem);
    width: 100%;
    height: auto;
    bottom: 0;
    right: 0;
    overflow: hidden;    
  `;

  return (
    <div css={heroSectionStyle}>
      <div css={contentContainerStyle}>
        <HeroContent isMobile={isMobile} />
      </div>
      <div css={heroImageContainerStyle}>
        <Image 
          src={newsItems[visibleIndex].imageUrl} 
          alt="Hero background" 
          layout="fill" 
          objectFit="cover" 
          priority 
          css={heroImageStyle}
        />
        <div css={overlayStyle}></div>
      </div>
      <div css={newsFeedStyle}>
        <CardTemplate progressItem={progressItem} regressItem={regressItem} {...newsItems[currentIndex].props} />
      </div>
    </div>
  );
};

export default HeroSection;
