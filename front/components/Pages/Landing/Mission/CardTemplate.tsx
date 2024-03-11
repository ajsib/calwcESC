// ./components/Pages/Landing/Mission/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card'; // Adjust the import path as necessary

const cardStyle = css`
  display: flex;
  align-items: center;
  height: 350px;
`;

const cardSize = css`
    // 100% minus the left and right padding
    width: calc(100% - 24rem);
    padding-left: 12rem;
    padding-bottom: 5rem;
`;

const cardImageContainerStyle = css`
  width: 50%;
  height: 100%;
  margin-right: 2rem;
  overflow: hidden;
  `;

const cardImageStyle = css`
  width: 100%;
  height: 95%;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  object-fit: cover;
`;

const cardTextStyle = css`
  width: 50%;
  text-align: left;
  align-self: flex-start;
  max-height: 100%;
  overflow: auto;
  /* Hide the scrollbar for WebKit browsers */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Firefox */

  /* For WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 6px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Color of the thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Color of the track */
  }
`;

const cardTitleStyle = css`
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: bold;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const cardDescriptionStyle = css`
  font-size: 1.2rem;
  text-align: justify;
  color: var(--primary);
  line-height: 1.2;
  margin-bottom: 4rem;
  margin-right: 2rem;
`;

const learnMoreStyle = css`
  font-size: 0.8rem;
  text-transform: uppercase;
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
        <div css={cardImageContainerStyle}>
          <img css={cardImageStyle} src={imageSrc} alt={title} />
        </div>
        <div css={cardTextStyle}>
          <h1 css={cardTitleStyle}>{title}</h1>
          <p className="caption" css={cardDescriptionStyle}>{text}</p>
          <p className="caption" css={learnMoreStyle}>Learn more</p>
        </div>
      </div>
    </Card>
  </div>
);

export default CardTemplate;
