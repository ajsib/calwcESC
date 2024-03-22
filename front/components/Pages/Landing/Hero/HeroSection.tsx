// ./components/Landing/HeroSection.tsx
/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import HeroContent from "./HeroContent";

// Initial height of the hero section
const initialHeroHeight = "75vh";

const HeroSection = () => {
  const [heroHeight, setHeroHeight] = useState(initialHeroHeight);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScroll = window.scrollY;

      // Calculate the new height based on the scroll position
      // The more you scroll, the smaller the hero section becomes
      // `10` is a factor determining how quickly the section shrinks; adjust as needed
      const newHeight = Math.max(45, 75 - currentScroll);

      // Update the state to change the hero section's height
      setHeroHeight(`${newHeight}vh`);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSectionStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 63vh;
    transition: height 0.3s;
    background-color: #fbfbfb;
    margin-top: -4rem;
  `;

  const HeroImage = css`
    background-image: url("/images/landing/landing1-2.png");
    background-size: cover;
    background-position: center;
    width: 50vw;
    height: 63vh;
    transition: height 0.3s;
    aspect-ratio: 1/1;
  `;

  return (
    <div css={heroSectionStyle}>
      <HeroContent />
      <div css={HeroImage} />
    </div>
  );
};

export default HeroSection;
