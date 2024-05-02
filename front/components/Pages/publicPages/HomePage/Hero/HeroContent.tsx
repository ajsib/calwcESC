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
  flex-direction: row;
  align-items: center;
  justify-content: ${isMobile ? 'center' : 'flex-start'};
  width: ${isMobile ? '100%' : 'calc(50vw - var(--margin) - calc(1rem + 1vw))'};
  text-align: left;
  margin-left: var(--margin);
  flex-wrap: wrap;
  height: ${isMobile ? '100%' : 'auto'};
  padding-top: 2rem; 
`;


  const titleStyle = css`
    font-size: ${isMobile ? '2.2rem' : 'calc(1.5rem + 1.5vw)'};
    // margin-bottom: 1rem;
    color: var(--primary-color);
    line-height: 1.2;
    margin-right: calc(1rem + 1vw);
  `;

  const imageStyle = css`
    aspect-ratio: ${isMobile ? 'auto' : '3/2'};
    height: ${isMobile ? '2rem' : 'calc(1rem + 3vw)'};
    margin-right: calc(1rem + 1vw);
  `;

  const Title = locale === 'en' ? <>Experimentation <br /> Services Centre</> : <>Centre de services <br /> d&apos;expérimentation </>;

  return (
    <div css={heroContentStyle}>
      <p css={titleStyle}>{Title}</p>
      <img css={imageStyle} src="/images/landing/div-patch.png" alt="Division Logo"/>
    </div>
  );
};

export default HeroContent;
