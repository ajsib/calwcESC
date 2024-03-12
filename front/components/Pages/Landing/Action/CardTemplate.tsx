// ./components/Pages/Landing/ActionSection/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card'; // Adjust the import path as necessary
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon from react-icons
import { ReactNode } from 'react';

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 6rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
  width: calc(50vw - var(--margin) - 12rem);
  text-align: left;
  transition: background-color 0.3s ease-in-out;
`;

const cardTitleStyle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const cardSubtitleStyle = css`
  display: inline;
  font-size: 1.2rem;
  color: #555;
  position: relative;
  transition: all 0.3s ease-in-out;
  line-height: 0rem;
`;

const cardStyleHover = css`

  &:hover {
    background-color: #fff; // Changes background to white on hover

    &:hover {
    
        svg {
          transform: translateX(5px); // Moves the arrow to the right on hover
        }
      }
  }
`;

const arrowIconStyle = css`
  padding-left: 0.75rem;
  padding-bottom: 0.5rem;
  transition: transform 0.3s ease-in-out;
  font-size: 1.5rem;
`;

interface CardTemplateProps {
  title: ReactNode; 
  subtitle: ReactNode; 
}

const CardTemplate = ({ title, subtitle }: CardTemplateProps) => (
  <div css={cardStyleHover}>
    <Card>
      <div css={cardContentStyle}>
        <h2 css={cardTitleStyle}>{title}</h2>
        <p css={cardSubtitleStyle}>
          {subtitle}
          <FiArrowRight css={arrowIconStyle} />
        </p>
      </div>
    </Card>
  </div>
);

export default CardTemplate;
