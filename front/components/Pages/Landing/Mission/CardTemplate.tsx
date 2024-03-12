// ./components/Pages/Landing/Mission/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card'; // Adjust the import path as necessary

const cardStyle = css`
  display: flex;
  align-items: stretch;
`;

const cardSize = css`
    // 100% minus the left and right padding
    width: calc(100% - 24rem);
    padding-left: 12rem;
    padding-bottom: 5rem;
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
}

const CardTemplate = ({ imageSrc, title, text }: CardTemplateProps) => (
  <div css={cardSize}>
    <Card>
     <div css={cardStyle}>
       <img css={cardImageStyle} src={imageSrc} alt={title} />
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