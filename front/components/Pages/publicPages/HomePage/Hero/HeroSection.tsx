/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroContent from './HeroContent';
import { useState, useEffect } from 'react';
import useNewsReel, { newsItems } from './NewsReel';

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
    height: ${isMobile ? '35vh' : '50vh'};
    transition: height 0.3s;
    margin-top: -4rem;
    flex-direction: ${isMobile ? 'column' : 'row'};
  `;

  const heroImageStyle = css`
    background-image: url(${newsItems[currentIndex].imageUrl});
    background-size: cover;
    background-position: center;
    width: 50vw;
    height: calc(50vh);
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
  position: absolute;
  padding: 1rem;
  padding-bottom: 2rem;
  bottom: 0;
  right: 0;
  width: calc(45% - 2rem);
  padding-right: 2rem;
  height: 20%;
  max-width: calc(100% - 2rem);
  max-height: 55%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  line-height: 1.6;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: start;
  text-align: left;
  overflow: hidden;
  transition: width 0.6s ease-in-out, height 0.6s ease-in-out, background 0.6s ease-in-out, opacity 0.6s ease-in-out;
  z-index: 200;
  font-size: 16px;
  &:hover {
    width: calc(90% - 4rem);
    height: 80%;
    background: rgba(0, 0, 0, 0.8);
    h1, h2, h3, h4, h5, h6 {
      font-size: 22px;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: white; 
    font-size: 1.8rem; 
    transition: font-size 0.4s ease-in-out; 
  }
  a {
    color: white;
  }
  ul {
    grid-row: 3;
    overflow: hidden;
  }
`;

  return (
    <div css={heroSectionStyle}>
      <div css={contentContainerStyle}>
        <HeroContent isMobile={isMobile} />
      </div>
      <div css={heroImageStyle} >
        <div css={newsFeedStyle} >
          {newsItems[currentIndex].content()}
        </div>
        <div css={overlayStyle}></div>
      </div>
    </div>
  );
};

export default HeroSection;
