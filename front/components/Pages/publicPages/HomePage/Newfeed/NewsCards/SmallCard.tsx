/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface SmallNewsCardProps {
  item: NewsItem;
}

export const SmallNewsCard: React.FC<SmallNewsCardProps> = ({ item }) => {
  const cardStyle = css`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 50%;  // Adjusted to better fit smaller dimensions
    max-height: 100%;
    transition: all 0.5s ease;
    width: calc(100% - 1rem);
    margin-left: 1rem;
    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      .readMoreStyle {
        text-decoration: underline;
        color: #444;  // Changed to match MediumNewsCard's hover color style
        svg {
          transform: translateX(3px);
          fill: #444;  // Match the SVG fill on hover to MediumNewsCard
        }
      }
    }
  `;

  const contentStyle = css`
    position: relative;
    z-index: 2;
    margin: 1rem;
    color: #444;  // Updated to match MediumNewsCard text color
    h4 {
      font-size: 1rem;  // Smaller than h3 in MediumNewsCard to suit SmallCard
      font-weight: bold;
      line-height: 1.3rem;
      margin-bottom: 10px;
    }
    small {
      font-size: 0.85rem;
    }
  `;

  const readMoreStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #666;  // Subdued color to match MediumNewsCard
    font-size: 0.9rem;
    gap: 0.4rem;
    svg {
      transition: all 0.2s ease;
    }
  `;

  return (
    <div css={cardStyle}>
      <div css={contentStyle}>
        <h4>{item.title}</h4>
        <small>{item.date}</small>
      </div>
      <div css={readMoreStyle} className="readMoreStyle">
        <p>Read Article</p>
        <RightWedgeThin color='#555' size={11} />
      </div>
    </div>
  );
};
