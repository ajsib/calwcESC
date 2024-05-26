/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Keyframes, css, keyframes } from '@emotion/react';
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
  const [currentIndex, setCurrentIndex, progressItem, regressItem, setIsPaused] = useNewsReel();
  const [visibleIndex, setVisibleIndex] = useState(currentIndex); 
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [imageAnimation, setImageAnimation] = useState<Keyframes | null>(null);

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
      setNextIndex(currentIndex);
      setImageAnimation(fadeOut);
      const timeout = setTimeout(() => {
        setVisibleIndex(currentIndex);
        setNextIndex(null);
        setImageAnimation(fadeIn);
      }, 500); // Set to match the duration of the fade-out animation

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
    background-color: black;
  `;

  const heroImageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${imageAnimation} 0.5s ease-in-out;
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
    position: absolute;
    max-height: calc(100% - 4rem);
    width: 100%;
    height: auto;
    bottom: 0;
    right: 0;
    overflow: hidden;
    color: #fff;
  `;

  return (
    <div css={heroSectionStyle}>
      <div css={contentContainerStyle}>
        <HeroContent isMobile={isMobile} />
      </div>
      <div css={heroImageContainerStyle}>
        {nextIndex !== null && (
          <Image 
            key={`next-${nextIndex}`}
            src={newsItems[nextIndex].imageUrl}
            alt="Hero background next"
            layout="fill"
            objectFit="cover"
            priority
            css={[heroImageStyle, css`animation: ${fadeOut} 0.5s ease-in-out;`]}
          />
        )}
        <Image 
          key={`visible-${visibleIndex}`}
          src={newsItems[visibleIndex].imageUrl}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority 
          css={[heroImageStyle, css`animation: ${fadeIn} 0.5s ease-in-out;`]}
        />
        <div css={overlayStyle}></div>
      </div>
      <div 
        css={newsFeedStyle}
        onMouseEnter={() => {setIsPaused(true); console.log('paused')}}
        onMouseLeave={() => {setIsPaused(false); console.log('unpaused')}}
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
