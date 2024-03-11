// ./components/Pages/Landing/ActionSection/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card'; // Adjust the import path as necessary
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon from react-icons

const cardContentStyle = css`
  padding: 2rem;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
`;

const cardTitleStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const cardSubtitleStyle = css`
  display: inline;
  font-size: 1rem;
  color: #555;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
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
  margin-left: 0.5rem; // Space between the subtitle and the arrow icon
  transition: transform 0.3s ease-in-out; // Smooth transition for the icon movement
`;

interface CardTemplateProps {
  title: string;
  subtitle: string;
}

const CardTemplate = ({ title, subtitle }: CardTemplateProps) => (
 <div css={cardStyleHover}>
  <Card>
    <div css={cardContentStyle}>
      <h2 css={cardTitleStyle}>{title}</h2>
      <p className="caption "css={cardSubtitleStyle}>
        {subtitle}
        <FiArrowRight css={arrowIconStyle} />
      </p>
    </div>
  </Card>
    </div>
);

export default CardTemplate;
