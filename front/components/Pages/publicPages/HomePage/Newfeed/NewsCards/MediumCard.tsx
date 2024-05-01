/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}

interface MediumNewsCardProps {
  item: NewsItem;
}

export const MediumNewsCard: React.FC<MediumNewsCardProps> = ({ item }) => {
  const cardStyle = css`
    display: flex;
    flex-direction: column;
    background-color: #333;
    position: relative;
    overflow: hidden;
    height: 50%;
    max-height: 100%;
    transition: all 0.5s ease;
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
  `;

  const imageStyle = css`
    width: 100%;
    height: calc(50% - 0.5rem);
    object-fit: cover;
  `;

  const contentStyle = css`
    position: relative;
    z-index: 2;
    margin: 1rem;
    color: white;
    h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    small {
      font-size: 0.85rem;
    }
    p {
      font-size: 1rem;
    }
  `;

  const readMoreStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: white;
    font-size: 0.9rem;
    gap: 0.4rem;
    svg{
        transition: all 0.5s ease;
    }
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      svg {
        transform: translateX(3px);
      }
    }
    `;
    

  return (
    <div css={cardStyle}>
      <img src={item.imageUrl} alt={item.title} css={imageStyle} />
      <div css={contentStyle}>
        <h3>{item.title}</h3>
        <small>{item.date}</small>
      </div>
      <div css={readMoreStyle}>
        <p>Read More</p>
        <RightWedgeThin color='#fff' size={13} />
      </div>
    </div>
  );
};
