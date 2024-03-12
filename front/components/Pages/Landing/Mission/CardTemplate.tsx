// ./components/Pages/Landing/Mission/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card'; // Adjust the import path as necessary

const cardStyle = css`
  display: flex;
  align-items: stretch;
`;

const cardSize = css`
  width: calc(100% - 2 * var(--margin));
  padding-left: calc(var(--margin) - 0.5rem);
  padding-bottom: 4rem;
`;

const cardImage = css`
  background-size: cover;
  background-position: center;
  width: calc(50% - 2.5rem); // Subtract your desired margin
  margin: 0.5rem;
  background-repeat: no-repeat; 
`;

const cardTextStyle = css`
  width: calc(50% - 2.5rem);
  text-align: left;
  padding-left: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const cardTitleStyle = css`
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: bold;
  padding-bottom: 2rem;
`;

const cardDescriptionStyle = css`
  font-size: 1.2rem;
  text-align: justify;
  color: var(--primary);
  line-height: 1.2;
`;

const learnMoreStyle = css`
  font-size: 0.8rem;
  text-transform: uppercase;
  padding-top: 3rem;
`;

interface CardTemplateProps {
  imageSrc: string;
  title: string;
  text: string;
}

const CardTemplate = ({ imageSrc, title, text }: CardTemplateProps) => (
  <div css={cardSize}>
    <Card>
     <div css={cardStyle}>
        {/* Use div with background image here */}
        <div css={[cardImage, { backgroundImage: `url(${imageSrc})` }]} />
        <div css={cardTextStyle}>
          <h1 css={cardTitleStyle}>{title}</h1>
          <p css={cardDescriptionStyle}>{text}</p>
          <p css={learnMoreStyle}>Learn more</p>
        </div>
      </div>
    </Card>
  </div>
);

export default CardTemplate;