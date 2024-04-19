// ./components/Landing/HeroContent.tsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from 'next/router'; 

const heroContentStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; /* corrected */
  width: calc(50vw - var(--margin) - calc(1rem + 1vw)); /* corrected */
  text-align: left;
  margin-left: var(--margin);
  flex-wrap: wrap;
`;

const titleStyle = css`
  font-size: calc(1.5rem + 1.5vw);
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.3;
  margin-right: calc(1rem + 1vw);
`;

const imageStyle = css`
  aspect-ratio: 3/2;
  height: calc(1rem + 3vw);
  margin-right: calc(1rem + 1vw);
`;

const HeroContent = () => {
  const router = useRouter();
  const { locale } = router;

  const Title = locale === 'en' ? <>Experimentation <br /> Services Centre</> : <>Centre de services <br /> d&apos;expérimentation </>; /* corrected */

  return (
    <div css={heroContentStyle}>
      <p css={titleStyle}>
        {Title}
      </p>
      <img
        css={imageStyle}
        src="/images/landing/div-patch.png"
        alt="Division Logo"
      />
    </div>
  );
};

export default HeroContent;
