// pages/index.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ActionSection from "@/components/Pages/publicPages/HomePage/Action/ActionSection"
import HeroSection from "@/components/Pages/publicPages/HomePage/Hero/HeroSection";
import MissionSection from "@/components/Pages/publicPages/HomePage/Mission/MissionSection";
import Footer from "@/components/Shared/Public//Footer";
import Header from "@/components/Shared/Public//Header/Header";
import Newsfeed from "@/components/Pages/publicPages/HomePage/Newfeed/Newsfeed";

export default function Home() {

  const smoothScroll = css`
  scroll-behavior: smooth;
`;


  return (
    <>
      <Header />
      <HeroSection />
      <Newsfeed />
      <MissionSection />
      <div id="get-started" css={smoothScroll}><ActionSection /></div>
      <Footer />
    </>
  );
}
