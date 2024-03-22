// ./components/Pages/Landing/Mission/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@/components/UI/Card"; // Adjust the import path as necessary

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
  margin: 1rem;
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
  padding-left: 1rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

const cardTitleStyle = css`
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: bold;
  padding-bottom: 2rem;
  position: relative;
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

const cardHoverEffect = css`
  .card-title-hover-effect::after {
    content: "";
    position: absolute;
    bottom: -1px; // Adjust as necessary to position the underline
    left: 0;
    width: 100%; // Underline spans the full element width
    height: 2px; // Thickness of the underline
    background-color: var(--primary); // Color of the underline
    opacity: 0; // Start fully transparent
    transition: opacity 0.5s ease-in-out; // Smooth transition for the opacity
  }
  &:hover .card-title-hover-effect::after {
    opacity: 1; // Fully visible on hover
  }
`;

interface CardTemplateProps {
  imageSrc: string;
  title: string;
  text: string;
  order: number;
}

const CardTemplate = ({ imageSrc, title, text }: CardTemplateProps) => (
  <div css={[cardSize, cardHoverEffect]}>
    <Card>
      <div css={cardStyle}>
        {/* Use div with background image here */}
        <div css={[cardImage, { backgroundImage: `url(${imageSrc})` }]} />
        <div css={cardTextStyle}>
          <h1 className="card-title-hover-effect" css={cardTitleStyle}>
            {title}
          </h1>
          <p css={cardDescriptionStyle}>{text}</p>
          <p css={learnMoreStyle}>Learn more</p>
        </div>
      </div>
    </Card>
  </div>
);

export default CardTemplate;
