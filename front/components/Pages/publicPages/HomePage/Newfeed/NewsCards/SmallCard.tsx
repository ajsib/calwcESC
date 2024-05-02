/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useArticle } from '@/contexts/ArticleContext';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  id: number;
  priority: number;
  content: string;
}

interface SmallNewsCardProps {
  item: NewsItem;
}

export const SmallNewsCard: React.FC<SmallNewsCardProps> = ({ item }) => {
  const router = useRouter();
  const articleContext = useArticle()!;
  const { setArticle } = articleContext;

  const handleClick = () => {
    setArticle(item); // Set the article using the item data
    router.push(`/news/${encodeURIComponent(item.id)}`); // Navigate to the appropriate article
  };

  const cardStyle = css`
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    overflow: hidden;
    background-color: #333;
    height: 50%;
    max-height: 100%;
    transition: all 0.5s ease;
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      cursor: pointer;
    }
    &:hover .readMoreStyle {
      cursor: pointer;
      text-decoration: underline;
      svg {
        transform: translateX(3px);
      }
    }
  `;

  const contentStyle = css`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    h4 {
      font-size: 1.2rem;
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
    font-size: 0.8rem;
    gap: 0.4rem;
    svg {
      transition: all 0.5s ease;
    }
  `;

  return (
    <div css={cardStyle} onClick={handleClick}>
      <div css={contentStyle}>
        <h4>{item.title}</h4>
      </div>
      <div css={readMoreStyle} className="readMoreStyle">
        <p>Read More</p>
        <RightWedgeThin color='#fff' size={11} />
      </div>
    </div>
  );
};
