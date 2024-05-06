/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

interface HeroContentProps {
  isMobile: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isMobile }) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroContentStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(50vw - 1.5rem);
    height: ${isMobile ? '100%' : '100vh'};
    text-align: center;
    background-color: rgba(0, 0, 0, 0.35);
  `;

  const titleStyle = css`
    position: sticky;
    top: 2rem;
    font-size: ${isMobile ? '2.2rem' : 'calc(1.5rem + 2vw)'};
    color: #fff;
    line-height: 1.2;
    padding: 2rem
  `;

  const buttonStyle = css`
  padding: 0.75rem 1.5rem;
  background-color: transparent; 
  color: #fff; 
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.15s, border-color 0.15s; 
  opacity: ${scrolled ? 0 : 1};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  &:hover {
    border-color: #fff;
  }
`;

  const buttonContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  `;

const handleClick = () => {
  const targetSection = document.getElementById('get-started');
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
};

  const handleSecondaryClick = () => {
    router.push('/login');
  };


  const Title = <>{router.locale === 'en' ? <>Experimentation <br /> Services Centre</> : <>Centre de services <br /> d&apos;expérimentation </>}</>;

  return (
    <div css={heroContentStyle}>
      <p css={titleStyle}>{Title}</p>
      <div css={buttonContainerStyle}>
      <div css={[buttonStyle, { border: '1px solid #ccc' }]} onClick={handleClick}>
        Get Started
      </div>
      <div css={[buttonStyle, { '&:hover': { textDecoration: 'underline' } }]} onClick={handleSecondaryClick}>
        Login
      </div>
    </div>
    </div>
  );
};

export default HeroContent;
