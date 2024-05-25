// pages/index.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ActionSection from "@/components/landing/HomePage/Action/ActionSection"
import HeroSection from "@/components/landing/HomePage/Hero/HeroSection";
import MissionSection from "@/components/landing/HomePage/Mission/MissionSection";
import Footer from "@/components/landing/shared/Footer";
import Header from "@/components/landing/shared/Header/Header";
import Newsfeed from "@/components/landing/HomePage/Newfeed/Newsfeed";

export default function Home() {

  const smoothScroll = css`
  scroll-behavior: smooth;
`;


  console.log('NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL);


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
