/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from 'next/router';

interface HeroContentProps {
  isMobile: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isMobile }) => {
  const router = useRouter();
  const { locale } = router;

  const heroContentStyle = css`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    width: calc(50vw - 1.5rem); 
    height: ${isMobile ? '100%' : '100vh'}; 
    text-align: left; 
    background-color: rgba(0, 0, 0, 0.3); /* Slightly transparent black */
  `;

  const titleStyle = css`
  position: sticky; /* Make the title sticky */
  top: 30vh; /* Stick the title 25% down from the top of the viewport */
  left: calc(25% - 1.5rem); /* Adjust the left position as needed */
  transform: translate(-50%, -50%); 
  font-size: ${isMobile ? '2.2rem' : 'calc(1.5rem + 2vw)'};
  color: #fff;
  // font-weight: bold;
  line-height: 1.2;
  -webkit-text-stroke: 0.5px #222;
  text-stroke: 0.5px #222;
`;



  const Title = locale === 'en' ? <>Experimentation <br /> Services Centre</> : <>Centre de services <br /> d&apos;expérimentation </>;

  return (
    <div css={heroContentStyle}>
      <p css={titleStyle}>{Title}</p>
    </div>
  );
};

export default HeroContent;
