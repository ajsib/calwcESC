// pages/index.tsx
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import ActionSection from "@/components/Pages/publicPages/HomePage/Action/ActionSection";
import HeroSection from "@/components/Pages/publicPages/HomePage/Hero/HeroSection";
import MissionSection from "@/components/Pages/publicPages/HomePage/Mission/MissionSection";
import Footer from "@/components/Shared/Public/Footer";
import Header from "@/components/Shared/Public/Header/Header";
import Newsfeed from "@/components/Pages/publicPages/HomePage/Newfeed/Newsfeed";

export default function Home() {
  // Scroll positions in vh
  const scrollPositions = [0, 65, 160.5, 300];
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle the scroll effect
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (!isScrolling) {
        const direction = event.deltaY > 0 ? 1 : -1; 
        const newPositionIndex = currentPosition + direction;

        // Check if new position is within bounds
        if (newPositionIndex >= 0 && newPositionIndex < scrollPositions.length) {
          setIsScrolling(true);
          const newScrollPosition = scrollPositions[newPositionIndex] * window.innerHeight / 100;
          window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
          setCurrentPosition(newPositionIndex);
          setTimeout(() => setIsScrolling(false), 500); 
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentPosition, isScrolling]);

  // CSS to hide the scrollbar
  const globalStyle = css`
    body {
      overflow: hidden; // Hide scrollbar and disable native scroll
    }
  `;

  return (
    <div css={globalStyle}>
      <Header />
      <HeroSection />
      <Newsfeed />
      <MissionSection />
      <ActionSection />
      <Footer />
    </div>
  );
}
