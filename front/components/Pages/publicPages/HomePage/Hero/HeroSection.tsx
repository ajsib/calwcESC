/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import HeroContent from './HeroContent';
import useNewsReel, { newsItems } from './NewsReel/NewsReel';
import CardTemplate from './NewsReel/CardTemplate';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useNewsReel();

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

  const contentContainerStyle = css`
    width: ${isMobile ? '100vw' : '50vw'};
    height: ${isMobile ? '30vh' : '100%'};
    padding-top: ${isMobile ? '4rem' : '0rem'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${isMobile ? 'flex-end' : 'flex-start'};
    background-color: #fbfbfb;
  `;

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    height: ${isMobile ? '35vh' : '40vh'};
    transition: height 0.3s;
    margin-top: -4rem;
    flex-direction: ${isMobile ? 'column' : 'row'};
  `;

  const heroImageStyle = css`
    background-image: url(${newsItems[currentIndex].imageUrl});
    background-size: cover;
    background-position: center;
    width: 50vw;
    height: calc(40vh);
    position: relative;
    transition: background-image 0.6s ease-in-out;
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 100%);
  `;

  const newsFeedStyle = css`
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: absolute;
    max-height: calc(100% - 4rem);
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
      <div css={heroImageStyle} >
        <div css={overlayStyle}></div>
        <div css={newsFeedStyle}>
          <CardTemplate {...newsItems[currentIndex].props} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
