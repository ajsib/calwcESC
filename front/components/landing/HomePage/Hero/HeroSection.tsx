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
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex, progressItem, regressItem, setIsPaused] = useNewsReel();
  const [visibleIndex, setVisibleIndex] = useState(currentIndex);
  const [isAnimating, setIsAnimating] = useState(false);

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
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setVisibleIndex(currentIndex);
        setIsAnimating(false);
      }, 500); // Set to match the duration of the animations

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, visibleIndex]);

  const contentContainerStyle = css`
    // width: ${isMobile ? '100vw' : '50vw'};
    // height: ${isMobile ? '30vh' : '100%'};
    // padding-top: ${isMobile ? '4rem' : '0rem'};
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: ${isMobile ? 'flex-end' : 'flex-start'};
    z-index: 1;
  `;

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    height: ${isMobile ? '35vh' : '100vh'};
    transition: height 0.3s;
    // margin-top: -4rem;
    flex-direction: ${isMobile ? 'column' : 'row'};
  `;

  const heroImageContainerStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateY(${offsetY * 0.4}px);
    z-index: -1;
  `;

  const heroImageStyle = css`
    width: 100vw;
    height: calc(100vh);
    position: absolute;
    right: 0;
    top: 0;
  `;

  const overlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.2) 100%);
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
          key={`current-${visibleIndex}`}
          src={newsItems[visibleIndex].imageUrl}
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          css={[heroImageStyle, isAnimating && css`animation: ${fadeOut} 0.5s ease;`]}
        />
        {isAnimating && (
          <Image 
            key={`next-${currentIndex}`}
            src={newsItems[currentIndex].imageUrl}
            alt="Hero background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            css={[heroImageStyle, css`animation: ${fadeIn} 0.5s ease;`]}
          />
        )}
        <div css={overlayStyle}></div>
      </div>
      <div 
        css={newsFeedStyle}
        onMouseEnter={() => {setIsPaused(true)}}
        onMouseLeave={() => {setIsPaused(false)}}
      >
        <CardTemplate 
          progressItem={progressItem} 
          regressItem={regressItem} 
          items={newsItems[currentIndex].props.items} 
          type={newsItems[currentIndex].props.type} 
          currentIndex={currentIndex} 
        />
      </div>
    </div>
  );
};

export default HeroSection;
