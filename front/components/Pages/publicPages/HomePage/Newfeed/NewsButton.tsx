/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

const NewsNavigateCard = () => {
  const router = useRouter();

  // Enhanced card style with a standout color and an outline
  const cardStyle = css`
    display: flex;
    border: 1px solid #eee;  // Starting border color
    align-items: center;
    justify-content: center;
    color: #555;             // Initial lighter grey text for contrast
    height: 50%;
    width: calc(100% - 1rem);
    margin-left: 1rem;
    transition: border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      cursor: pointer;
      border-color: #ddd;  // Darker grey border on hover
      color: #444;         // Darker text color on hover
      box-shadow: 0 6px 25px rgba(255, 255, 255, 0.2);
      svg {
        fill: #444;       // SVG fill matches text color on hover
        transform: translateX(5px);
      }
    }
  `;

  const contentStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    h4 {
      font-size: 1.5rem;  // Larger font size for emphasis
      font-weight: bold;  // Bold text to make it more noticeable
      transition: color 0.3s ease;  // Ensures the color transition is smooth
    }
    svg {
      transition: all 0.3s ease;  // Smooth transition for the SVG
    }
  `;

  const navigate = () => {
    router.push('/news');
  };

  return (
    <div css={cardStyle} onClick={navigate}>
      <div css={contentStyle}>
        <h4>Explore All News</h4>
        <RightWedgeThin color='#555' size={20} /> 
      </div>
    </div>
  );
};

export default NewsNavigateCard;
