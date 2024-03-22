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

const cardImageStyle = css`
  width: calc(50% - 2.5rem);
  height: auto;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const cardTextStyle = css`
  width: calc(50% - 2.5rem);
  text-align: left;
  align-self: flex-start;
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
  order: number;
}

const CardTemplate = ({ imageSrc, title, text, order }: CardTemplateProps) => (
  <div css={cardSize}>
    <Card>
     <div css={cardStyle} style={{ flexDirection: order === 0 ? 'row' : 'row-reverse' }}>
        <div css={[cardImage, { backgroundImage: `url(${imageSrc})` }]} />
        <div css={cardTextStyle}>
          <h1 css={cardTitleStyle}>{title}</h1>
          {/* the order based on the order number, if it is 0 picture comes first, else picture comes last */}
          <p css={cardDescriptionStyle}>{text}</p>
          <p css={learnMoreStyle}>Learn more</p>
        </div>
      </div>
    </Card>
  </div>
);

export default CardTemplate;