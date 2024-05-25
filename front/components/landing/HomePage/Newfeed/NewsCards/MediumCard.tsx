/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useArticle } from '@/components/modules/News/ArticleContext';
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

interface MediumNewsCardProps {
  item: NewsItem;
}

export const MediumNewsCard: FC<MediumNewsCardProps> = ({ item }) => {
  const router = useRouter();
  const articleContext = useArticle()!;
  const { setArticle } = articleContext;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleClick = () => {
    setArticle(item); 
    router.push(`/news/${encodeURIComponent(item.id)}`); 
  };

  const cardStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(50% - 0.5rem);
  max-height: 100%;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    .readMoreText {
      text-decoration: underline;
      color: #444;
    }
    svg {
      transform: translateX(3px);
      // fill: #444;
    }
  }
`;

  const imageContainerStyle = css`
    position: relative;
    width: 100%;
    height: calc(50% - 0.5rem);
    overflow: hidden;
  `;

  const imageStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0) 100%);
  `;

  const contentStyle = css`
    position: relative;
    z-index: 2;
    margin: 1rem;
    color: #444;
    h3 {
      font-size: 1.15rem;
      font-weight: bold;
      line-height: 1.3rem;
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
    color: #666;
    font-size: 0.9rem;
    gap: 0.4rem;
    cursor: pointer;
    svg {
      transition: all 0.2s ease;
    }
  `;

  return (
    <div css={cardStyle} onClick={handleClick}>
      <div css={imageContainerStyle}>
        <img src={backendUrl + item.imageUrl} alt={item.title} css={imageStyle} />
        <div css={overlayStyle}></div>
      </div>
      <div css={contentStyle}>
        <h3>{item.title}</h3>
        <small>{item.date}</small>
      </div>
      <div css={readMoreStyle}>
        <p className="readMoreText">Read Article</p>
        <RightWedgeThin color='#555' size={13} />
      </div>
    </div>
  );
};
